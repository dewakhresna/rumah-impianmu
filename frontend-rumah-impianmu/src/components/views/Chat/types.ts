export interface HouseRecommendation {
  nama: string;
  c1_harga: number;
  c2_jarak: number;
  c3_keamanan: number;
  c4_luas: number;
  skor?: number;
  lokasi?: string; 
  imageUrl?: string;
}

export interface Message {
  id: number;
  role: "user" | "admin";
  text?: string;
  houses?: HouseRecommendation[]; // Array rumah untuk di-render jadi Card
  outroText?: string;             // Pesan penutup (cth: "Apakah ada kriteria lain...")
}