import { Request, Response } from "express";
import { Groq } from "groq-sdk";
import { hitungTopsis, Rumah } from "../utils/topsis.js";
import HouseService from "../service/house.service.js";
import { GROQ_API_KEY } from "../utils/env.js";

const groq = new Groq({
  apiKey: GROQ_API_KEY,
});

export default {
  async chat(req: Request, res: Response) {
    try {
      const { pesan, hargaMin, hargaMax, beds, baths, luasMin, luasMax } =
        req.body;

      if (!pesan) {
        return res.status(400).json({ message: "Pesan wajib diisi" });
      }

      console.log(
        "\n=========================================================",
      );
      console.log("📥 MENERIMA PESAN DARI PENGGUNA (LIVECHAT)");
      console.log("=========================================================");
      console.log(`💬 Pesan Pengguna : "${pesan}"`);
      console.log("🎯 Hard Filter:");
      console.table([
        {
          "Harga Min": hargaMin || "Tidak dibatasi",
          "Harga Max": hargaMax || "Tidak dibatasi",
          "Kamar Tidur (Beds)": beds || "Tidak dibatasi",
          "Luas Min": luasMin || "Tidak dibatasi",
          "Luas Max": luasMax || "Tidak dibatasi",
        },
      ]);

      console.log("\n🗃️ QUERY KE DATABASE BERDASARKAN FILTER...");
      const rawData = await HouseService.getFilteredForChat({
        hargaMin,
        hargaMax,
        beds,
        baths,
        luasMin,
        luasMax,
      });

      const dataRumah: Rumah[] = rawData.map((r: any) => ({
        id: r.id,
        nama: r.nama ?? "Tanpa Nama",
        c1_harga: r.c1_harga ?? 0,
        c2_jarak: r.c2_jarak ?? 0,
        c3_keamanan: r.c3_keamanan ?? 0,
        c4_luas: r.c4_luas ?? 0,
        HouseDetail: r.HouseDetail,
        imageUrl: r.HouseDetail?.image_1,
      }));

      console.log(
        `✅ Ditemukan ${dataRumah.length} properti yang sesuai Hard Filter.`,
      );
      if (dataRumah.length > 0) {
        console.log("Daftar Properti yang lolos untuk dihitung TOPSIS:");
        console.table(
          dataRumah.map((r) => ({
            ID: r.id,
            Nama_Properti: r.nama,
            Harga: r.c1_harga,
          })),
        );
      }

      // Case Data Kosong
      if (dataRumah.length === 0) {
        console.log(
          "❌ Eksekusi dihentikan karena tidak ada data yang sesuai filter (404 Not Found).\n",
        );
        return res.status(404).json({
          status: "not_found",
          message:
            "Maaf, tidak ada rumah yang sesuai dengan kriteria filter Anda. Cobalah memperluas rentang harga atau kurangi filter kamar.",
          data: {
            balasan_ai:
              "Saya tidak menemukan rumah yang pas dengan filter tersebut.",
            rekomendasi: [],
          },
        });
      }

      // Ekstraksi Bobot & Generate Balasan via AI Groq
      console.log("\n🤖 MENGIRIM PESAN KE AI UNTUK EKSTRAKSI BOBOT...");
      const completion = await groq.chat.completions.create({
        messages: [
          {
            role: "system",
            content: `Anda adalah agen properti cerdas. Tugas Anda ada 2:
            1. Buat 1-2 kalimat balasan ramah untuk merespons chat pengguna, seolah Anda akan menyajikan rekomendasinya di bawah chat ini.
            2. Ekstrak PREFERENSI pengguna dari chat menjadi bobot angka (skala 1-5).
               1 = Tidak Penting, 3 = Cukup Penting, 5 = Sangat Penting.

            Kriteria: C1_Harga, C2_Jarak, C3_Keamanan, C4_Luas.
            
            Output HARUS JSON murni tanpa markdown, dengan format persis seperti ini:
            {
              "balasan_chat": "Tentu, ini beberapa rekomendasi rumah strategis dan aman untuk Anda...",
              "bobot": {
                "C1_Harga": 3,
                "C2_Jarak": 5,
                "C3_Keamanan": 4,
                "C4_Luas": 3
              }
            }
            
            PENTING: Anda HARUS merespons HANYA dengan objek JSON yang valid. JANGAN tambahkan kalimat pengantar, JANGAN gunakan markdown, dan JANGAN tambahkan teks apa pun di luar struktur kurung kurawal JSON.`,
          },
          {
            role: "user",
            content: pesan,
          },
        ],
        model: "groq/compound-mini",
        response_format: { type: "json_object" },
        temperature: 0.1,
      });

      let aiResponse;
      try {
        const aiResponseText = completion.choices[0].message?.content || "{}";

        const jsonMatch = aiResponseText.match(/\{[\s\S]*\}/);

        if (!jsonMatch) {
          throw new Error("Pola JSON tidak ditemukan dalam balasan AI.");
        }

        aiResponse = JSON.parse(jsonMatch[0]);
        console.log(
          "✅ Berhasil mengekstrak JSON dari respon AI:\n",
          aiResponse,
        );
      } catch (e) {
        console.error(
          "❌ Gagal mem-parsing JSON dari Groq. Menggunakan Fallback. Error:",
          e,
        );
        aiResponse = {
          balasan_chat:
            "Berikut adalah properti terbaik yang berhasil saya rangkum untuk Anda berdasarkan ketersediaan kami.",
          bobot: { C1_Harga: 3, C2_Jarak: 3, C3_Keamanan: 3, C4_Luas: 3 },
        };
      }

      const bobotUser = aiResponse.bobot;
      const pesanBalasan = aiResponse.balasan_chat;

      let hasilRekomendasi = [];

      if (dataRumah.length === 1) {
        console.log(
          "\n⚠️ [INFO] Hanya 1 data yang lolos filter. Melewati perhitungan TOPSIS dan memberikan skor absolut 1.0000.",
        );
        hasilRekomendasi = [{ ...dataRumah[0], skor: "1.0000" }];
      } else {
        console.log("\n⚙️ MENERUSKAN DATA DAN BOBOT AI KE ALGORITMA TOPSIS...");
        hasilRekomendasi = hitungTopsis(dataRumah, bobotUser);
      }

      console.log("\n🚀 MENGIRIM 3 REKOMENDASI TERATAS UNTUK DITAMPILKAN");

      return res.status(200).json({
        status: "success",
        data: {
          balasan_ai: pesanBalasan,
          bobot_ekstraksi: bobotUser,
          rekomendasi: hasilRekomendasi.slice(0, 3),
        },
      });
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({ status: "error", message: error.message });
    }
  },
};
