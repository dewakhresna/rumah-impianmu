import { useState } from "react";
import { useRouter } from "next/router"; // Gunakan next/navigation jika pakai App Router
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import authServices from "@/services/auth.service";

export const useLogin = () => {
  const router = useRouter();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");

    try {
      // Panggil fungsi login
      const response = await authServices.login({ identifier, password });
      
      // Ambil token dari respons backend
      const token = response.data.data; 

      // Simpan token di Cookies. 
      Cookies.set("token", token, { expires: 1 }); // Expired 1 hari

      // Decode token untuk melihat role
      const decoded: any = jwtDecode(token);

      // Redirect otomatis sesuai role
      if (decoded.role === "admin") {
        router.push("/admin/dashboard");
      } else {
        router.push("/"); // halaman utama pencarian properti
      }
    } catch (error: any) {
      // Tangkap pesan error dari backend
      const message = error.response?.data?.meta?.message || "Terjadi kesalahan pada server.";
      setErrorMsg(message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    identifier,
    setIdentifier,
    password,
    setPassword,
    isLoading,
    errorMsg,
    handleLogin,
  };
};