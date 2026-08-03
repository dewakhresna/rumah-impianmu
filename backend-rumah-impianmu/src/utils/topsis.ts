export interface Rumah {
  id: number;
  nama: string;
  c1_harga: number;
  c2_jarak: number;
  c3_keamanan: number;
  c4_luas: number;
  HouseDetail?: any;
  imageUrl?: string;
  skor?: string; 
}

export const hitungTopsis = (data: Rumah[], bobotObj: any): Rumah[] => {
  const kriteria = ["c1_harga", "c2_jarak", "c3_keamanan", "c4_luas"] as const;

  const bobot = [
    bobotObj.C1_Harga || 3,
    bobotObj.C2_Jarak || 3,
    bobotObj.C3_Keamanan || 3,
    bobotObj.C4_Luas || 3,
  ];
  
  const isBenefit = [false, false, true, true];

  // 1. Normalisasi
  let pembagi = kriteria.map((k) =>
    Math.sqrt(data.reduce((sum, row) => sum + Math.pow(row[k], 2), 0)),
  );
  
  let matrixTernormalisasi = data.map((row) =>
    kriteria.map((k, i) => {
      const divisor = pembagi[i] === 0 ? 1 : pembagi[i];
      return (row[k] / divisor) * bobot[i];
    }),
  );

  // 2. Ideal Positif & Negatif
  let idealPos = kriteria.map((_, i) => {
    let values = matrixTernormalisasi.map((row) => row[i]);
    return isBenefit[i] ? Math.max(...values) : Math.min(...values);
  });

  let idealNeg = kriteria.map((_, i) => {
    let values = matrixTernormalisasi.map((row) => row[i]);
    return isBenefit[i] ? Math.min(...values) : Math.max(...values);
  });

  // 3. Jarak & Skor (V_i)
  return data
    .map((row, idx) => {
      let dPos = Math.sqrt(
        matrixTernormalisasi[idx].reduce(
          (sum, val, i) => sum + Math.pow(val - idealPos[i], 2),
          0,
        ),
      );
      let dNeg = Math.sqrt(
        matrixTernormalisasi[idx].reduce(
          (sum, val, i) => sum + Math.pow(val - idealNeg[i], 2),
          0,
        ),
      );

      const totalJarak = dPos + dNeg;
      const skorAkhir = totalJarak === 0 ? "1.0000" : (dNeg / totalJarak).toFixed(4);

      return {
        ...row,
        skor: skorAkhir,
      };
    })
    .sort((a, b) => parseFloat(b.skor!) - parseFloat(a.skor!));
};