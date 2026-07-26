import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  Button,
  Image,
} from "@heroui/react";
import { Heart, MessageCircle, MapPin, Eye } from "lucide-react";
import Link from "next/link";


// Helper untuk format Rupiah
const formatRupiah = (angka: any) => {
  const validAngka = Number(angka);

  if (isNaN(validAngka) || validAngka === 0) {
    return "Harga hubungi agen";
  }

  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(validAngka);
};

export default function ChatBubble({ message }: { message: any }) {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex items-start gap-2 max-w-[95%] ${
        isUser ? "self-end flex-row-reverse" : ""
      }`}
    >
      {!isUser && (
        <Avatar
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          size="sm"
          className="mt-1 shrink-0"
        />
      )}

      <div
        className={`p-3 text-sm shadow-sm flex flex-col gap-3 ${
          isUser
            ? "bg-blue-600 text-white rounded-2xl rounded-tr-sm"
            : "bg-white border border-slate-100 text-slate-700 rounded-2xl rounded-tl-sm"
        }`}
      >
        {message.text && <p className="leading-relaxed">{message.text}</p>}

        {message.houses && message.houses.length > 0 && (
          <div className="flex flex-col gap-4 my-2">
            {message.houses.map((house: any, index: number) => (
              <Card
                key={index}
                className="w-full bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden rounded-xl"
              >
                {/* Gambar Landscape di Atas */}
                <div className="relative w-full h-40 sm:h-48">
                  <Image
                    src={
                      house.imageUrl ||
                      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80"
                    }
                    alt={house.nama}
                    classNames={{
                      wrapper: "w-full h-full",
                      img: "w-full h-full object-cover rounded-none",
                    }}
                  />
                  {/* Badge Skor Kecocokan */}
                  {house.skor && (
                    <div className="absolute top-2 right-2 z-10 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-blue-600 shadow-sm">
                      Skor: {Number(house.skor).toFixed(2)}
                    </div>
                  )}
                </div>

                {/* Keterangan di Bawah */}
                <CardBody className="p-4 flex flex-col gap-2">
                  <div>
                    <h4 className="font-bold text-slate-900 text-base leading-tight">
                      {house.nama}
                    </h4>
                    <p className="text-blue-600 font-bold text-lg mt-1">
                      {formatRupiah(house.c1_harga || house.harga)}
                    </p>
                    <p className="flex items-center gap-1.5 text-sm text-slate-500 mt-2">
                      <MapPin size={14} className="text-slate-400 shrink-0" />
                      <span className="truncate">
                        {house.lokasi || "Lokasi Tersedia"}
                      </span>
                    </p>
                  </div>
                </CardBody>

                {/* Tombol Aksi - DIPERBARUI */}
                <CardFooter className="px-4 pb-4 pt-0 flex flex-col gap-2">
                  
                  {/* Baris Atas: Tombol Tanya & Favorit */}
                  <div className="flex w-full items-center gap-2">
                    <Button
                      size="sm"
                      variant="bordered"
                      color="primary"
                      className="font-medium flex-1 rounded-lg border-slate-200 text-slate-700 hover:border-blue-600 hover:text-blue-600 transition-colors"
                      startContent={<MessageCircle size={16} />}
                    >
                      Tanya
                    </Button>
                    <Button
                      isIconOnly
                      size="sm"
                      variant="flat"
                      color="danger"
                      className="bg-red-50 text-red-500 rounded-lg shrink-0"
                    >
                      <Heart size={16} />
                    </Button>
                  </div>

                  <Button
                    as={Link}
                    href={`/listings/${house.id || index}`}
                    size="sm"
                    color="primary"
                    className="w-full bg-blue-600 font-medium rounded-lg shadow-sm shadow-blue-500/20"
                    endContent={<Eye size={16} />}
                  >
                    Lihat Detail Rumah
                  </Button>
                  
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        {/* Pesan Penutup */}
        {message.outroText && (
          <p className="leading-relaxed border-t border-slate-100 pt-3 text-slate-600 mt-1">
            {message.outroText}
          </p>
        )}
      </div>
    </div>
  );
}