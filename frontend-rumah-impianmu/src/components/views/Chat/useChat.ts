import { useState, useRef, useEffect } from "react";
import api from "@/utils/api";
import { Message } from "./types.js";

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
      const response = await api.post("/chat/send", {
        pesan: userMessage.text,
      });

      // Ambil maksimal 3 rekomendasi terbaik
      const daftarRekomendasi = response.data.data.rekomendasi.slice(0, 3);

      setMessages((prev) => [
        ...prev,
        { 
          id: Date.now() + 1, 
          role: "admin", 
          text: "Berikut adalah rekomendasi rumah terbaik berdasarkan kriteria Anda:",
          houses: daftarRekomendasi, // Lempar array langsung ke komponen
          outroText: "Apakah ada kriteria lain yang ingin Anda ubah?"
        },
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