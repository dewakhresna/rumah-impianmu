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
  isFavorite?: boolean;
  favoriteId?: number | null;
}

export const useListing = () => {
  const [houses, setHouses] = useState<HouseData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentUserId, setCurrentUserId] = useState<number | null>(null);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setIsLoading(true);

        const housesRes = await instance.get("/houses");
        let housesData: HouseData[] = housesRes.data.data;

        let userId = null;
        try {
          const authRes = await instance.get("/auth/me");
          userId = authRes.data?.data?.id || authRes.data?.id; 
          setCurrentUserId(userId);
        } catch (authErr) {
          console.log("Mode Tamu (Belum Login)");
        }

        if (userId) {
          const favRes = await instance.get(`/favorites?userId=${userId}`);
          const userFavorites = favRes.data.data;

          const favoriteMap = new Map();
          userFavorites.forEach((fav: any) => {
            favoriteMap.set(fav.house_id, fav.id);
          });

          housesData = housesData.map((house) => ({
            ...house,
            isFavorite: favoriteMap.has(house.id),
            favoriteId: favoriteMap.get(house.id) || null,
          }));
        }

        setHouses(housesData);
      } catch (err: any) {
        console.error("Error fetching data:", err);
        setError("Gagal mengambil data properti. Silakan coba lagi nanti.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllData();
  }, []);

  return { houses, isLoading, error, currentUserId };
};