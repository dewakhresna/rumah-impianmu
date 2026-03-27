import DataTable from "@/components/ui/DataTable";
import { useDisclosure } from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Key, ReactNode, useCallback, useEffect } from "react";
import { COLUMN_LISTS_HOUSE } from "./House.constants";
import DropdownAction from "@/components/commons/DropdownAction";
import useChangeUrl from "@/hooks/useChangeUrl";
import useHouse from "./useHouse";

const House = () => {
  const { push, isReady, query } = useRouter();
  
  const {
    dataHouse,
    isLoadingHouse,
    isRefetchingHouse,
    refetchHouse,
    selectedId,
    setSelectedId,
  } = useHouse();

  const addCategoryModal = useDisclosure();
  const deleteCategoryModal = useDisclosure();
  const { setUrl } = useChangeUrl();

  useEffect(() => {
    if (isReady) {
      setUrl();
    }
  }, [isReady]);

  const renderCell = useCallback(
    (house: Record<string, unknown>, columnKey: Key) => {
      const cellValue = house[columnKey as keyof typeof house];

      switch (columnKey) {
        case "actions":
          return (
            <DropdownAction
              onPressButtonDetail={() => push(`/admin/house/${house.id}`)}
              onPressButtonDelete={() => {
                setSelectedId(`${house.id}`);
                deleteCategoryModal.onOpen();
              }}
            />
          );
        case "c1_harga":
            return cellValue ? `Rp ${Number(cellValue).toLocaleString('id-ID')}` : "-";
        default:
          return cellValue as ReactNode;
      }
    },
    [push, deleteCategoryModal]
  );

  // LOGGING: Coba perhatikan di console sekarang, bentuknya pasti { meta: {...}, data: [...], pagination: {...} }
  console.log("Data dari Backend:", dataHouse);

  return (
    <section className="p-4">
      {Object.keys(query).length > 0 && (
        <DataTable
          buttonTopContentLabel="Tambah Rumah"
          columns={COLUMN_LISTS_HOUSE}
          
          data={dataHouse?.data || []} 
          
          emptyContent="Data rumah masih kosong"
          isLoading={isLoadingHouse || isRefetchingHouse} 
          onClickButtonTopContent={addCategoryModal.onOpen}
          renderCell={renderCell}
          
          totalPages={dataHouse?.pagination?.totalPages || 1} 
        />
      )}
    </section>
  );
};

export default House;