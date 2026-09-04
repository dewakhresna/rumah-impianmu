# Rumah Impianmu 

Sistem Penunjang Keputusan (SPK) cerdas untuk rekomendasi pencarian properti yang mengintegrasikan algoritma **TOPSIS** (*Technique for Order Preference by Similarity to Ideal Solution*) dengan *Natural Language Processing* (NLP) menggunakan **Large Language Model (API Groq)**. 

Sistem ini dirancang untuk mengatasi hambatan psikologis konsumen (*sales anxiety*) dengan menyediakan antarmuka *livechat* AI. Sistem berdasrkan preferensi pengguna dari percakapan bahasa alami, mengekstraknya menjadi bobot kriteria numerik yang dinamis, dan memprosesnya menggunakan metode matematis TOPSIS untuk menghasilkan rekomendasi rumah yang objektif dan transparan.

---

## Fitur Utama

* **Ekstraksi Preferensi Dinamis (NLP):** Tidak ada pengisian formulir pembobotan manual. AI menganalisis teks *livechat* pengguna dan secara otomatis memberikan bobot skala 1-5 untuk kriteria Harga, Jarak, Keamanan, dan Luas Bangunan.
* **Penyaringan Absolut (*Hard Filter*):** Kueri basis data untuk menyeleksi kandidat properti yang mutlak memenuhi spesifikasi dasar pengguna (seperti batas anggaran atau minimal jumlah kamar) sebelum komputasi matriks dilakukan.
* **Komputasi TOPSIS Otomatis:** Perhitungan *backend* yang melakukan normalisasi matriks, penerapan matriks terbobot, kalkulasi Solusi Ideal Positif/Negatif, dan penentuan Skor Kedekatan Relatif (Vi) secara cepat.
* **Natural Language Processing:** Sistem mengembalikan hasil peringkat TOPSIS tertinggi ke layar pengguna dalam bentuk bahasa yang natural, ramah, dan argumentatif.
* **Manajemen Dasbor Admin:** Antarmuka khusus (CRUD) bagi administrator untuk memelihara dan memperbarui himpunan data alternatif properti.
---

## Stack Teknologi

Sistem ini dibangun menggunakan arsitektur *Client-Server* modern.

**Frontend:**
* Next.js (React Framework)
* Tailwind CSS (Styling)
* Axios (HTTP Client)

**Backend:**
* Express.js (Node.js framework)
* MySQL (Basis Data Relasional)
* Custom Database Connection Module (Manajemen *pool* koneksi)

**Kecerdasan Buatan:**
* Groq API (Llama 3 / Compound-mini) untuk ekstraksi LLM dan analisis bobot kriteria.

---

## Panduan Instalasi

Pastikan sistem Anda sudah terpasang Node.js (v18+) dan server MySQL yang berjalan (misalnya XAMPP atau MySQL Server *standalone*).

## 🚀 Panduan Instalasi & Konfigurasi

1. **Kloning repositori**
   ```bash
   git clone https://github.com/dewakhresna/rumah-impianmu.git
   ```

2. **Instalasi Dependensi Backend**
   ```bash
   cd rumah-impianmu/backend-rumah-impianmu
   npm install
   ```

3. **Konfigurasi Database**
   * Buat database baru di MySQL (misal: `db_rumah_impian`).
   * Impor struktur tabel dan set data awal dari file `db_rumah_impian.sql` yang tersedia di direktori utama proyek.
   * Buat file `.env` di root folder *backend* dan sesuaikan kredensial koneksi database Anda:
     ```env
     DB_HOST=localhost
     DB_USER=root
     DB_PASS=password_anda
     DB_NAME=db_rumah_impian
     PORT=5000
     ```

4. **Jalankan Server**
   ```bash
   npm run dev
   # atau
   npm start
   ```
   Server akan berjalan dan siap menerima request di `http://localhost:5000`.

5. **Instalasi Dependensi Frontend**
   ```bash
   cd rumah-impianmu/frontend-rumah-impianmu
   npm install
   ```
4. **Jalankan Frontend**
   ```bash
   npm run dev
   # atau
   npm start
   ```
   Frontend akan berjalan di `http://localhost:3000`

## Alur Kerja Komputasi (Cara Sistem Bekerja)
* Input Pengguna: Pengguna mengetik "Saya butuh rumah murah dekat stasiun" di livechat.
* Transformasi (Groq LLM): Backend meneruskan teks ke API Groq lalu mengembalikan objek JSON berupa vektor bobot preferensi (contoh: {"harga": 5, "jarak": 5, "keamanan": 3, "luas": 1}).
* Kalkulasi (TOPSIS): Backend mengambil data rumah yang lolos hard filter dari MySQL, membangun Matriks Keputusan X, menormalisasikannya menjadi Matriks R, dan mengalikannya dengan bobot dari Groq untuk menjadi Matriks Y.
* Penentuan Keputusan: Jarak Euclidean (D+ dan D-) dikalkulasi untuk menemukan rumah dengan skor Vi mendekati 1.
* Output: Top 3 rumah terbaik dikirimkan kembali ke frontend untuk dirender di layar livechat.

## 🤝 Kontribusi
Kontribusi untuk pengembangan selalu diterima! Jika Anda ingin menambahkan fitur, memperbaiki bug, atau menyempurnakan kode implementasi TOPSIS, silakan:
1. Lakukan *Fork* pada repositori ini.
2. Buat *branch* fitur baru Anda (`git checkout -b fitur-baru`).
3. Lakukan *commit* terhadap perubahan Anda (`git commit -m 'Menambahkan fitur XYZ'`).
4. *Push* ke branch tersebut (`git push origin fitur-baru`).
5. Buat *Pull Request* baru ke repository utama.

## 📄 Lisensi
Proyek ini didistribusikan di bawah [Lisensi MIT](https://choosealicense.com/licenses/mit/).

Copyright (c) 2026 Khresna Bayu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
