import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Input, Button, Checkbox } from "@heroui/react";
import { Building2, Mail, Lock, Eye, EyeOff, ArrowLeft } from "lucide-react";

export default function AdminLogin() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
      <Head>
        <title>Admin Login | EstatePrime</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen flex bg-white font-sans text-slate-900">
        
        {/* Kiri: Area Form Login (Lebar 100% di Mobile, 50% di Desktop) */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 sm:p-12 relative">
          
          {/* Tombol Kembali ke Beranda */}
          <div className="absolute top-8 left-8">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors font-medium"
            >
              <ArrowLeft size={16} />
              Kembali ke Beranda
            </Link>
          </div>

          <div className="w-full max-w-md mt-12 lg:mt-0">
            {/* Header Form */}
            <div className="text-center lg:text-left mb-10">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-blue-600 mb-6">
                <Building2 size={40} strokeWidth={1.5} />
                <span className="text-2xl font-bold tracking-tight text-slate-900">
                  Estate<span className="text-blue-600">Prime</span>
                </span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">
                Selamat Datang Kembali
              </h1>
              <p className="text-slate-500">
                Silakan masuk ke panel kontrol administrator.
              </p>
            </div>

            {/* Form Login */}
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              
              {/* Input Email */}
              <Input
                type="email"
                label="Alamat Email"
                placeholder="admin@estateprime.com"
                labelPlacement="outside"
                startContent={<Mail size={18} className="text-slate-400" />}
                variant="bordered"
                radius="lg"
                classNames={{
                  label: "font-medium text-slate-700",
                  inputWrapper: "bg-slate-50 border-slate-200 hover:border-blue-400 focus-within:!border-blue-600 focus-within:!bg-white shadow-sm h-12",
                }}
              />

              {/* Input Password */}
              <Input
                type={isVisible ? "text" : "password"}
                label="Kata Sandi"
                placeholder="Masukkan kata sandi Anda"
                labelPlacement="outside"
                startContent={<Lock size={18} className="text-slate-400" />}
                endContent={
                  <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                    {isVisible ? (
                      <EyeOff size={18} className="text-slate-400 hover:text-slate-600" />
                    ) : (
                      <Eye size={18} className="text-slate-400 hover:text-slate-600" />
                    )}
                  </button>
                }
                variant="bordered"
                radius="lg"
                classNames={{
                  label: "font-medium text-slate-700",
                  inputWrapper: "bg-slate-50 border-slate-200 hover:border-blue-400 focus-within:!border-blue-600 focus-within:!bg-white shadow-sm h-12",
                }}
              />

              {/* Checkbox & Lupa Password */}
              <div className="flex items-center justify-between mt-2">
                <Checkbox 
                  size="sm" 
                  classNames={{
                    label: "text-slate-600 text-sm",
                    wrapper: "before:border-slate-300"
                  }}
                >
                  Ingat saya
                </Checkbox>
                <Link href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                  Lupa kata sandi?
                </Link>
              </div>

              {/* Tombol Submit */}
              <Button 
                color="primary" 
                size="lg"
                className="w-full bg-blue-600 font-semibold text-md rounded-xl shadow-lg shadow-blue-500/30 hover:-translate-y-0.5 transition-transform mt-4"
              >
                Masuk ke Dashboard
              </Button>
            </form>
          </div>
        </div>

        {/* Kanan: Area Branding / Gambar (Disembunyikan di Mobile) */}
        <div className="hidden lg:flex lg:w-1/2 relative bg-slate-900 overflow-hidden">
          {/* Gambar Background */}
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
            alt="Modern Building" 
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-slate-900/90" />
          
          {/* Konten Branding */}
          <div className="relative z-10 flex flex-col justify-center px-16 xl:px-24 w-full">
            <h2 className="text-4xl xl:text-5xl font-bold text-white leading-tight mb-6">
              Kelola properti dengan lebih cerdas.
            </h2>
            <p className="text-lg text-blue-100 max-w-lg mb-12">
              Akses analitik real-time, kelola listing, dan tanggapi pesan klien Anda secara langsung dari satu dashboard terpusat.
            </p>
            
            {/* Social Proof / Stats ringan untuk CRO */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-blue-800/50">
              <div>
                <p className="text-3xl font-bold text-white mb-1">10k+</p>
                <p className="text-sm text-blue-200">Listing Aktif</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white mb-1">99.9%</p>
                <p className="text-sm text-blue-200">Uptime Server</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}