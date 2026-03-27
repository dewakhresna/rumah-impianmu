import Cookies from "js-cookie";
import { useRouter } from "next/router";

export const useLogout = () => {
  const router = useRouter();

  const handleLogout = () => {
    // 1. Hapus KTP Digital dari browser
    Cookies.remove("token");
    
    // 2. Arahkan kembali ke halaman login
    router.push("/login");
  };

  return handleLogout; // Kembalikan fungsinya agar bisa dipanggil oleh komponen
};