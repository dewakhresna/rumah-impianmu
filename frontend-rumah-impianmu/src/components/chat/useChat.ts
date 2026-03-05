import { useState, useRef, useEffect } from "react";
import api from "@/utils/api";
import { Message } from "./types";

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "admin",
      text: "Halo! 👋 Selamat datang di Rumah Impianmu. Ada kriteria rumah yang sedang Anda cari hari ini?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { id: Date.now(), role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Sesuaikan endpoint dan properti balasan dengan backend
      const response = await api.post("/chat/send", {
        pesan: userMessage.text,
      });

      // Ambil array rekomendasi dari response backend Anda
      const daftarRekomendasi = response.data.data.rekomendasi;

      let aiReplyText =
        "Berikut adalah rekomendasi rumah terbaik berdasarkan kriteria Anda:\n\n";

      // Looping 3 rumah terbaik saja agar chat tidak terlalu panjang
      daftarRekomendasi.slice(0, 3).forEach((rumah: any, index: number) => {
        // Pembulatan skor TOPSIS agar lebih rapi (misal 0.8523 -> 0.85)
        const skor = Number(rumah.skor || 0).toFixed(2);
        aiReplyText += `${index + 1}. ${rumah.nama} (Skor Kecocokan: ${skor})\n`;
      });

      aiReplyText += "\nApakah ada kriteria lain yang ingin Anda ubah?";

      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, role: "admin", text: aiReplyText },
      ]);
    } catch (error) {
      console.error("Error fetching chat response:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "admin",
          text: "Maaf, sistem AI atau koneksi sedang bermasalah.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    messages,
    input,
    setInput,
    isLoading,
    messagesEndRef,
    handleSendMessage,
  };
}
