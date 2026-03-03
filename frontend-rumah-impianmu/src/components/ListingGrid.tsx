"use client";

import { Button, Card, CardBody, CardFooter, Image } from "@heroui/react";
import { Bed, Bath, Maximize, MapPin } from "lucide-react";
import { listings, HouseListing } from "@/data/dummyListings";

function HouseCard({ house }: { house: HouseListing }) {
  return (
    <Card className="group border-none rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-white">
      <CardBody className="p-0 overflow-hidden">
        <Image
          src={house.imageUrl}
          alt={house.title}
          className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500 rounded-t-2xl rounded-b-none"
        />
      </CardBody>
      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-2xl font-bold text-blue-600">{house.price}</h3>
        <div>
          <h4 className="text-lg font-semibold text-slate-900 truncate">{house.title}</h4>
          <p className="flex items-center gap-1 text-sm text-slate-500 mt-1">
            <MapPin size={14} className="text-blue-500" /> {house.location}
          </p>
        </div>
        <p className="text-sm text-slate-600 line-clamp-2 mt-2">{house.description}</p>
        
        {/* Amenities Row */}
        <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-2">
          <div className="flex items-center gap-1.5 text-slate-600 text-sm">
            <Bed size={18} className="text-slate-400" /> {house.beds} Beds
          </div>
          <div className="flex items-center gap-1.5 text-slate-600 text-sm">
            <Bath size={18} className="text-slate-400" /> {house.baths} Baths
          </div>
          <div className="flex items-center gap-1.5 text-slate-600 text-sm">
            <Maximize size={18} className="text-slate-400" /> {house.sqft} sqft
          </div>
        </div>
      </div>
      <CardFooter className="px-5 pb-5 pt-0">
        <Button className="w-full bg-slate-100 text-blue-700 font-semibold hover:bg-blue-600 hover:text-white transition-colors rounded-xl">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function ListingGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {listings.map((house) => (
        <HouseCard key={house.id} house={house} />
      ))}
    </div>
  );
}