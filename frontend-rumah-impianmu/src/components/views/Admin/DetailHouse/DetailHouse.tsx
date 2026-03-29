import { Tab, Tabs } from "@heroui/react";
import useDetailHouse from "./useDetailHouse";
import HouseData from "./HouseData"; // Import dari folder HouseData yang tadi kita buat

const DetailHouse = () => {
  const {
    dataHouse,
    handleUpdateHouse,
    isPendingMutateUpdateHouse,
    isSuccessMutateUpdateHouse, 
  } = useDetailHouse();

  return (
    <div className="p-4">
      <Tabs aria-label="Options" color="danger" variant="underlined">
        
        {/* TAB 1: DATA RUMAH (Form UI yang keren dengan Skeleton tadi) */}
        <Tab key="info" title="Data Rumah">
          <HouseData
            dataHouse={dataHouse}
            onUpdate={handleUpdateHouse}
            isPendingUpdate={isPendingMutateUpdateHouse}
            isSuccessUpdate={isSuccessMutateUpdateHouse}
          />
        </Tab>

        {/* TAB 2: DETAIL HOUSE (Tempat untuk gambar/deskripsi panjang nanti) */}
        <Tab key="detail" title="Detail Tambahan">
           <div className="p-4 mt-4 text-slate-500 border border-dashed border-slate-300 rounded-lg">
             Tempat untuk menambahkan gambar atau informasi detail lainnya di masa depan.
           </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default DetailHouse;