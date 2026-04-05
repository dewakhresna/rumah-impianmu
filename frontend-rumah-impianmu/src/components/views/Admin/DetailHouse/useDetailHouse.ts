import { ToasterContext } from "@/contexts/ToasterContext";
import houseServices from "@/services/house.service";
import houseDetailServices from "@/services/houseDetail.service";
import { IHouse } from "@/types/House";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useContext } from "react";
import { IHouseDetail } from "./HouseDetailTab/HouseDetailTab";

const useDetailHouse = () => {
  const { query, isReady } = useRouter();
  const { setToaster } = useContext(ToasterContext);

  // ==========================================
  // LOGIKA TAB 1: DATA RUMAH (UTAMA)
  // ==========================================
  const getHouseById = async () => {
    const res = await houseServices.getHouseById(Number(query.id));
    return res.data.data; 
  };

  const { data: dataHouse, refetch: refetchHouse } = useQuery({
    queryKey: ["House", query.id],
    queryFn: getHouseById,
    enabled: isReady && !!query.id, 
  });

  const {
    mutate: mutateUpdateHouse,
    isPending: isPendingMutateUpdateHouse,
    isSuccess: isSuccessMutateUpdateHouse,
  } = useMutation({
    mutationFn: async (payload: IHouse) => {
      const res = await houseServices.updateHouse(Number(query.id), payload);
      return res.data.data;
    },
    onError: (error: any) => {
      setToaster({ type: "error", message: error.response?.data?.meta?.message || "Gagal mengubah data utama" });
    },
    onSuccess: () => {
      refetchHouse();
      setToaster({ type: "success", message: "Data rumah berhasil diperbarui!" });
    },
  });

  // ==========================================
  // LOGIKA TAB 2: DETAIL TAMBAHAN (GALERI DLL)
  // ==========================================
  const getHouseDetail = async () => {
    try {
      const res = await houseDetailServices.getDetailByHouseId(Number(query.id));
      return res.data.data;
    } catch (error: any) {
      // Jika error 404 (data belum pernah dibuat), kita kembalikan null agar tidak error merah di layar
      if (error.response?.status === 404) return null; 
      throw error;
    }
  };

  const { data: dataHouseDetail, refetch: refetchHouseDetail } = useQuery({
    queryKey: ["HouseDetail", query.id],
    queryFn: getHouseDetail,
    enabled: isReady && !!query.id,
  });

  const {
    mutate: mutateUpdateHouseDetail,
    isPending: isPendingMutateUpdateHouseDetail,
    isSuccess: isSuccessMutateUpdateHouseDetail,
  } = useMutation({
    mutationFn: async (payload: IHouseDetail) => {
      if (dataHouseDetail) {
        // Jika data sudah ada -> Lakukan UPDATE
        const res = await houseDetailServices.updateDetail(Number(query.id), payload);
        return res.data.data;
      } else {
        // Jika data belum ada -> Lakukan CREATE (Sisipkan house_id)
        const payloadWithHouseId = { ...payload, house_id: Number(query.id) };
        const res = await houseDetailServices.createDetail(payloadWithHouseId);
        return res.data.data;
      }
    },
    onError: (error: any) => {
      setToaster({ type: "error", message: error.response?.data?.meta?.message || "Gagal menyimpan detail rumah" });
    },
    onSuccess: () => {
      refetchHouseDetail(); // Ambil data terbaru setelah berhasil simpan
      setToaster({ type: "success", message: "Detail dan galeri berhasil disimpan!" });
    },
  });

  return {
    // Return untuk Tab 1
    dataHouse,
    handleUpdateHouse: (data: IHouse) => mutateUpdateHouse(data),
    isPendingMutateUpdateHouse,
    isSuccessMutateUpdateHouse,

    // Return untuk Tab 2
    dataHouseDetail,
    handleUpdateHouseDetail: (data: IHouseDetail) => mutateUpdateHouseDetail(data),
    isPendingMutateUpdateHouseDetail,
    isSuccessMutateUpdateHouseDetail,
  };
};

export default useDetailHouse;