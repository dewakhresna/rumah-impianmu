import useMediaHandling from "@/hooks/useMediaHandling";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

// Skema validasi untuk detail rumah
const schema = yup.object().shape({
  contact: yup.string().required("Kontak pemilik/agen wajib diisi"),
  description: yup.string().required("Deskripsi wajib diisi"),
  beds: yup.number().typeError("Harus berupa angka").required("Jumlah kamar tidur wajib diisi"),
  baths: yup.number().typeError("Harus berupa angka").required("Jumlah kamar mandi wajib diisi"),
  image_1: yup.mixed<FileList | string>().nullable(),
  image_2: yup.mixed<FileList | string>().nullable(),
  image_3: yup.mixed<FileList | string>().nullable(),
});

const useHouseDetailTab = () => {
  const {
    handleUploadFile,
    isPendingMutateUploadFile,
    handleDeleteFile,
    isPendingMutateDeleteFile,
  } = useMediaHandling();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    getValues,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Pantau perubahan preview untuk masing-masing gambar
  const preview1 = watch("image_1");
  const preview2 = watch("image_2");
  const preview3 = watch("image_3");

  // Handler dinamis untuk mengunggah gambar berdasarkan nama field (image_1, image_2, atau image_3)
const handleUploadImage = (
    fieldName: "image_1" | "image_2" | "image_3",
    files: FileList,
    onChange: (...event: any[]) => void
  ) => {
    handleUploadFile(files, onChange, (result: any) => {
      // 1. Ekstrak string URL-nya dengan aman. 
      // Mengantisipasi jika useMediaHandling mengembalikan object { fileUrl: "..." }
      const finalUrl = typeof result === "string" ? result : result?.fileUrl;

      if (finalUrl) {
        // 2. Paksa komponen InputFile menyimpan Teks URL, bukan lagi FileList
        onChange(finalUrl);
        
        // 3. Paksa sinkronisasi nilai form untuk persiapan Submit
        setValue(fieldName, finalUrl, { 
          shouldValidate: true, 
          shouldDirty: true 
        });
      }
    });
  };

  // Handler dinamis untuk menghapus gambar
  const handleDeleteImage = (
    fieldName: "image_1" | "image_2" | "image_3",
    onChange: (files: FileList | undefined) => void
  ) => {
    const fileUrl = getValues(fieldName) as string;
    handleDeleteFile(fileUrl, () => {
      onChange(undefined);
      setValue(fieldName, ""); // Kosongkan URL di form
    });
  };

  return {
    handleUploadImage,
    handleDeleteImage,
    isPendingMutateDeleteFile,
    isPendingMutateUploadFile,

    control,
    errors,
    handleSubmit,
    reset,
    setValue,

    preview1,
    preview2,
    preview3,
  };
};

export default useHouseDetailTab;