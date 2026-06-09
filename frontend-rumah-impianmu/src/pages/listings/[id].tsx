import Head from "next/head";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/views/Home/Navbar"; 
import Footer from "@/components/views/Home/Footer"; 
import HouseCarousel from "@/components/views/DetailHouse/HouseCarousel";
import HouseInfo from "@/components/views/DetailHouse/HouseInfo";
import ContactCard from "@/components/views/DetailHouse/ContactCard";

// Import Dummy Data (Nantinya diganti dengan Fetch API dari Backend berdasarkan router.query.id)
import { houseDetailData } from "@/data/dummyHouseDetail";

export default function HouseDetail() {
  const house = houseDetailData;

  return (
    <>
      <Head>
        <title>{house.title} | EstatePrime</title>
        <meta name="description" content={house.description.substring(0, 150)} />
      </Head>

      <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
        <Navbar />

        <main className="flex-grow pt-8 pb-20">
          <div className="container mx-auto px-4 lg:px-8">
            
            {/* Breadcrumb / Back Button */}
            <div className="mb-6">
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors font-medium"
              >
                <ArrowLeft size={16} />
                Kembali ke Pencarian
              </Link>
            </div>

            {/* Top: Carousel Gambar */}
            <div className="mb-10 lg:mb-12">
              <HouseCarousel images={house.images} />
            </div>

            {/* Bottom: 2 Column Layout (Info & Contact) */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 relative">
              
              {/* Left Column: House Detail Info (Lebar 65%) */}
              <div className="w-full lg:w-[65%]">
                <HouseInfo house={house} />
              </div>

              {/* Right Column: Sticky Contact Card (Lebar 35%) */}
              <aside className="w-full lg:w-[35%]">
                <ContactCard agent={house.agent} />
              </aside>

            </div>
            
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}