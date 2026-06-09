import { useState, useEffect } from "react";
import instance from "@/libs/axios/instance"; 

export interface HouseData {
  id: number;
  nama: string;
  c1_harga: number;
  c2_jarak: number;
  c3_keamanan: number;
  c4_luas: number;
  HouseDetail?: {
    description: string | null;
    image_1: string | null;
    beds: number | null;
    baths: number | null;
  };
}

export const useListing = () => {
  const [houses, setHouses] = useState<HouseData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        setIsLoading(true);
        const response = await instance.get("/houses");
        
        setHouses(response.data.data);
      } catch (err: any) {
        console.error("Error fetching houses:", err);
        setError("Gagal mengambil data properti. Silakan coba lagi nanti.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchHouses();
  }, []);

  return { houses, isLoading, error };
};