import { useState, useEffect, useContext } from "react";
import instance from "@/libs/axios/instance";
import { ToasterContext } from "@/contexts/ToasterContext";
import useMediaHandling from "@/hooks/useMediaHandling"; 

interface FormData {
  fullName: string;
  username: string;
  email: string;
  profilePicture: string;
}

export const useEditProfile = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    username: "",
    email: "",
    profilePicture: "user.jpg",
  });

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const { setToaster } = useContext(ToasterContext);

  const { handleUploadFile, isPendingMutateUploadFile } = useMediaHandling();

  const handleUploadPhoto = (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const dummyOnChange = () => {};

    handleUploadFile(files, dummyOnChange, (result: any) => {
      const finalUrl = typeof result === "string" ? result : result?.fileUrl;

      if (finalUrl) {
        // perbarui preview gambar di antarmuka
        setFormData((prev) => ({ ...prev, profilePicture: finalUrl }));
        // setToaster({ type: "success", message: "Foto profil berhasil diunggah ke server!" });
      }
    });
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await instance.get("/auth/me");
        if (response.data) {
          const userData = response.data.data || response.data;
          setFormData({
            fullName: userData.fullName || "",
            username: userData.username || "",
            email: userData.email || "",
            profilePicture: userData.profilePicture || "user.jpg",
          });
        }
      } catch (error: any) {
        setToaster({ type: "error", message: "Gagal memuat data pengguna." });
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [setToaster]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveChanges = async () => {
    setIsSaving(true);
    try {
      const response = await instance.put("/auth/profile", formData);
      setToaster({ type: "success", message: "Profil berhasil diperbarui!" });

      const updatedUser = response.data?.data || response.data;
      if (updatedUser) {
        setFormData((prev) => ({ ...prev, ...updatedUser }));
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "Terjadi kesalahan pada server.";
      setToaster({ type: "error", message: errorMessage });
    } finally {
      setIsSaving(false);
    }
  };

  return {
    formData,
    isLoading,
    isSaving,
    isUploadingPhoto: isPendingMutateUploadFile,
    handleInputChange,
    handleSaveChanges,
    handleUploadPhoto,
  };
};