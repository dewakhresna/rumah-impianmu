import { ToasterContext } from "@/contexts/ToasterContext";
import houseServices from "@/services/house.service";
import { IHouse } from "@/types/House";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useContext } from "react";

const useDetailHouse = () => {
  const { query, isReady } = useRouter();
  const { setToaster } = useContext(ToasterContext);

  const getHouseById = async () => {
    const res = await houseServices.getHouseById(Number(query.id));
    return res.data.data; 
  };

  const { data: dataHouse, refetch: refetchHouse } = useQuery({
    queryKey: ["House", query.id],
    queryFn: getHouseById,
    enabled: isReady && !!query.id, 
  });

  const updateHouse = async (payload: IHouse) => {
    const res = await houseServices.updateHouse(Number(query.id), payload);
    return res.data.data;
  };

  const {
    mutate: mutateUpdateHouse,
    isPending: isPendingMutateUpdateHouse,
    isSuccess: isSuccessMutateUpdateHouse,
  } = useMutation({
    mutationFn: (payload: IHouse) => updateHouse(payload),
    onError: (error: any) => {
      setToaster({
        type: "error",
        message: error.response?.data?.meta?.message || "Failed to change data",
      });
    },
    onSuccess: () => {
      refetchHouse();
      setToaster({
        type: "success",
        message: "Home data successfully updated!",
      });
    },
  });

  const handleUpdateHouse = (data: IHouse) => mutateUpdateHouse(data);

  return {
    dataHouse,
    handleUpdateHouse,
    isPendingMutateUpdateHouse,
    isSuccessMutateUpdateHouse,
  };
};

export default useDetailHouse;