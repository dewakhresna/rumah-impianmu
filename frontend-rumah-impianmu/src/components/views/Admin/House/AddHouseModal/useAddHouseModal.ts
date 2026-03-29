import { ToasterContext } from "@/contexts/ToasterContext";
import houseServices from "@/services/house.service";
import { IHouse } from "@/types/House";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

// Validasi Form disesuaikan dengan kolom House Anda
const schema = yup.object().shape({
  nama: yup.string().required("The name of the house is mandatory"),
  c1_harga: yup.number().typeError("Prices must be numbers").required("Price is mandatory"),
  c2_jarak: yup.number().typeError("Distance must be a number").required("Distance is required"),
  c3_keamanan: yup.number().typeError("Security value must be a number").required("Security is mandatory"),
  c4_luas: yup.number().typeError("Area must be a number").required("Area is required"),
});

const useAddHouseModal = () => {
  const { setToaster } = useContext(ToasterContext);

  const {
    control,
    handleSubmit: handleSubmitForm,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleOnClose = (onClose: () => void) => {
    reset(); // Kosongkan form saat modal ditutup
    onClose();
  };

  const addHouse = async (payload: IHouse) => {
    const res = await houseServices.addHouse(payload);
    return res;
  };

  const {
    mutate: mutateAddHouse,
    isPending: isPendingMutateAddHouse,
    isSuccess: isSuccessMutateAddHouse,
  } = useMutation({
    mutationFn: addHouse,
    onError: (error: any) => {
      setToaster({
        type: "error",
        // Menangkap pesan error rapi dari backend baru kita
        message: error.response?.data?.meta?.message || "A system error occurred",
      });
    },
    onSuccess: () => {
      setToaster({
        type: "success",
        message: "Home data added successfully!",
      });
      reset(); // Bersihkan form setelah sukses
    },
  });

  const handleAddHouse = (data: any) => mutateAddHouse(data);

  return {
    control,
    errors,
    reset,
    handleSubmitForm,
    handleAddHouse,
    isPendingMutateAddHouse,
    isSuccessMutateAddHouse,
    handleOnClose,
  };
};

export default useAddHouseModal;