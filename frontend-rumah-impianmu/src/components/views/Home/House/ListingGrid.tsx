"use client";

import environment from "@/config/environment";
import { Button, Card, CardBody, CardFooter, Image, Skeleton } from "@heroui/react";
import { Bed, Bath, Maximize, MapPin } from "lucide-react";
import { useListing, HouseData } from "./useListing";
import { useRouter } from "next/navigation"; // 1. Tambahkan import useRouter

const formatRupiah = (angka: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(angka);
};

const getImageUrl = (imagePath?: string | null) => {
  if (!imagePath || imagePath === "") {
    return "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"; 
  }

  if (imagePath.startsWith("http")) {
    return imagePath;
  }

  const baseUrl = environment.Domain?.replace(/\/$/, "") || "http://localhost:5000";
  return `${baseUrl}${imagePath}`;
};

function HouseCard({ house }: { house: HouseData }) {
  const router = useRouter(); // 2. Inisialisasi router

  const imageUrl = getImageUrl(house.HouseDetail?.image_1);
  const description = house.HouseDetail?.description || "Deskripsi properti tidak tersedia.";
  const beds = house.HouseDetail?.beds || 0;
  const baths = house.HouseDetail?.baths || 0;
  
  return (
    <Card className="group border-none rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-white">
      <CardBody className="p-0 overflow-hidden">
        <Image
          src={imageUrl}
          alt={house.nama}
          className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500 rounded-t-2xl rounded-b-none"
        />
      </CardBody>
      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-2xl font-bold text-blue-600">{formatRupiah(house.c1_harga)}</h3>
        <div>
          <h4 className="text-lg font-semibold text-slate-900 truncate">{house.nama}</h4>
          <p className="flex items-center gap-1 text-sm text-slate-500 mt-1">
            <MapPin size={14} className="text-blue-500" /> Kota Bekasi
          </p>
        </div>
        <p className="text-sm text-slate-600 line-clamp-2 mt-2">{description}</p>
        
        <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-2">
          <div className="flex items-center gap-1.5 text-slate-600 text-sm">
            <Bed size={18} className="text-slate-400" /> {beds} Beds
          </div>
          <div className="flex items-center gap-1.5 text-slate-600 text-sm">
            <Bath size={18} className="text-slate-400" /> {baths} Baths
          </div>
          <div className="flex items-center gap-1.5 text-slate-600 text-sm">
            <Maximize size={18} className="text-slate-400" /> {house.c4_luas} m²
          </div>
        </div>
      </div>
      <CardFooter className="px-5 pb-5 pt-0">
        {/* 3. Tambahkan event onPress/onClick untuk navigasi */}
        <Button 
          onPress={() => router.push(`/listings/${house.id}`)}
          className="w-full bg-slate-100 text-blue-700 font-semibold hover:bg-blue-600 hover:text-white transition-colors rounded-xl"
        >
          Lihat Detail
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function ListingGrid() {
  const { houses, isLoading, error } = useListing();

  // 1. Tampilan saat data sedang diambil (Loading state)
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Card key={i} className="w-full space-y-5 p-4 rounded-2xl shadow-sm border-none" radius="lg">
            <Skeleton className="rounded-lg">
              <div className="h-60 rounded-lg bg-default-300"></div>
            </Skeleton>
            <div className="space-y-3 mt-4">
              <Skeleton className="w-2/5 rounded-lg"><div className="h-6 w-2/5 rounded-lg bg-default-200"></div></Skeleton>
              <Skeleton className="w-4/5 rounded-lg"><div className="h-4 w-4/5 rounded-lg bg-default-200"></div></Skeleton>
              <Skeleton className="w-full rounded-lg"><div className="h-4 w-full rounded-lg bg-default-300"></div></Skeleton>
            </div>
          </Card>
        ))}
      </div>
    );
  }

  // 2. Tampilan saat terjadi error dari server
  if (error) {
    return (
      <div className="w-full p-10 text-center bg-red-50 rounded-2xl border border-red-100">
        <p className="text-red-500 font-medium">{error}</p>
      </div>
    );
  }

  // 3. Tampilan saat data kosong (belum ada input dari admin)
  if (!houses || houses.length === 0) {
    return (
      <div className="w-full p-10 text-center bg-slate-50 rounded-2xl border border-slate-100">
        <p className="text-slate-500 font-medium">Belum ada data properti yang tersedia saat ini.</p>
      </div>
    );
  }

  // 4. Tampilan utama saat data berhasil dirender
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {houses.map((house) => (
        <HouseCard key={house.id} house={house} />
      ))}
    </div>
  );
}