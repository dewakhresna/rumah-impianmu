import { MapPin, Bed, Bath, Ruler, CheckCircle2 } from "lucide-react";
import { HouseDetail } from "@/data/dummyHouseDetail";

// Helper Format Rupiah
const formatRupiah = (angka: number) => {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(angka);
};

export default function HouseInfo({ house }: { house: HouseDetail }) {
  return (
    <div className="flex flex-col gap-8 w-full">
      
      {/* Header Info */}
      <div>
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-3 py-1 bg-blue-50 text-blue-600 text-sm font-semibold rounded-lg">Dijual</span>
          <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-sm font-semibold rounded-lg">Siap Huni</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
          {house.title}
        </h1>
        <p className="text-2xl md:text-3xl font-bold text-blue-600 mt-4">
          {formatRupiah(house.price)}
        </p>
        <p className="flex items-center gap-2 text-slate-500 mt-3 text-lg">
          <MapPin size={20} className="text-blue-500 shrink-0" />
          {house.location}
        </p>
      </div>

      {/* Box Spesifikasi Properti */}
      <div className="grid grid-cols-3 gap-4 bg-slate-50 border border-slate-100 p-6 rounded-2xl">
        <div className="flex flex-col items-center justify-center gap-2 border-r border-slate-200">
          <div className="p-3 bg-white rounded-xl shadow-sm text-blue-600"><Bed size={24} /></div>
          <span className="text-lg font-bold text-slate-800">{house.bedrooms}</span>
          <span className="text-sm text-slate-500">Kamar Tidur</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 border-r border-slate-200">
          <div className="p-3 bg-white rounded-xl shadow-sm text-blue-600"><Bath size={24} /></div>
          <span className="text-lg font-bold text-slate-800">{house.bathrooms}</span>
          <span className="text-sm text-slate-500">Kamar Mandi</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="p-3 bg-white rounded-xl shadow-sm text-blue-600"><Ruler size={24} /></div>
          <span className="text-lg font-bold text-slate-800">{house.landSize} <span className="text-sm font-medium">m²</span></span>
          <span className="text-sm text-slate-500">Luas Tanah</span>
        </div>
      </div>

      {/* Deskripsi */}
      <div>
        <h3 className="text-xl font-bold text-slate-900 mb-4">Deskripsi Properti</h3>
        <p className="text-slate-600 leading-relaxed text-lg">
          {house.description}
        </p>
      </div>

      {/* Fasilitas */}
      <div>
        <h3 className="text-xl font-bold text-slate-900 mb-4">Fasilitas Utama</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
          {house.facilities.map((fac, idx) => (
            <div key={idx} className="flex items-center gap-3 text-slate-700">
              <CheckCircle2 size={20} className="text-emerald-500 shrink-0" />
              <span>{fac}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}