import { useState } from "react";
import instance from "@/libs/axios/instance"; // <-- Gunakan axios instance buatan Anda
import { useRouter } from "next/navigation"; // <-- Sesuaikan dengan router Anda (next/navigation untuk App Router, next/router untuk Pages)

export const useRegister = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null); // Tambahan untuk pesan sukses

  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    // Validasi Basic Frontend
    if (!fullName || !username || !email || !password || !confirmPassword) {
      setErrorMsg("Semua kolom harus diisi.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMsg("Kata sandi dan konfirmasi kata sandi tidak cocok.");
      return;
    }

    setIsLoading(true);

    try {
      // 1. Siapkan payload sesuai dengan req.body yang diminta Backend
      const payload = {
        fullName,
        username,
        email,
        password,
        confirmPassword, // Backend Anda meminta ini untuk proses validasi DTO
      };

      // 2. Tembak API Backend
      const response = await instance.post("/auth/register", payload);

      // 3. Tangani kesuksesan
      setSuccessMsg("Registrasi berhasil! Mengalihkan ke halaman login...");
      
      // Opsional: Bersihkan form
      setFullName("");
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      // 4. Arahkan pengguna ke halaman login setelah jeda sejenak agar pesan sukses terbaca
      setTimeout(() => {
        router.push("/auth/login");
      }, 1500);
      
    } catch (error: any) {
      // Tangkap pesan error spesifik dari Backend (misal: DTO error atau Duplikat Email)
      // Sesuaikan pembacaan JSON error ini dengan struktur response.error di Backend Anda
      const backendError = error.response?.data?.meta?.message 
                        || error.response?.data?.message 
                        || "Terjadi kesalahan saat mendaftar. Silakan coba lagi.";
      
      setErrorMsg(backendError);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    fullName, setFullName,
    username, setUsername,
    email, setEmail,
    password, setPassword,
    confirmPassword, setConfirmPassword,
    isLoading,
    errorMsg,
    successMsg,
    handleRegister
  };
};