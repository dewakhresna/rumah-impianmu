import { ToasterContext } from "@/contexts/ToasterContext";
import userServices from "@/services/user.service"; // ✅ Import userServices
import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";

const useDeleteUserModal = () => {
  const { setToaster } = useContext(ToasterContext);

  // ✅ Ubah fungsi penembak API ke deleteUser
  const deleteUser = async (id: string) => {
    const res = await userServices.deleteUser(Number(id));
    return res;
  };

  const {
    mutate: mutateDeleteUser,
    isPending: isPendingMutateDeleteUser,
    isSuccess: isSuccessMutateDeleteUser,
  } = useMutation({
    mutationFn: deleteUser, // ✅ Panggil fungsi deleteUser
    onError: (error: any) => {
      setToaster({
        type: "error",
        // ✅ Ubah default message jika error dari backend kosong
        message: error.response?.data?.meta?.message || "Failed to delete user data", 
      });
    },
    onSuccess: () => {
      setToaster({
        type: "success",
        // ✅ Ubah pesan sukses
        message: "User data successfully deleted!", 
      });
    },
  });

  return {
    mutateDeleteUser,
    isPendingMutateDeleteUser,
    isSuccessMutateDeleteUser,
  };
};

export default useDeleteUserModal;