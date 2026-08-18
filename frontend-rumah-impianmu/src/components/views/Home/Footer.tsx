import Link from "next/link";
import { Button, Input } from "@heroui/react";
import { Building2, Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8 mt-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Kolom 1: Brand & Deskripsi */}
          <div className="flex flex-col gap-4 text-slate-600">
            <Link href="/" className="flex items-center gap-2 text-blue-600">
              <Building2 size={32} strokeWidth={1.5} />
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Estate<span className="text-blue-600">Prime</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mt-2">
              Platform properti terpercaya untuk menemukan rumah impian Anda. Kami menggabungkan teknologi modern dengan pelayanan sepenuh hati.
            </p>
          </div>

          {/* Kolom 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-slate-900 font-semibold mb-2">Perusahaan</h4>
            <Link href="/about" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">Tentang Kami</Link>
            <Link href="/listings" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">Rumah</Link>
            <Link href="/contact" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">Hubungi Kami</Link>
          </div>

          {/* Kolom 3: Layanan */}
          <div className="flex flex-col gap-4">
            <h4 className="text-slate-900 font-semibold mb-2">Layanan</h4>
            <Link href="/listings" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">Cari Rumah</Link>
            <Link href="/contact" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">Diskusi</Link>
          </div>

          {/* Kolom 4: Newsletter (CRO Strategy) */}
          <div className="flex flex-col gap-4">
            <h4 className="text-slate-900 font-semibold mb-2">Dapatkan Info Terbaru</h4>
            <p className="text-sm text-slate-600 mb-2">
              Bergabung dengan kami untuk mendapatkan rekomendasi properti terbaik.
            </p>
          </div>

        </div>

        {/* Bagian Bawah: Copyright & Social Media */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Rumah Impianmu. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}