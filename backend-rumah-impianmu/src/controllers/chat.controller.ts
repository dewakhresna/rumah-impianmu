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
      // 1. Ekstrak pesan dan Hard Filter dari body request
      const { 
        pesan, 
        hargaMin, hargaMax, 
        beds, baths,        
        luasMin, luasMax   
      } = req.body;

      if (!pesan) {
        return res.status(400).json({ message: "Pesan wajib diisi" });
      }

      // 2. Tarik data MENGGUNAKAN Filter Mutlak
      const rawData = await HouseService.getFilteredForChat({
        hargaMin, hargaMax, beds, baths, luasMin, luasMax
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

      // Case Data Kosong
      if (dataRumah.length === 0) {
        return res.status(404).json({ 
          status: "not_found",
          message: "Maaf, tidak ada rumah yang sesuai dengan kriteria filter Anda. Cobalah memperluas rentang harga atau kurangi filter kamar.",
          data: { balasan_ai: "Saya tidak menemukan rumah yang pas dengan filter tersebut.", rekomendasi: [] }
        });
      }

      // 3. Ekstraksi Bobot & Generate Balasan via AI Groq
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
            }`
          },
          {
            role: "user",
            content: pesan,
          },
        ],
        model: "llama-3.3-70b-versatile",
        response_format: { type: "json_object" }, 
        temperature: 0.2, 
      });

      let aiResponse;
      try {
        aiResponse = JSON.parse(completion.choices[0].message.content || "{}");
      } catch (e) {
        console.error("Gagal mem-parsing JSON dari Groq:", e);
        aiResponse = {
          balasan_chat: "Berikut adalah properti terbaik yang berhasil saya rangkum untuk Anda.",
          bobot: { C1_Harga: 3, C2_Jarak: 3, C3_Keamanan: 3, C4_Luas: 3 }
        };
      }

      const bobotUser = aiResponse.bobot;
      const pesanBalasan = aiResponse.balasan_chat;

      let hasilRekomendasi = [];
      
      // Case Hanya 1 Data Tersisa
      if (dataRumah.length === 1) {
        hasilRekomendasi = [{ ...dataRumah[0], skor: "1.0000" }];
      } else {
        hasilRekomendasi = hitungTopsis(dataRumah, bobotUser);
      }

      // 5. Respon Final ke Frontend
      return res.status(200).json({
        status: "success",
        data: {
          balasan_ai: pesanBalasan,
          bobot_ekstraksi: bobotUser,
          rekomendasi: hasilRekomendasi.slice(0, 3), // Kirim Top 3 data
        },
      });
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({ status: "error", message: error.message });
    }
  },
};