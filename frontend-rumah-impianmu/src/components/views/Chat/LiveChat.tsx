import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Textarea,
  Button,
  Avatar,
  Select,
  SelectItem,
} from "@heroui/react";
import { Send, SlidersHorizontal } from "lucide-react";
import { useChat } from "./useChat";
import ChatBubble from "./ChatBubble";

export default function LiveChat() {
  const {
    messages,
    input,
    setInput,
    isLoading,
    messagesEndRef,
    handleSendMessage,
    currentUserId,
    filters,
    setFilters,
  } = useChat();

  const [rentangHarga, setRentangHarga] = useState(new Set([]));
  const [rentangLuas, setRentangLuas] = useState(new Set([]));

  // FUNGSI BARU: Menerjemahkan pilihan teks ke angka matematika untuk backend
  const handleHargaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setRentangHarga(new Set([val] as any));

    let min = "";
    let max = "";

    switch (val) {
      case "<1M":
        max = "1000000000"; // Di bawah 1 Miliar
        break;
      case "1M-2M":
        min = "1000000000";
        max = "2000000000"; // 1 s/d 2 Miliar
        break;
      case "2M-3M":
        min = "2000000000";
        max = "3000000000"; // 2 s/d 3 Miliar
        break;
      case "3M-4M":
        min = "3000000000";
        max = "4000000000"; // 3 s/d 4 Miliar
        break;
      case ">4M":
        min = "4000000000"; // Di atas 4 Miliar
        break;
      default:
        // Jika dikosongkan/reset
        min = "";
        max = "";
    }

    // Mengirim angka yang sudah diterjemahkan ke state global filters
    setFilters({ ...filters, hargaMin: min, hargaMax: max });
  };

  const handleLuasChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setRentangLuas(new Set([val] as any));

    let min = "";
    let max = "";

    switch (val) {
      case "<100":
        max = "100"; // Maksimal 100 m²
        break;
      case "101-200":
        min = "101";
        max = "200";
        break;
      case "201-300":
        min = "201";
        max = "300";
        break;
      case ">300":
        min = "300";
        break;
      default:
        min = "";
        max = "";
    }
    setFilters({ ...filters, luasMin: min, luasMax: max });
  };

  return (
    <div className="sticky top-28 h-[calc(100vh-8rem)] min-h-[500px] max-h-[700px]">
      <Card className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white shadow-xl shadow-slate-200/50">
        <CardHeader className="flex items-center gap-4 rounded-t-2xl bg-blue-600 px-6 py-4">
          <div className="relative">
            <Avatar
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              size="md"
            />
            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-blue-600 bg-emerald-400"></span>
          </div>
          <div className="flex flex-col">
            <h4 className="font-semibold leading-tight text-white">
              Assistant Rumah Impianmu
            </h4>
            <span className="text-xs text-blue-100">
              Rekomendasi Rumah Terbaik
            </span>
          </div>
        </CardHeader>

        <CardBody className="flex flex-1 flex-col gap-4 overflow-y-auto bg-slate-50 p-6">
          <p className="mb-2 text-center text-xs text-slate-400">Hari ini</p>

          {messages.map((msg) => (
            <ChatBubble
              key={msg.id}
              message={msg}
              currentUserId={currentUserId}
            />
          ))}

          {isLoading && (
            <div className="flex max-w-[85%] items-start gap-2">
              <Avatar
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                size="sm"
                className="mt-1"
              />
              <div className="rounded-2xl rounded-tl-sm border border-slate-100 bg-white p-3 text-sm italic text-slate-400 shadow-sm">
                Sedang memproses rekomendasi...
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </CardBody>

        {/* --- PERBAIKAN 2: Tambahkan Area Filter di dalam Footer --- */}
        <CardFooter className="flex-col rounded-b-2xl border-t border-slate-100 bg-white p-4 gap-3">
          {/* Baris Hard Filter (Bisa digeser ke kanan/kiri jika layarnya kecil) */}
          <div className="flex w-full items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-slate-100 shrink-0 text-slate-500">
              <SlidersHorizontal size={14} />
            </div>

            <Select
              size="sm"
              placeholder="Kamar Tidur"
              className="w-32 shrink-0"
              selectedKeys={filters.beds ? [filters.beds] : []}
              onChange={(e) => setFilters({ ...filters, beds: e.target.value })}
              classNames={{
                trigger: "bg-slate-50 shadow-none border border-slate-200",
              }}
            >
              <SelectItem key="2">2+ Kamar</SelectItem>
              <SelectItem key="3">3+ Kamar</SelectItem>
              <SelectItem key="4">4+ Kamar</SelectItem>
            </Select>

            <Select
              size="sm"
              placeholder="Rentang Harga"
              className="w-40 shrink-0"
              selectedKeys={rentangHarga}
              onChange={handleHargaChange}
              classNames={{
                trigger: "bg-slate-50 shadow-none border border-slate-200",
              }}
            >
              <SelectItem key="<1M">Di bawah 1 Miliar</SelectItem>
              <SelectItem key="1M-2M">1 - 2 Miliar</SelectItem>
              <SelectItem key="2M-3M">2 - 3 Miliar</SelectItem>
              <SelectItem key="3M-4M">3 - 4 Miliar</SelectItem>
              <SelectItem key=">4M">Lebih dari 4 Miliar</SelectItem>
            </Select>

            <Select
              size="sm"
              placeholder="Luas Bangunan"
              className="w-40 shrink-0"
              selectedKeys={rentangLuas}
              onChange={handleLuasChange}
              classNames={{
                trigger: "bg-slate-50 shadow-none border border-slate-200",
              }}
            >
              <SelectItem key="<100">Di bawah 100 m²</SelectItem>
              <SelectItem key="101-200">101 - 200 m²</SelectItem>
              <SelectItem key="201-300">201 - 300 m²</SelectItem>
              <SelectItem key=">500">300 m² ke atas</SelectItem>
            </Select>
          </div>

          {/* Form Chat */}
          <form
            className="flex w-full items-end gap-2"
            onSubmit={handleSendMessage}
          >
            <Textarea
              minRows={1} // Tinggi awal hanya 1 baris
              maxRows={5} // Maksimal membesar sampai 5 baris, setelah itu akan muncul scroll
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                // Trik agar saat tekan Enter langsung mengirim pesan
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  if (input.trim()) {
                    handleSendMessage(e as any);
                  }
                }
              }}
              disabled={isLoading}
              placeholder="Ceritakan rumah idaman Anda..."
              variant="flat"
              radius="lg"
              classNames={{
                input: "text-sm resize-none", // resize-none agar ujung kanan bawah tidak bisa ditarik manual
                inputWrapper:
                  "bg-slate-100 shadow-none hover:bg-slate-200 focus-within:!bg-white focus-within:ring-2 focus-within:ring-blue-100 items-center py-2",
              }}
              fullWidth
            />
            <Button
              type="submit"
              isLoading={isLoading}
              isIconOnly
              color="primary"
              className="shrink-0 rounded-lg bg-blue-600 mb-1" // mb-1 agar tombol sejajar dengan baris pertama Textarea
            >
              <Send size={18} />
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
