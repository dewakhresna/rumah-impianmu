"use client";

import { Card, CardBody, CardFooter, Image, Button } from "@heroui/react";
import { MapPin, Bed, Bath, Ruler, MessageCircle, Trash2 } from "lucide-react";
import { FavoriteHouse } from "@/data/dummyProfile";

function FavoriteHouseCard({ house }: { house: FavoriteHouse }) {
  return (
    <Card className="group border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white">
      <CardBody className="p-0 overflow-hidden relative">
        <Image
          src={house.imageUrl}
          alt={house.name}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500 rounded-t-2xl rounded-b-none"
        />
      </CardBody>
      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-xl font-bold text-blue-600">{house.price}</h3>
        <div>
          <h4 className="text-lg font-semibold text-slate-900 truncate">{house.name}</h4>
          <p className="flex items-center gap-1.5 text-sm text-slate-500 mt-1">
            <MapPin size={16} className="text-blue-500 shrink-0" /> 
            <span className="truncate">{house.location}</span>
          </p>
        </div>
        
        {/* Property Details */}
        <div className="flex items-center gap-4 border-t border-slate-100 pt-4 mt-2">
          <div className="flex items-center gap-1.5 text-slate-600 text-sm font-medium">
            <Bed size={18} className="text-slate-400" /> {house.bedrooms}
          </div>
          <div className="flex items-center gap-1.5 text-slate-600 text-sm font-medium">
            <Bath size={18} className="text-slate-400" /> {house.bathrooms}
          </div>
          <div className="flex items-center gap-1.5 text-slate-600 text-sm font-medium">
            <Ruler size={18} className="text-slate-400" /> {house.landSize}m²
          </div>
        </div>
      </div>
      <CardFooter className="px-5 pb-5 pt-0 flex gap-3">
        <Button 
          className="flex-1 bg-blue-600 text-white font-medium rounded-xl shadow-md shadow-blue-500/20"
          startContent={<MessageCircle size={18} />}
        >
          Chat
        </Button>
        <Button 
          isIconOnly
          variant="flat"
          color="danger"
          className="rounded-xl bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-colors"
        >
          <Trash2 size={18} />
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function FavoriteList({ houses }: { houses: FavoriteHouse[] }) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 w-full">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">Rumah Favorit</h2>
        <p className="text-slate-500 mt-1">Properti yang Anda simpan untuk dilihat nanti.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {houses.map((house) => (
          <FavoriteHouseCard key={house.id} house={house} />
        ))}
      </div>
    </div>
  );
}