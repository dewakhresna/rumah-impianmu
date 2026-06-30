import { Card, CardBody, Avatar, Button, Divider } from "@heroui/react";
import { MessageSquare, Phone, Calendar, Heart } from "lucide-react";

interface ContactCardProps {
  contact?: string | null;
  contactName?: string | null;
}

export default function ContactCard({ contact, contactName }: ContactCardProps) {
  
  // Helper untuk memformat nomor telepon
  const formatWhatsAppLink = (number?: string | null) => {
    if (!number) return "#";
    let formattedNumber = number.replace(/\D/g, ""); 
    if (formattedNumber.startsWith("0")) {
      formattedNumber = "62" + formattedNumber.substring(1);
    }
    return `https://wa.me/${formattedNumber}`;
  };

  return (
    <Card className="w-full bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 sticky top-28">
      <CardBody className="p-6 md:p-8 flex flex-col gap-6">
        
        {/* Agent Info */}
        <div className="flex items-center gap-4">
          <div className="relative">
            {/* Avatar dari HeroUI bisa menggunakan 'name' untuk membuat inisial otomatis jika tidak ada foto */}
            <Avatar 
              showFallback 
              name={contactName || "A P"} 
              size="lg" 
              className="w-16 h-16 border-2 border-blue-50 text-blue-600 bg-blue-100 font-bold" 
            />
            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full"></span>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Agen Properti</p>
            {/* Menampilkan nama agen */}
            <h4 className="text-lg font-bold text-slate-900 leading-tight">
              {contactName || "Agen EstatePrime"}
            </h4>
            <p className="text-sm text-blue-600 font-medium">Verified Agent</p>
          </div>
        </div>

        <Divider className="bg-slate-100" />

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          <Button 
            as="a"
            href={formatWhatsAppLink(contact)}
            target="_blank"
            rel="noopener noreferrer"
            color="primary" 
            size="lg"
            className="w-full bg-blue-600 font-semibold rounded-xl shadow-lg shadow-blue-500/30 hover:-translate-y-0.5 transition-transform"
            startContent={<MessageSquare size={18} />}
          >
            Chat Sekarang
          </Button>
          
          <div className="flex gap-3">
            {/* <Button 
              as="a"
              href={`tel:${contact || ""}`}
              variant="bordered" 
              size="lg"
              className="flex-1 font-semibold rounded-xl border-slate-200 text-slate-700 hover:border-blue-600 hover:text-blue-600 transition-colors"
              startContent={<Phone size={18} />}
            >
              Telepon
            </Button> */}
            <Button 
              isIconOnly 
              variant="flat" 
              color="danger"
              size="lg"
              className="w-full bg-red-50 text-red-500 rounded-xl shrink-0 hover:bg-red-200 transition-colors"
            >
              <Heart size={22} />
              Tambah Favorit
            </Button>
          </div>

          <Button 
            variant="light" 
            className="w-full mt-2 text-slate-500 font-medium hover:bg-slate-50"
            startContent={<Calendar size={18} />}
          >
            Jadwalkan Survei Lokasi
          </Button>
        </div>

      </CardBody>
    </Card>
  );
}