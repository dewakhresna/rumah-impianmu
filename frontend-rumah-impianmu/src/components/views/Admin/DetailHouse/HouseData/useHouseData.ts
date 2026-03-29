import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schemaUpdateInfo = yup.object().shape({
  nama: yup.string().required("Nama rumah wajib diisi"),
  c1_harga: yup.number().typeError("Harga harus berupa angka").required("Harga wajib diisi"),
  c2_jarak: yup.number().typeError("Jarak harus berupa angka").required("Jarak wajib diisi"),
  c3_keamanan: yup.number().typeError("Nilai keamanan harus berupa angka").required("Keamanan wajib diisi"),
  c4_luas: yup.number().typeError("Luas harus berupa angka").required("Luas wajib diisi"),
});

const useHouseData = () => {
  const {
    control: controlUpdateInfo,
    handleSubmit: handleSubmitUpdateInfo,
    formState: { errors: errorsUpdateInfo },
    reset: resetUpdateInfo,
    setValue: setValueUpdateInfo,
  } = useForm({
    resolver: yupResolver(schemaUpdateInfo),
  });
  
  return {
    controlUpdateInfo,
    errorsUpdateInfo,
    handleSubmitUpdateInfo,
    resetUpdateInfo,
    setValueUpdateInfo,
  };
};

export default useHouseData;