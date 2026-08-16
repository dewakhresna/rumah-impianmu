-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 16, 2026 at 08:53 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_rumah_impian`
--

-- --------------------------------------------------------

--
-- Table structure for table `favorites`
--

CREATE TABLE `favorites` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `house_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `favorites`
--

INSERT INTO `favorites` (`id`, `user_id`, `house_id`, `createdAt`, `updatedAt`) VALUES
(57, 1, 13, '2026-07-29 01:00:05', '2026-07-29 01:00:05'),
(59, 1, 4, '2026-07-29 01:00:13', '2026-07-29 01:00:13'),
(61, 2, 19, '2026-08-07 10:35:38', '2026-08-07 10:35:38'),
(62, 2, 17, '2026-08-07 10:35:41', '2026-08-07 10:35:41'),
(63, 2, 16, '2026-08-07 10:35:42', '2026-08-07 10:35:42');

-- --------------------------------------------------------

--
-- Table structure for table `houses`
--

CREATE TABLE `houses` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `c1_harga` float DEFAULT NULL,
  `c2_jarak` float DEFAULT NULL,
  `c3_keamanan` int(11) DEFAULT NULL,
  `c4_luas` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `houses`
--

INSERT INTO `houses` (`id`, `nama`, `c1_harga`, `c2_jarak`, `c3_keamanan`, `c4_luas`) VALUES
(2, 'Rumah Harapan Indah', 3900000000, 2, 3, 400),
(3, 'Payangan Permai Jati Asih Bekasi', 585000000, 4, 4, 46),
(4, 'Rumah Lebar Hanya dengan 980Juta, Pondok Gede', 980000000, 12, 4, 100),
(13, 'Summarecon Bekasi Cluster Palm', 2400000000, 1.7, 5, 132),
(14, 'Rumah Minimalis Digrand Wisata.', 1300000000, 3, 5, 75),
(15, 'Burgundy Residence Summarecon', 2450000000, 2, 5, 84),
(16, 'Perumahan Bulog 1 Jatiwarna', 5500000000, 3, 5, 250),
(17, 'Rumah Mewah Bekasi Selatan Green Urban Galaxy', 1380000000, 3, 5, 85),
(18, 'Summarecon Bekasi Siap Huni', 2800000000, 4, 4, 118),
(19, 'Premium New Cluster Jatibening', 1200000000, 3, 5, 120),
(20, 'Rumah Cluster Kencana Vida Bekasi', 975000000, 5, 4, 58),
(21, 'Soultan Island Summarecon Bekasi', 9450000000, 1, 5, 323),
(22, 'Rumah Rp 610 Juta Bekasi Utara', 610000000, 15, 5, 45),
(23, 'Rumah Baru Rawalumbu', 600000000, 10, 2, 75),
(24, 'Rumah Klasik 2 Lantai Rawalumbu', 2500000000, 2, 4, 520),
(25, 'Rumah Bumi Bekasi Baru, Rawa Lumbu', 1700000000, 10, 3, 200),
(26, 'Perumahan Harapan Indah Medan Satria', 2390000000, 10, 4, 96),
(27, 'Perumahan Rawalumbu Selatan', 1200000000, 5, 3, 150),
(28, 'Rumah di Lumbu Barat', 1700000000, 10, 4, 233),
(29, 'Rumah Murah Aset Bank Intidana', 3050000000, 7, 3, 213),
(30, 'Rumah 5 Mnt ke Gerbang Tol Pondok Gede', 6630000000, 4, 3, 430),
(31, 'Rumah 2 Lantai Akses Strategis Tol', 1550000000, 6, 4, 136),
(32, 'Rumah 2 LT 8 Menit ke Rs Mitra Keluarga', 1440000000, 6, 4, 100),
(33, 'Rumah 1 LT 11 Menit ke Gerbang Tol Jati Asih', 2210000000, 8, 4, 130),
(34, 'Rumah Bebas Banjir 10 Menit ke Stasiun Jati Mulya', 1330000000, 10, 3, 120),
(35, 'Rumah Semi Hook Semi Furnished Cluster Kencana Vida', 1750000000, 13, 4, 116),
(36, 'Rumah Mewah LT 270 Meter di Bekasi', 2200000000, 5, 5, 400),
(37, 'Rumah Siap Huni Full Furnish Jatimurni Bekasi', 3000000000, 8, 4, 180),
(38, 'Rumah 2 Kamar SHM Dekat Gerbang Tol Setu Selatan', 470000000, 13, 3, 36),
(39, 'Rumah luas 2 lantai dengan kolam renang di permata harapan baru', 5500000000, 7, 5, 700),
(40, 'Rumah Mewah Taman Harapan Baru', 2200000000, 6, 4, 400),
(41, 'Rumah di Premier Savanna Bekasi', 1000000000, 5, 4, 53),
(42, 'Rumah LB 250 Siap Huni 10 Mnt ke Rs Hermina', 3260000000, 11, 3, 250),
(43, 'Rumah Dijual Pondok Melati', 480000000, 14, 3, 87),
(44, 'Rumah 3 LT Hadap Timur 5 Mnt ke Mall Pekayonn', 5200000000, 7, 3, 600),
(45, 'Rumah di Bekasi Harga Sudah Murah', 1600000000, 10, 3, 100),
(46, 'Rumah Cocok untuk Hunian Masa Kini', 4800000000, 5, 5, 350),
(47, 'Rumah Siap Huni Di Taman Galaxy Indah bekasi Selatan', 3200000000, 6, 3, 225),
(48, 'Rumah Mewah 2 Lantai Semi Furnish di Kemang Pratama 3 ', 6900000000, 1, 5, 500),
(49, 'Rumah Cluster Familia Urban', 2500000000, 4, 4, 270),
(50, 'Rumah Mewah Grandwisata dengan Private Pool', 8500000000, 2, 2, 800),
(51, 'Rumah Strategis Harapan Indah Regency', 2600000000, 2, 3, 220),
(52, 'Siap Huni Jalan Utama Bekasi Timur', 1000000000, 2, 5, 70),
(53, 'Rumah 2 Lantai di Bekasi Jaya', 1500000000, 10, 3, 200),
(54, 'Rumah Hook Baru Jadi!! Sakura Regency 3 Bekasi', 2800000000, 3, 4, 118),
(55, 'Rumah Grand Kota Bintang Bekasi Barat', 2500000000, 3, 5, 110),
(56, 'Rumah Siap Huni di Mustikajaya', 2700000000, 5, 4, 200),
(57, 'Rumah Tanah Luas 15 Menit ke Rs Mitra Keluarga', 3760000000, 5, 4, 350),
(58, 'Rumah Tinggal Perumahan Citra Grand', 5860000000, 5, 2, 673),
(59, 'Rumah Mewah Dalam Cluster Citragrand', 3320000000, 8, 3, 210);

-- --------------------------------------------------------

--
-- Table structure for table `house_details`
--

CREATE TABLE `house_details` (
  `id` int(11) NOT NULL,
  `house_id` int(11) NOT NULL,
  `contact` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `image_1` varchar(255) DEFAULT NULL,
  `image_2` varchar(255) DEFAULT NULL,
  `image_3` varchar(255) DEFAULT NULL,
  `beds` int(11) DEFAULT NULL,
  `baths` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `contact_name` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `house_details`
--

INSERT INTO `house_details` (`id`, `house_id`, `contact`, `description`, `image_1`, `image_2`, `image_3`, `beds`, `baths`, `createdAt`, `updatedAt`, `contact_name`, `location`) VALUES
(2, 2, '082295594123', 'Rumah di Harapan Indah.\n\nDapatkan rumah 2 lantai yang asri ini,  dijual krn ownernya udh menetap di jawa. Rumah ini berada di area Dekat Kawasan Bisnis , mall, perbankan,sekolah swasta dan internasional, terminal bus dan damri, pasar modern serta menawarkan lingkungan fasilitas yang lengkap, cocok untuk Anda yang menginginkan hunian aman.\n\nSpesifikasi Utama Properti:\n\n  - Kamar Tidur: 4\n  - Kamar Mandi: 5\n  - Sertifikat: SHM - Sertifikat Hak Milik\nair pam\nlistrik 5500\nfull renov\nFitur unggulan:\n\n  - Lokasi di Pusat Kota.\n  - Dekat Kawasan Bisnis & Industri.\n  - Lingkungan Tenang dan Damai.\n  - Cocok Untuk Dijual Kembali.\n  - Cocok Untuk Investasi.\n  - Properti Bisa Nego.\n  - Lokasi Strategis.\n  - Tanpa Perantara.\n  - Bisa KPR.\n  - Properti Mewah.\n  - Dijual Cepat Butuh Uang.\n\nBerlokasi di Harapan Indah, rumah ini memberikan kemudahan akses ke berbagai fasilitas menarik.\n\nDengan harga Rp. 3.900.000.xxx, anda bisa memiliki hunian eksklusif yang sudah siap huni dan bersertifikat SHM - Sertifikat Hak Milik. Jangan lewatkan kesempatan untuk menikmati pengalaman tinggal di kawasan Harapan Indah yang nyaman ini!', '/uploads/1785288325227-433415507.webp', '/uploads/1785288330819-135231837.webp', '/uploads/1785288335874-578852516.webp', 4, 5, '2026-04-04 16:30:49', '2026-08-14 17:11:58', 'Budi', 'Medan Satria'),
(3, 3, '081234567898', 'kami menawarkan rumah second siap huni\ndengan dinding bata merah dan sudah cakar ayam siap untuk dibikin 2lantai\n\nlokasi strategis di payangan permai jatisari jati asih\n- 4km dari exit tol jati karya\n- 4km dari exit tol nagrak (kota wisata)\n- 5km dari exit tol jati warna\n- 8km dari exit tol cibubur\n- 8km dari exit tol jatiasih\n\njalan lebar dan bebas banjir\nKPR BISA DIBANTU SAMPAI SELESAI', '/uploads/1785289760771-206983320.webp', '/uploads/1785289770798-478076894.webp', '/uploads/1785289774225-242858462.webp', 3, 2, '2026-04-05 11:42:58', '2026-08-14 17:16:30', 'Elly Sefa Widyarini', 'Jati Asih'),
(4, 4, '081225888855', 'Jual Rumah Murah Minimalis Modern Kondisi Sudah Renovasi, Pondok Gede, Bekasi, 028\n\nlebar 10\nLt 120m \nLb 100m\nKt 2\nKm 2\nCarport 1\n\nAda kursi + meja ruang tamu\nsudah ada westafel\n\nSertifikat shm\nBebas Banjir\nLokasi Strategis\nDekat dengan tol\n \nHarga 980 Juta NEGO\nMinat Hubungi:\nNancy, 0812xxxxxxxx', '/uploads/1785289537502-962788135.jpeg', '/uploads/1785289542491-179276503.webp', '/uploads/1785289546187-910912895.webp', 2, 2, '2026-04-05 11:55:54', '2026-07-29 01:45:48', 'Andi', 'Pondok Gede'),
(6, 13, '0817177124', 'Cluster Palm Summarecon Bekasi. Cluster terdepan di Summarecon. Dekat Landmark. Lokasi bagus, hadap taman kosong.\n\nRumah bagus siap huni, type PREMIUM dengan spesifikasi sebagai berikut :\n- Luas Tanah 119 m2  (7x17)m2\n- Luas Bangunan 132 m2\n-  3+1 Kamar Tidur \n-  3+1 Kamar Mandi \n-  1 carport\n-  1 garasi\n- Daya Listrik : 2200 watt\n- Di depannya taman kosong.\n\nLokasi di Kawasan Ekskulsif dan sangat strategis di pusat Kota Bekasi dengan Akses Fly Over dan Exit Tol Bekasi Barat. \n\nDilengkapi PRIVATE CLUBHOUSE dengan swimming pool, children playground, security 24 jam dengan sistem cluster SMART GATE Plus CCTV, shuttle bus. Dekat dengan Summarecon Mal Bekasi, pusat kuliner, pusat perbankan, pasar modern SINPASA, Bursa mobil AXC, sekolah BPK PENABUR, AL AZHAR ,BINUS UNIVERSITY, halte TRANSJAKARTA, Stasiun Kereta api.\n\nInfo lengkap :\nIDA - 081717xxxx\nRay White Summarecon Bekasi', '/uploads/1785290025104-180730631.webp', '/uploads/1785290029287-844053719.webp', '/uploads/1785290032417-904069432.webp', 5, 3, '2026-04-05 18:56:52', '2026-07-29 01:53:53', 'Hendi', 'Bekasi Utara'),
(7, 14, '081234567891', 'Kesempatan terbatas buat Anda dapatkan rumah strategis dengan return investasi tinggi di Grand Wisata, Bekasi.\r\n\r\nRumah ini menawarkan kelengkapan fasilitas serta memiliki nilai tepat yang siap untuk segera Anda miliki, utamanya bagi Anda yang mencari hunian di lokasi yang dekat dengan fasilitas umum.\r\n\r\nKondisi properti ini bagus dan memiliki desain modern yang menambah daya tarik dan estetika properti ini. Rumah ini berada di wilayah strategis.\r\n\r\nDetail Properti ini adalah:\r\n\r\n  - Kamar Tidur: 3\r\n  - Kamar Mandi: 2\r\n  - Sertifikat: SHM - Sertifikat Hak Milik\r\n  - Daya Listrik: 2200 watt\r\n  - Arah Bangunan: Menghadap Utara\r\n  - Kondisi Perabotan: Unfurnished\r\n\r\nTersedia berbagai fasilitas lengkap, seperti:\r\n\r\n  - CCTV.\r\n  - Wastafel.\r\n  - Kitchen Set.\r\n  - Keamanan 24 jam.\r\n  - Taman.\r\n  - CCTV.\r\n  - One Gate System.\r\n  - Akses Parkir.\r\n  - Jalur Telepon.\r\n  - Taman.\r\n  - Tempat Jemuran.\r\n  - Jalur Telepon.\r\n  - Taman.\r\n  - Tempat Jemuran.\r\n  - Trak Lari.\r\n  - Lapangan Basket.\r\n  - Lapangan Voli.\r\n\r\nTidak hanya itu, namun properti ini juga memiliki keunggulan sebagai berikut:\r\n\r\n  - Bisa KPR.\r\n  - Siap Huni.\r\n  - Bebas Banjir.\r\n  - Dekat Akses KRL.\r\n  - Dekat Akses Pelabuhan.\r\n  - Dekat Akses Transjakarta.\r\n  - Dekat Akses LRT.\r\n  - Dekat Akses MRT.\r\n  - Dekat Akses Bus Kota.\r\n  - Dekat Akses Bandara.\r\n  - Dekat Pusat Perbelanjaan.\r\n  - Dekat Sekolah Internasional.\r\n  - Dekat Sekolah Negeri.\r\n  - Dekat Universitas.\r\n  - Dekat Fasilitas Kesehatan.\r\n  - Dekat Tempat Wisata.\r\n  - Dekat Tempat Ibadah.\r\n  - Dekat Akses Tol.\r\n  - Lokasi Pinggiran Kota.\r\n  - Dekat Kawasan Bisnis & Industri.\r\n  - Lingkungan Tenang dan Damai.\r\n  - Cocok Untuk Investasi.\r\n  - Cocok Untuk Dijual Kembali.\r\n  - Aset Kepemilikan Pribadi (Tangan Pertama).\r\n  - Properti Bisa Nego.\r\n  - Akses Jalan Muat 2 Mobil.\r\n  - Lokasi Strategis.\r\n  - Lokasi Bebas Banjir.\r\n  - One Gate System.\r\n  - Bisa KPR.\r\n  - Tanpa Perantara.\r\n\r\nLokasi Strategis terletak di Grand Wisata, properti ini memudahkan akses Anda ke fasilitas-fasilitas utama dan unggulan.\r\n\r\nHarga yang sangat kompetitif yaitu, Rp. 1.300.000.xxx, rumah ini siap menjadi milik Anda!\r\n\r\nNikmati segala kemudahan dan berbagai keunggulan menarik saat properti asri ini milik Anda.', '/uploads/1785288137582-310939560.webp', '/uploads/1785288137582-210565736.webp', '/uploads/1785288137582-571799267.webp', 3, 2, '2026-07-29 01:22:17', '2026-07-29 01:22:17', NULL, 'Grand Wisata'),
(8, 15, '081574599005', 'DIJUAL RUMAH SIAP HUNI DI BURGUNDY - BANGUNAN LUAS, FUNGISIONAL, DAN SUDAH FULL RENOVASI\r\n\r\nKesempatan memiliki rumah nyaman di kawasan Burgundy dengan kondisi terawat dan bangunan yang sudah dikembangkan secara maksimal hingga lantai 3 bagian belakang. Sangat cocok untuk hunian keluarga besar maupun investasi jangka panjang.\r\n\r\nKeunggulan Properti :\r\n- Bangunan sudah diperluas full hingga lantai 3 pada bagian belakang\r\n- Memiliki kapasitas ruang yang lebih luas dan fungsional dibanding standar awal\r\n- Terdiri dari 5 kamar tidur dan 3 kamar mandi\r\n- Kondisi rumah masih dihuni dan terawat dengan baik\r\n- Cocok untuk keluarga besar maupun kebutuhan work from home\r\n- Lingkungan nyaman dan mudah diakses\r\n\r\nSpesifikasi Properti :\r\n- Luas Tanah : 91 m²\r\n- Luas Bangunan Sertifikat : 84 m²\r\n- Pengembangan bangunan full hingga lantai 3 bagian belakang\r\n- Jumlah Lantai : 2,5 Lantai\r\n- 5 Kamar Tidur\r\n- 3 Kamar Mandi\r\n- Listrik 4.400 Watt\r\n- Sertifikat Hak Milik (SHM)\r\n- Sertifikat berada di tangan pemilik\r\n- Posisi rumah badan\r\n\r\nHarga Penawaran :\r\nRp2,4 M (Nego)\r\nPilihan tepat bagi Anda yang mencari rumah siap huni dengan ruang lebih luas, lokasi nyaman, dan nilai tambah dari pengembangan bangunan yang sudah maksimal.', '/uploads/1785291020232-70894143.webp', '/uploads/1785291020232-533663570.webp', '/uploads/1785291020233-486803281.webp', 5, 2, '2026-07-29 02:10:20', '2026-07-29 02:10:20', 'Yeyen RWSB', 'Bekasi Utara\n'),
(9, 16, '082210005095', 'Jual Cepat Perumahan Bulog 1 Jatiwarna Dekat Pintu Tol.\r\n\r\nCek segera rumah 3 lantai yang modern ini,  dijual dengan pemandangan asri yang menambah nilai estetika di lingkungan hunian. Rumah ini berada di area strategis serta menawarkan lingkungan fasilitas yang lengkap, cocok untuk Anda yang menginginkan hunian nyaman.\r\n\r\nSpesifikasi Utama Properti:\r\nLuas tanah 385 m2 \r\nLuas bangunan 250 m2\r\n  - Kamar Tidur: 3+1\r\n  - Kamar Mandi: 3+1\r\n  - Carport 2 mobil\r\n  - Sertifikat: SHM - Sertifikat Hak Milik\r\n  - Kondisi Perabotan: Semi Furnished\r\n\r\nopsional living room lantai 2 bisa di rubah menjadi kamar ke 4\r\n\r\n\r\nSelling point: Lingkungan aman nyaman Hanya 5 menit ke pintu Tol Jatiwarna Dekat sekolah internasional, swasta, negeri Dekat pusat kuliner Mc D, Pizza Hut, KFC, Richeese, dll Dekat supermarket One gate Sistem Keamanan 24 jam dekat  McD Jatiwarna.\r\n\r\nharga 5,5M nego sampai deal\r\nCara bayar bisa cash atau KPR', '/uploads/1785291806105-294370144.webp', '/uploads/1785291806106-533374518.webp', '/uploads/1785291806106-929175279.webp', 3, 3, '2026-07-29 02:23:26', '2026-07-29 02:23:26', 'Felix Kuosanto', 'Pondokmelati'),
(10, 17, '085695216364', 'Rumah bergaya modern glass house di Bekasi Selatan.\r\n\r\nTemukan rumah 2 lantai yang asri ini,  dijual dengan pemandangan perkotaan yang menambah nilai estetika di lingkungan hunian. Rumah ini berada di area strategis serta menghadirkan lingkungan fasilitas yang lengkap, cocok untuk Anda yang menginginkan hunian strategis.\r\n\r\nSpesifikasi Utama Properti:\r\n\r\n  - Kamar Tidur: 3\r\n  - Kamar Mandi: 2\r\n  - Sertifikat: SHM - Sertifikat Hak Milik\r\n  - Daya Listrik: 1300 W\r\n  - Arah Bangunan: Menghadap Barat\r\n  - Kondisi Perabotan: Unfurnished\r\n\r\nDilengkapi dengan:\r\n\r\n  - Wastafel.\r\n  - Keamanan 24 jam.\r\n  - Akses Parkir.\r\n  - Taman.\r\n  - CCTV.\r\n  - One Gate System.\r\n  - Tempat Laundry.\r\n  - Tempat Jemuran.\r\n  - Jalur Telepon.\r\n  - Taman.\r\n  - Tempat Jemuran.\r\n  - Jalur Telepon.\r\n  - Taman.\r\n\r\nFitur unggulan:\r\n\r\n  - Bisa KPR.\r\n  - Angsuran Rendah .\r\n  - Bebas Banjir.\r\n  - Lingkungan Islami.\r\n  - Cicilan Bertahap.\r\n  - Free Biaya Akad.\r\n  - Free Biaya Notaris.\r\n  - Free Biaya KPR.\r\n  - Dekat Akses KRL.\r\n  - Dekat Pusat Perbelanjaan.\r\n  - Dekat Sekolah Internasional.\r\n  - Dekat Sekolah Negeri.\r\n  - Dekat Fasilitas Kesehatan.\r\n  - Dekat Tempat Ibadah.\r\n  - Dekat Akses Tol.\r\n  - Lokasi di Pusat Kota.\r\n  - Dekat Kawasan Bisnis & Industri.\r\n  - Adem & Sejuk.\r\n  - Lingkungan Tenang dan Damai.\r\n  - Pemandangan City View.\r\n  - Cocok Untuk Investasi.\r\n  - Cocok Untuk Dijual Kembali.\r\n  - Aset Kepemilikan Pribadi (Tangan Pertama).\r\n  - Properti Bisa Nego.\r\n  - Akses Jalan Muat 2 Mobil.\r\n  - Lokasi Strategis.\r\n  - Lokasi Bebas Banjir.\r\n  - One Gate System.\r\n  - Bisa KPR.\r\n  - Properti Eksklusif.\r\n  - Properti Mewah.\r\n\r\nTerletak di Bekasi Selatan, rumah ini memberikan kemudahan akses ke berbagai fasilitas menarik.', '/uploads/1785292321148-893450797.webp', '/uploads/1785292321148-782333226.webp', '/uploads/1785292321148-428753287.webp', 3, 2, '2026-07-29 02:32:01', '2026-07-29 02:32:01', 'Linda Lupiana', 'Bekasi Selatan'),
(11, 18, '081285990926', '10 menit mall\r\n10 menit sekolah\r\n10 menit universitas\r\n7 menit Rumah sakit\r\n15 menit pintu toll\r\n\r\nLuas bangunan : 118\r\nLuas tanah : 104\r\nJumlah kamar tidur : 4\r\nkamar mandi : 4\r\nJumlah lantai : 2\r\nCarport : 2\r\nAir : PDAM\r\nDaya Listrik : 2200\r\nSertifikat  : SHM\r\nunfurnish\r\nHarga : 2.800.000.xxx', '/uploads/1785292625722-8609611.webp', '/uploads/1785292625722-71423470.webp', '/uploads/1785292625722-793237192.webp', 4, 4, '2026-07-29 02:37:05', '2026-07-29 02:37:05', 'Olivier', 'Bekasi Utara'),
(12, 19, '081287518486', 'MEWAH BISA CUSTOM.Hanya 10 Menit Lrt dan Toll Jatibening\r\nTidak Banjir.. Unit Terbatas JANGAN SAMPAI KEHABISAN! LAUNCHIING HARGA PERDANA. Amankan unit Anda sekarang!\r\n\r\nRumah Baru Dalam Cluster Selangkah ke Galaxy , rumah selangkah cikunir dan rumah ini selangkah jatibening\r\n\r\nSpesifikasi:\r\nLuas tanah:  92 - 141 m² \r\nLuas bangunan: 120  m²\r\n\r\nKamar tidur:  3 \r\nKamar mandi: 3\r\nLegalitas:  SHM, PBB, PBG\r\nListrik (watt): 2.200\r\nSumber air:  Jet Pam\r\nCarport :  2 Mobil\r\nBebas Banjir ? :  Ya 100%\r\nAkses : 2 Mobil\r\nRuang Tamu\r\nRuang Keluarga\r\nDapur\r\nBalkon depan\r\nHalaman Belakang\r\nCluster One Gate\r\nDalam Cluster (  14   unit)\r\n\r\nHarga : Rp. 1,2 M-an**\r\n\r\nPROMO : \r\nFree Biaya Notaris AJB , BN\r\nSubsidi BPHTB 10jt\r\n\r\nAkses Tol Cepat:\r\n- Tol Jatiasih (JORR) - 5 menit\r\n- Tol Bekasi Barat  - 10 menit\r\n- Tol Becakayu (Bekasi-Cawang-Kampung Melayu) - 15 menit\r\n- Tol Jatibening  - 10 menit\r\n- akses mudah ke Jakarta Timur dan sekitarnya\r\n\r\nDekat ke Fasilitas Umum & Gaya Hidup\r\n\r\nRumah Sakit Terdekat:\r\n- RS Cikunir - 2 menit\r\n- RS Hermina Galaxy - 7 menit\r\n- RS Anna - 5 menit\r\n\r\nPusat Pendidikan:\r\n- SDIT Al-Hambra - 5 menit\r\n- SDIT Ikhlas 86 - 8 menit\r\n- SMAN 3 Bekasi - 6 menit\r\n\r\nPusat Perbelanjaan & Hiburan:\r\n- Grand Galaxy Park Mall - 7 menit\r\n- Naga Swalayan - 5 meniT\r\n- Pasar Galaxy - 10 menit\r\n- Mall Metropolitan Bekasi - 10 Menit\r\n- Pakuwon Mall Bekasi - hanya ±10 menit dari lokasi! Mall baru prestisius dengan tenant internasional & area hiburan lengkap.\r\n\r\nKeunggulan:\r\n- Bebas Banjir\r\n- Lingkungan Tenang dan Asri\r\n- Sistem One Gate dengan Keamanan 24 Jam\r\n- Jalan Lingkungan Lebar, Air bersih\r\n- Cocok untuk keluarga muda, pekerja urban, dan investor properti', '/uploads/1785293877352-304941009.webp', '/uploads/1785293877353-366342407.webp', '/uploads/1785293877353-343742283.webp', 3, 3, '2026-07-29 02:57:57', '2026-07-29 02:57:57', 'Baim Ditya', 'Pondok Gede'),
(13, 20, '081284811928', 'Dijual Cepat\r\n\r\nHarga 975 jt Nego smp deal\r\n\r\nPerumahan Vida Bekasi cluster kencana blok kencana selatan \r\nKelurahan: bantar gebang\r\nKecamatan: bantar gebang\r\n\r\nLT. 60 m2\r\nUkuran 5 x 12 m\r\nLB. 58 m2\r\n2 lantai\r\nKamar Tidur: 2\r\nKamar Mandi: 2\r\nListrik : 2200watt\r\nSHM \r\n\r\nFasilitas di rumah:\r\n- carport\r\n- taman belakang\r\n\r\nFasilitas perumahan :\r\n- kolam renang\r\n- sport centre\r\n- sekolah\r\n- rumah sakit\r\n- cafe \r\n- minimarket ', '/uploads/1785473630934-649369564.webp', '/uploads/1785473630935-489678311.webp', '/uploads/1785473630935-835120208.webp', 2, 2, '2026-07-31 04:53:50', '2026-07-31 04:53:50', 'LINA SANTI', 'Bantar Gebang'),
(14, 21, '081574599005', 'Soultan Island - Soul of Nature\r\nHunian Prestisius Bernuansa Villa di Pusat Kota\r\n\r\nBerada di kawasan elit Summarecon Bekasi, yang telah berkembang menjadi pusat hunian, bisnis, serta gaya hidup modern di timur Jakarta. Lingkungan premium dan akses super strategis menjadikan Soultan Island pilihan terbaik untuk keluarga maupun investor.\r\n\r\n5 Alasan Kenapa Harus Soultan Island?\r\n\r\n1️⃣ Developer Terpercaya\r\nSummarecon - 50 tahun pengalaman membangun kota terpadu berkelas nasional\r\n\r\n2️⃣ Prime Location - Heart of Summarecon Bekasi\r\n- 0,5 km ke BCBD (Bekasi Central Business District)\r\n-1 km ke Summarecon Mall Bekasi\r\n-2 km ke Bekasi City Center\r\n\r\nAkses & Landmark Terdekat\r\n±3 menit ke Summarecon Mall Bekasi\r\n±3 menit ke Kampus BINUS Bekasi\r\n±5 menit ke RS Mitra Keluarga\r\n±10 menit ke Tol Bekasi Barat & Bekasi Timur\r\n±10 menit ke Stasiun Bekasi\r\nDekat pusat bisnis & kuliner Summarecon\r\n\r\n3️⃣ Best Design & Premium Materials\r\nDirancang oleh arsitek internasional Thomas Elliot dengan Material kelas atas:\r\n-Marmer Import Lbr 18\r\n-Quadra Lbr 15 & 12\r\n-Sanitary Kohler\r\n\r\n4️⃣ Exclusive & Luxurious Facilities\r\n- Club House Terbesar di Summarecon Bekasi (±3.000 m²)\r\n-40% green & blue landscape\r\n-Row jalan 14-16 meter\r\n-Jogging Track View Danau\r\n\r\nFasilitas lengkap:\r\n-Gym & Sauna\r\n-Jacuzzi Pool\r\n-Infinity Pool View Danau\r\n-Children Playground\r\n\r\n5️⃣ Limited & Exclusive\r\n Hanya 110 unit - Privasi & kenyamanan maksimal\r\n\r\nHarga & Unit\r\nTipe Yellow - 12 x 25 | 300 m²\r\nHarga mulai Rp 9,3 M\r\nSerah terima: ± 24 bulan dari PPJB', '/uploads/1785474058573-467607006.webp', '/uploads/1785474058573-229210806.webp', '/uploads/1785474058575-287704947.webp', 4, 4, '2026-07-31 05:00:58', '2026-07-31 05:00:58', 'Yeyen RWSB', 'Bekasi Utara'),
(15, 22, '085183299123', 'Perumahan Vila Indah Permai Blok J6 No.4\r\nBekasi Utara - Kota Bekasi\r\n\r\n*Menerima Cash\r\n*Bisa Dibantu KPR\r\n\r\nRumah siap huni lokasi strategis, dekat dengan fasilitas pendidikan, kesehatan, pusat perbelanjaan, dan akses transportasi.\r\n\r\nSHM\r\nLT 60\r\nLB 45\r\n1 Lantai\r\n2 Kamar Tidur\r\n1 Kamar Mandi\r\nListrik 1300 VA\r\nSumber Air Tanah\r\nHadap Utara\r\n\r\nFasilitas Sekitar Hunian:\r\n10 menit ke SD Negeri Kebalen 03\r\n15 menit ke SDN Karang Satria 02\r\n15 menit ke SD Negeri Duren Jaya IV\r\n20 menit ke SMA Negeri 1 Bekasi\r\n25 menit ke SMP Alam Mekar\r\n25 menit ke Smp Jaya Bekasi\r\n\r\n8 menit ke Pasar Tradisional Wisma Asri\r\n15 menit ke Summarecon Mall Bekasi\r\n25 menit ke Metropolitan Mall Bekasi\r\n25 menit ke Mall Grand Metropolitan Bekasi\r\n30 menit ke Pasar Kranji Baru\r\n\r\n15 menit ke Puskesmas Pejuang\r\n20 menit ke Puskesmas Kaliabang Tengah\r\n20 menit ke RS Mekar Sari\r\n25 menit ke Primaya Hospital Bekasi Barat\r\n30 menit ke RS. Rawa Lumbu\r\n35 menit ke Rumah Sakit Puspa Husada\r\n\r\n20 menit ke Stasiun Bekasi\r\n25 menit ke Stasiun Bekasi Timur\r\n25 menit ke Terminal Bekasi\r\n25 menit ke Gerbang Tol Bekasi Barat 1\r\n25 menit ke Gerbang Tol Bekasi Barat 2\r\n30 menit ke Gerbang Tol Cakung 2\r\n30 menit ke Stasiun Cakung\r\n30 menit ke Terminal Pulogebang\r\n35 menit ke Terminal Bus Klender', '/uploads/1786707149878-392234134.webp', '/uploads/1786707149880-568723439.webp', '/uploads/1786707149880-662228985.webp', 2, 1, '2026-08-14 11:32:29', '2026-08-14 11:32:29', 'Maulana', 'Bekasi Utara'),
(16, 23, '085183299123', 'Rumah Baru Lux ada 1 unit ( sebelah kanan ) \r\ndi Rawa Lumbu Bekasi \r\n\r\nSpesifikasi : \r\nLT : 63 M²\r\nLB : 75 M²\r\nKT / KM : 3/2\r\nCarport : 1 mobil\r\nHadap : Timur\r\nListrik : 1300 w\r\nDinding : Hebel\r\nAtap : baja ringan \r\nLantai : granit\r\nBangunan tahun : 2024\r\nSumber Air : Jet pum\r\nSHM IMB PBB \r\n\r\nSelling Point :\r\n- Akses 2 mobil\r\n- Dekat Mini Market\r\n- Dekat Sekolah² Negri dan Swasta\r\n- Dekat Masjid \r\n- 15 menit Ke Pintu Tol Bekasi Timur\r\n- 20 menit Ke Pintu Tol Bekasi Barat\r\n\r\nHarga : Rp 700jt  \r\nturun menjadi Rp 600jt\r\nInclude Pajak dan Surat².', '/uploads/1786724736819-14024844.webp', '/uploads/1786724736820-440507012.webp', '/uploads/1786724736821-577594266.webp', 3, 2, '2026-08-14 16:25:36', '2026-08-14 16:28:25', 'Zoy Baiti', 'Rawalumbu'),
(17, 24, '085183299123', 'Jual Cepat Harga Spesial. \r\nRumah Klasik 2 Lantai.\r\nLT/LB : 258/520 m². \r\nLegalitas surat SHM.\r\nLokasi : Jl. Lumbu Permai, Rawalumbu, Bekasi.\r\n\r\nBangunan Hook 2 Lantai Hadap Barat.\r\n6 Kamar Tidur. \r\n4  Kamar Mandi.\r\n1 Kamar Tidur dan Kamar Mandi ART.\r\nRuang Tamu dan Ruang Keluarga.\r\nDapur Bersih & Dapur Kotor.\r\nGas Alam PGN & Free Wifi.\r\n7 unit AC.\r\nAir : Jetpump & PDAM.\r\nListrik : 3500 Watt \r\nTaman di Teras Depan dan Samping.\r\nTempat khusus Cuci dan Jemur.\r\nAkses jalan 2 mobil.\r\nGarasi & Carport : 2 Mobil.\r\nArea Rumah bebas banjir\r\n\r\nLokasi Strategis.\r\n- Dekat Akses Tol Lingkar Luar & Tol Cikunir.\r\n- Dekat RS St. Elisabeth & RS Rawa Lumbu.\r\n- Dekat Pusat Pendidikan & Perguruan Tinggi.\r\n- Dekat Pusat Perbelanjaan & Mall di Bekasi.', '/uploads/1786730430480-29581772.webp', '/uploads/1786730430480-997917821.webp', '/uploads/1786730430481-711072482.webp', 6, 4, '2026-08-14 18:00:30', '2026-08-14 18:00:30', 'Eko Prijatno W', 'Rawalumbu'),
(18, 25, '085183299123', 'Spesifikasi:\r\nLuas Tanah: 250 M2\r\nLuas Bangunan: 200 M2\r\nKamar Tidur: 3+2\r\nKamar Mandi: 2\r\nListrik 2200 Watt\r\nSHM', '/uploads/1786731540603-23105776.webp', '/uploads/1786731540603-230446283.webp', '/uploads/1786731540603-886394127.webp', 5, 2, '2026-08-14 18:19:00', '2026-08-14 18:19:00', 'Nita Harianti', 'Rawalumbu'),
(19, 26, '08128766792', 'Spesifikasi\r\nLuas Tanah 200 m²\r\nLuas Bangunan 96 m²\r\nKamar Tidur 1\r\nKamar Mandi 1\r\nSertifikat SHM', '/uploads/1786732630309-802776585.webp', '/uploads/1786732630310-80833582.webp', '/uploads/1786732630310-947308799.webp', 1, 1, '2026-08-14 18:37:10', '2026-08-14 18:37:10', 'Permata Bank', 'Medan Satria'),
(20, 27, '085183299123', 'Rumah Baru Renovasi bebas banjir di dalam Perum. Rawa Lumbu Selatan, Bekasi \r\n\r\nSpesifikasi :\r\n- luas tanah : 222 M2 (172 + 50 M2)\r\n- luas bangunan : 150 m\r\n- kamar Tidur : 3+1\r\n- kamar Mandi : 3+1\r\n- uang keluarga luas & ada ruangan mushola\r\n- PLN : 2200 Watt\r\n- Sumber air tanah\r\n- Sudah ad saluran PDAM & Gas alam dlm perumahan tsb.\r\n- Garasi Luas \r\n- SHM + IMB\r\n\r\n\r\nSelling Point :\r\n- 10 menit Tol Bekasi Timur\r\n- 15 menit Tol Bekasi Barat\r\n- Dekat RS Elizabeth\r\n- Daerah sekitar banyak sekolah Negeri dan Swasta Terkenal, al. SdIT labschool ISTEC, SD Harapan bangsa, Bina Insani, kampus Trisakti, Al Azhar Kemang Pratama\r\n- Sekitar 1 KM k Jl. Raya Narogong\r\n- 50 mtr k mesjid dalam perumahan\r\n- akses 2 mobil\r\n- bebas banjir\r\n- dekat SDIT labschool ISTEC', '/uploads/1786732937794-899637699.png', '/uploads/1786732937795-374943887.webp', '/uploads/1786732937796-466901041.webp', 3, 3, '2026-08-14 18:42:17', '2026-08-14 18:42:17', 'Tintin Widowati', 'Rawalumbu'),
(21, 28, '085183299123', 'Dijual Rumah di Lumbu Barat III, Rawa Lumbu Bekasi\r\n\r\nLuas tanah 153 m\r\nLuas bangunan 233m\r\nLegalitas SHM\r\nKamar tidur  4 \r\nKamar mandi 4\r\nDimensi 9 x 17\r\nListrik 3500 watt\r\nAir Tanah \r\n#MS', '/uploads/1786733285270-490636150.jpeg', '/uploads/1786733285271-627517064.webp', '/uploads/1786733285271-414653148.webp', 4, 4, '2026-08-14 18:48:05', '2026-08-14 18:48:05', 'Hendrik', 'Rawalumbu'),
(22, 29, '081287667923', 'Spesifikasi\r\nLuas Tanah 266 m²\r\nLuas Bangunan 213 m²\r\nKondisi / Tahun Renovasi\r\nBagus / -\r\nKamar Tidur 3\r\nKamar Mandi 2\r\nSertifikat SHM', '/uploads/1786733824398-615065020.webp', '/uploads/1786733824398-736688530.webp', '/uploads/1786733824399-932057835.webp', 3, 2, '2026-08-14 18:57:04', '2026-08-14 18:57:04', 'BPR Intidana', 'Pondok Gede'),
(23, 30, '085183299123', 'Jalan Cemerlang No.2 Bekasi\r\nPondokgede - Kota Bekasi\r\n\r\n*Menerima Cash\r\n*Bisa Dibantu KPR\r\n\r\nRumah siap huni lokasi strategis, dekat dengan fasilitas pendidikan, kesehatan, pusat perbelanjaan, dan akses transportasi.\r\n\r\nSHM\r\nLT 370\r\nLB 430\r\n2 Lantai\r\n5 Kamar Tidur\r\n1 Kamar Pembantu\r\n6 Kamar Mandi\r\nListrik 4400 VA\r\nSumber Air Tanah\r\nHadap Selatan\r\n\r\nFasilitas Sekitar Hunian:\r\n1 Menit ke SDN Jatibening Baru II\r\n5 Menit ke SDN Jatibening Baru I\r\n6 Menit ke SD Negeri Pondok Kelapa 06\r\n6 Menit ke Sd Negeri Pd. Klp. 06 Pagi\r\n8 Menit ke Sekolah Dasar Islam Terpadu Gembira\r\n2 Menit ke Sekolah Menengah Pertama Al-Azhar Syifa Budi Jatibening\r\n8 Menit ke SMP Negeri 20 Kota Bekasi\r\n6 Menit ke SMP ABDI KARYA\r\n6 Menit ke SMA Perguruan Rakyat 2\r\n11 Menit ke TK-SD-SMP-SMA Santo Bellarminus Bekasi\r\n14 Menit ke SMA Negeri 91 Jakarta Timur\r\n17 Menit ke SMA Negeri 5 Bekasi\r\n16 Menit ke SMA Yadika 4\r\n\r\n14 Menit ke Pondok Kelapa Town Square\r\n20 Menit ke Grand Galaxy Park\r\n19 Menit ke Atrium Pondok Gede\r\n5 Menit ke PASAR SUMBER ARTA\r\n10 Menit ke Pasar Mediterania\r\n11 Menit ke Pasar Cikunir\r\n\r\n7 Menit ke Rumah Sakit Umum Dr. Euis\r\n11 Menit ke RS Masmitra Jati Makmur\r\n15 Menit ke Rumah Sakit Cikunir\r\n15 Menit ke RSIA Selasih Medika\r\n4 Menit ke Puskesmas Jatibening Baru\r\n10 Menit ke UPTD Puskesmas Jatibening\r\n13 Menit ke Puskesmas Pondok Kelapa\r\n10 Menit ke Puskesmas Bintara Jaya\r\n15 Menit ke Puskesmas Kecamatan Pondok Gede\r\n\r\n16 Menit ke Gerbang Tol Pondok Gede Timur 1\r\n7 Menit ke Gerbang Tol Pondok Gede Timur 2\r\n5 Menit ke Gerbang Tol Jatibening\r\n5 Menit ke Terminal Sumber Artha', '/uploads/1786851885667-967511155.webp', '/uploads/1786851885667-962874462.webp', '/uploads/1786851885668-694847785.webp', 5, 6, '2026-08-16 03:44:45', '2026-08-16 03:44:45', 'Imel', 'Pondok Gede'),
(24, 31, '085183299123', 'Cluster Eksklusif Ellyana Residence di Jatiasih Bekasi️\r\nDijual 1 unit Rumah Brand New 2 lantai yang berlokasi di Jl. Parpostel No 125 Rt. 01/07, Jatiasih, Kec. Jatiasih, Kota Bekasi, Jawa Barat 17425 dengan Deskripsi sebagai berikut :\r\n- Lokasi super strategis\r\n- Dekat pintu toll jor\r\n✅ Sertifikat Hak Milik\r\n✅ IMB\r\n✅ LT 120 m2 (8x15m)\r\n✅ LB 136 m2\r\n✅ Kamar Timur 4+1\r\n✅ Kamar Mandi 3+1\r\n✅ Ruang Tamu\r\n✅ Ruang makan\r\n✅ Ruang keluarga\r\n✅ Dapur\r\n✅ Carport 2 Mobil\r\n✅ Row 9 m\r\n✅ Jetpump\r\n✅ Bathtub\r\n Ready Harga Rp 1,55 M', '/uploads/1786852736083-231374679.webp', '/uploads/1786852736084-479472630.webp', '/uploads/1786852736084-740960119.webp', 5, 4, '2026-08-16 03:58:56', '2026-08-16 03:58:56', 'Ahmad ', 'Jati Asih'),
(25, 32, '085183299123', 'Perumahan Kodau V Ambarapura\r\n\r\nRumah siap huni lokasi strategis, dekat dengan fasilitas pendidikan, kesehatan, pusat perbelanjaan, dan akses transportasi.\r\n\r\nSHM\r\nLT 78\r\nLB 100\r\n2 Lantai\r\n3 Kamar Tidur\r\n3 Kamar Mandi\r\nListrik 2200 VA\r\nSumber Air Tanah\r\nHadap Selatan\r\n\r\nFasilitas Sekitar Hunian:\r\n1 Menit ke SDN Jatimekar VII\r\n5 Menit ke SDN Jatimekar I\r\n5 Menit ke SMP Negeri 34 Kota Bekasi\r\n5 Menit ke Sekolah Menengah Pertama Tunas Harapan Jaya\r\n6 Menit ke SMA GEMA ISLAMI (ASLI)\r\n6 Menit ke Sekolah Menengah Pertama Wibawa Bangsa\r\n8 Menit ke Sekolah Dasar Negeri Jatirahayu V\r\n8 Menit ke SDN Jatirahayu VI\r\n8 Menit ke SMA Negeri 16 Kota Bekasi\r\n\r\n10 Menit ke Pasar Cikunir\r\n15 Menit ke Pasar Baru Jatiasih\r\n20 Menit ke Grand Galaxy Park\r\n25 Menit ke Lagoon Avenue Mall Bekasi\r\n25 Menit ke Revo Mall\r\n25 Menit ke Mall Grand Metropolitan Bekasi\r\n25 Menit ke Metropolitan Mall Bekasi\r\n\r\n1 Menit ke UPTD PUSKESMAS JATIMEKAR\r\n8 Menit ke RS Mitra Keluarga Pratama Jatiasih\r\n8 Menit ke RS Masmitra Jati Makmur\r\n10 Menit ke Puskesmas Kecamatan Jatiasih\r\n15 Menit ke RS Persada Medika Jati Rahayu\r\n\r\n15 Menit ke Terminal Bayangan Jatibening\r\n15 Menit ke Terminal Kampung Rambutan\r\n20 Menit ke Terminal Sumber Artha\r\n20 Menit ke Stasiun Klender Baru\r\n20 Menit ke Gerbang Tol Bekasi Barat\r\n25 Menit ke Stasiun Cakung\r\n25 Menit ke Stasiun Buaran\r\n30 Menit ke Stasiun Kranji', '/uploads/1786853035749-623468679.webp', '/uploads/1786853035749-366278350.webp', '/uploads/1786853035749-869095815.webp', 3, 3, '2026-08-16 04:03:55', '2026-08-16 04:03:55', 'Alvin', 'Jati Asih'),
(26, 33, '085183299123', 'Jalan H.Dehir\r\n\r\nRumah siap huni lokasi strategis, dekat dengan fasilitas pendidikan, kesehatan, pusat perbelanjaan, dan akses transportasi.\r\n\r\nSHM\r\nLT 323\r\nLB 130\r\n1 Lantai\r\n3 Kamar Tidur\r\n1 Kamar Mandi\r\nListrik 2200 VA\r\nSumber Air Tanah\r\nHadap Utara\r\n\r\nFasilitas Sekitar Hunian:\r\n0 Menit ke SD NEGERI JATILUHUR II\r\n2 Menit ke SD NISRINA\r\n4 Menit ke Sekolah Dasar Islam Terpadu Ar-Ridwan\r\n4 Menit ke SDIT YAPIDH\r\n4 Menit ke SD Hasanah Quranic School\r\n2 Menit ke Sekolah Menengah Pertama Nurul Jihad\r\n4 Menit ke SMPN 39 Bekasi\r\n9 Menit ke SMPN 47 Kota Bekasi\r\n12 Menit ke Sekolah Menengah Atas (SMA) YASFI\r\n12 Menit ke SMA Pangudi Luhur II Servatius\r\n14 Menit ke SMA Negeri 16 Kota Bekasi\r\n10 Menit ke SMA Negeri 11 Bekasi\r\n16 Menit ke SMA NEGERI 21 KOTA BEKASI\r\n\r\n7 Menit ke Kota Cinema Mall (KCM) Jatiasih\r\n26 Menit ke Living World Kota Wisata Cibubur\r\n29 Menit ke Atrium Pondok Gede\r\n25 Menit ke Grand Galaxy Park\r\n15 Menit ke Pasar Kecapi\r\n\r\n14 Menit ke RS Kartika Husada Jatiasih\r\n14 Menit ke Mitra Keluarga Jatiasih\r\n17 Menit ke RS. Karya Medika Bantar Gebang\r\n16 Menit ke Rumah Sakit Jatisampurna\r\n18 Menit ke RSUD BANTARGEBANG KOTA BEKASI\r\n0 Menit ke Puskesmas Jatiluhur\r\n8 Menit ke UPTD Puskesmas JatiMelati\r\n7 Menit ke Puskesmas Jatisari Kota Bekasi\r\n12 Menit ke UPTD Puskesmas Jatimurni\r\n16 Menit ke Puskesmas Jati Warna\r\n\r\n11 Menit ke Gerbang Tol Jati Asih 2\r\n11 Menit ke Gerbang Tol Jatiasih\r\n16 Menit ke Gerbang Tol Jatiwarna 1\r\n17 Menit ke Gerbang Tol Jatiwarna 2\r\n24 Menit ke GT Tol Setu\r\n28 Menit ke Terminal Bayangan Jatibening', '/uploads/1786853300134-375629293.webp', '/uploads/1786853300134-486555071.webp', '/uploads/1786853300134-978303898.webp', 3, 1, '2026-08-16 04:08:20', '2026-08-16 04:08:20', 'Yolanda', 'Jati Asih'),
(27, 34, '085183299123', 'Pondok Pekayon Indah Bekasi\r\n\r\nRumah siap huni lokasi strategis, dekat dengan fasilitas pendidikan, kesehatan, pusat perbelanjaan, dan akses transportasi.\r\n\r\nSHM\r\nLT 60\r\nLB 120\r\n2 Lantai\r\n3 Kamar Tidur\r\n3 Kamar Mandi\r\nSumber Air Tanah\r\nHadap Timur\r\n\r\nFasilitas Sekitar Hunian:k\r\n4 menit ke SMA Negeri 8 Kota Bekasi\r\n8 menit ke SMA Negeri 3 Bekasi\r\n10 menit ke SD Negeri Sepanjang Jaya III\r\n10 menit ke SDN Kayuringin Jaya XXIII\r\n10 menit ke Sekolah Dasar Al Irsyad I\r\n10 menit ke SMP Negeri 7 Kota Bekasi\r\n15 menit ke SMP Islam al-Azhar 6\r\n\r\n5 menit ke Mal Pekayon\r\n7 menit ke Lagoon Avenue Mall Bekasi\r\n10 menit ke Pasar Tradisional Pulo Galaxy\r\n10 menit ke Pasar Bambu Kuning\r\n15 menit ke Pasar Tradisional Pulo Kecil\r\n\r\n6 menit ke RS EMC Pekayon\r\n8 menit ke Puskesmas Pekayon Jaya\r\n9 menit ke Rumah Sakit Anna\r\n10 menit ke Primaya Hospital Bekasi Barat\r\n10 menit ke Rumah Sakit Hermina Galaxy\r\n10 menit ke Puskesmas Perumnas 2\r\n10 menit ke UPTD Puskesmas Jakasetia\r\n10 menit ke UPTD Puskesmas Jaka Mulya\r\n\r\n8 menit ke Gerbang Tol Bekasi Barat 2\r\n8 menit ke Gerbang Tol Bekasi Barat 1\r\n10 menit ke Gerbang Tol Marga Jaya 2\r\n10 menit ke Gerbang Tol Jakasampurna\r\n10 menit ke Gerbang Tol Cikunir 6\r\n10 menit ke Stasiun Bekasi Barat\r\n10 menit ke Stasiun Cikunir 2\r\n10 menit ke Stasiun Bekasi\r\n10 menit ke Stasiun Jati Mulya\r\n10 menit ke Terminal Bekasi Kayuringin', '/uploads/1786853631988-639467018.webp', '/uploads/1786853631988-890088287.webp', '/uploads/1786853631988-93373935.webp', 3, 3, '2026-08-16 04:13:51', '2026-08-16 04:13:51', 'Yolanda', 'Jati Asih'),
(28, 35, '085183299123', 'Dijual Rumah Cantik Semi Furnished di Cluster Kencana Vida Bekasi.\r\n\r\nSpesifikasi:\r\nBangunan 2lt\r\nLuas tanah 109m² (8x13,6m)\r\nLuas bangunan 116m²\r\nSisa lahan blm dibangun 25m²\r\n3+1 Kamar Tidur\r\n2 Kamar mandi \r\nLaundry room\r\nListrik 2.200watt\r\nCarport 1 mbl\r\nAir (PAM/Tanah) WTP \r\nSHM\r\nSemi Furnished:\r\nKitchen set marmer, AC 2 unit, CCTV indoor, smart door lock, security folding lock, Wolden blinds.\r\nAda backyard buat taman/jadi rumah tumbuh\r\nPosisi rumah terbaik, dipojok hook, tidak berhadapan dgn rumah lain dan dekat clubhouse.\r\n\r\nHarga 1,75M\r\n\r\nPoint Selling\r\nBest Location 500m dari Rencana Gerbang Tol Bantargebang (Japek Selatan 2).\r\nSelangkah dari Binus School\r\nFasilitas di dalam Cluster.\r\nTersedia Selter Bus TransPatriot depan cluster menuju LRT dan Summarecon, dan dilengkapi TransJakarta tujuan Cawang Sentral. \r\nCocok utk yg kerja dan beraktivitas bolak-balik Bekasi-Jakarta tiap hari.', '/uploads/1786864254969-34860729.webp', '/uploads/1786864254970-585559075.webp', '/uploads/1786864254971-910777861.webp', 4, 2, '2026-08-16 07:10:54', '2026-08-16 07:10:54', 'Adri', 'Bantar Gebang'),
(29, 36, '085183299123', 'Semi Cluster Taman Harapan Baru (THB) Bekasi\r\nHarga 2,2 M\r\n\r\nLuas tanah 270 m2\r\nLuas bangunan 400 m2\r\nKamar tidur 5\r\nKamar mandi 4\r\nSHM & IMB lengkap\r\n\r\nJalan 2 mobil\r\nAkses sangat mudah \r\nLokasi super strategis\r\nLingkungan aman dan nyaman\r\nKeamanan 24 jam (one gate)', '/uploads/1786864556230-828074060.webp', '/uploads/1786864556230-926950436.webp', '/uploads/1786864556231-576504788.webp', 5, 4, '2026-08-16 07:15:56', '2026-08-16 07:15:56', 'Bella', 'Medan Satria'),
(30, 37, '085183299123', 'IJUAL Rumah Siap Huni - Jatimurni, Pondok Melati, Kota Bekasi\r\n\r\n✨ Spesifikasi:\r\n- LT 300 m² (15 × 20 m)\r\n- LB 180 m²\r\n- 3 Kamar Tidur\r\n- 3 Kamar Mandi\r\n- 1 Lantai\r\n- Garasi 1 Mobil\r\n- Carport 1 Mobil\r\n- Hadap Barat\r\n- Air Tanah\r\n- Listrik 2.200 Watt\r\n- SHM\r\n- Furnished (Peralatan Free)\r\n\r\n Harga: Rp3 Miliar', '/uploads/1786865060319-839234073.webp', '/uploads/1786865060319-555089807.webp', '/uploads/1786865060320-688141812.webp', 3, 3, '2026-08-16 07:24:20', '2026-08-16 07:24:20', 'Expert Consultant Center 3', 'Pondok Melati'),
(31, 38, '085183299123', 'Srimaya Residence Cluster Baswara\r\n\r\nRumah siap huni lokasi strategis, dekat dengan fasilitas pendidikan, kesehatan, pusat perbelanjaan, dan akses transportasi.\r\n\r\nSHM\r\nLT 60\r\nLB 36\r\n1 Lantai\r\n2 Kamar Tidur\r\n1 Kamar Mandi\r\nListrik 1300 VA\r\nSumber Air Tanah\r\nHadap Timur\r\n\r\nFasilitas Sekitar Hunian:\r\n4 Menit ke SDN Ciketing Udik I \r\n8 Menit ke SDN Ciketing Udik II\r\n8 Menit ke SMP Amal Mulia\r\n9 Menit ke SMAN 15 Tambun Selatan\r\n15 Menit ke SMPN 27\r\n\r\n8 Menit ke Pasar Rawa Bango\r\n10 Menit ke Pasar Tradisional Bunderan 2\r\n20 Menit ke Metopolitan Mall Cibubur\r\n35 Menit ke Mall Tambun\r\n\r\n8 Menit ke Puskesmas Ciketing Udik\r\n15 Menit ke Puskesmas Sumur Batu\r\n15 Menit ke RS MH Thamrin\r\n15 Menit ke RS Bina Husada\r\n25 Menit ke RS Prima Sehat\r\n\r\n20 Menit ke Gerbang Tol Setu Selatan\r\n25 Menit ke Terminal Cileungsi\r\n35 Menit ke Gerbang Tol Jatikarya 2\r\n40 Menit ke Terminal Bekasi Kota\r\n40 Menit ke Stasiun Nambo\r\n40 Menit ke Stasiun Pondok Cina', '/uploads/1786867352794-241249086.jpeg', '/uploads/1786867352794-685892717.webp', '/uploads/1786867352795-751495876.webp', 2, 1, '2026-08-16 08:02:32', '2026-08-16 08:02:32', 'Dewi Kartikasari', 'Bantar Gebang'),
(32, 39, '085183299123', 'Dijual rumah spesial ada kolam renang dan luas sekali di Permata Harapan Baru \r\nUk 448m\r\nLb ±700an m\r\nHadap north west\r\n2 lantai\r\nAda kolam renang dan whirlpool\r\nKT 7+1\r\nKm 5+1\r\nBangun sendiri dan selesai tahun 1998\r\npln 5500\r\nAir tanah', '/uploads/1786868121203-434289337.webp', '/uploads/1786868121204-106988276.webp', '/uploads/1786868121206-181393069.webp', 7, 5, '2026-08-16 08:15:21', '2026-08-16 08:15:21', 'Andreas Hartoyo', 'Medan Satria'),
(33, 40, '085183299123', 'Semi Cluster Taman Harapan Baru (THB) Bekasi\r\nHarga 2,2 M\r\n\r\nLuas tanah 270 m2\r\nLuas bangunan 400 m2\r\nKamar tidur 5\r\nKamar mandi 4\r\nSHM & IMB lengkap\r\n\r\nJalan 2 mobil\r\nAkses sangat mudah \r\nLokasi super strategis\r\nLingkungan aman dan nyaman\r\nKeamanan 24 jam (one gate)', '/uploads/1786868708038-19466781.webp', '/uploads/1786868708038-464576407.webp', '/uploads/1786868708039-722398376.webp', 5, 4, '2026-08-16 08:25:08', '2026-08-16 08:25:08', 'Bella', 'Medan Satria'),
(34, 41, '085183299123', 'Harga Property : 1 Millyar Rupiah (nego)\r\nSertifikat : Hak Milik\r\nLuas Tanah : 85M2\r\nLuas Bangunan : 53M2\r\nKamar Tidur : 2 unit\r\nKamar Mandi : 1 unit\r\nJumlah Lantai : 1 lantai\r\nCarport : 1\r\nListrik : 2200 watt\r\nAir : PAM\r\nFasilitas Lingkungan : Club House, Paguyuban, dekat dengan rumah sakit, dekat Binus School', '/uploads/1786869223000-622979440.webp', '/uploads/1786869223001-182317142.webp', '/uploads/1786869223001-812604711.webp', 2, 1, '2026-08-16 08:33:43', '2026-08-16 08:33:43', 'Ellys Era Sky Property', 'Bantar Gebang'),
(35, 42, '085183299123', 'Perumahan Taman Galaxy Indah Blok M5/15\r\nBekasi Selatan - Kota Bekasi\r\n\r\n*Menerima Cash\r\n*Bisa Dibantu KPR\r\n\r\nRumah siap huni lokasi strategis, dekat dengan fasilitas pendidikan, kesehatan, pusat perbelanjaan, dan akses transportasi.\r\n\r\nSHGB\r\nLT 158\r\nLB 250\r\n2 Lantai\r\n4 Kamar Tidur\r\n1 Kamar Pembantu\r\n4 Kamar Mandi\r\nListrik 5500 VA\r\nSumber Air Tanah\r\nHadap Selatan\r\n\r\nFasilitas Sekitar Hunian:\r\n5 Menit ke SDN 7 Pekayon \r\n5 Menit ke SDN 10 Pekayon\r\n5 Menit ke SMPN 12 Kota Bekasi\r\n5 Menit ke SMP Islam Darussalam\r\n10 Menit ke SMAN 8 Bekasi\r\n\r\n5 Menit ke Pasar Pulo Galaxy\r\n10 Menit ke Lagoon Avenue Mall Bekasi\r\n10 Menit ke Grand Galaxy Park\r\n15 Menit ke Metropolitan Mall\r\n20 Menit ke Pasar Kranji Baru\r\n\r\n5 Menit ke Puskesmas Pekayon Jaya\r\n10 Menit ke RS Hermina Galaxy\r\n10 Menit ke RS EMC Pekayon\r\n10 Menit ke Primaya Bekasi Barat\r\n15 Menit ke Puskesmas Jakasetia\r\n\r\n10 Menit ke Halte Bus Trans Galaxy\r\n10 Menit ke Gerbang Tol Bekasi Barat 2\r\n15 Menit ke Gerbang Tol Bekasi Barat 1\r\n15 Menit ke Gerbang Tol Cikunir 6\r\n25 Menit ke Stasiun Bekasi\r\n', '/uploads/1786869786148-820717594.webp', '/uploads/1786869786148-654199081.webp', '/uploads/1786869786148-223404801.webp', 4, 4, '2026-08-16 08:43:06', '2026-08-16 08:43:06', 'Maulana', 'Bekasi Selatan'),
(36, 43, '085183299123', 'Luas Tanah 87 m²\r\nLuas Bangunan 90 m²\r\nSertifikat SHM\r\nJumlah Lantai 1', '/uploads/1786870433615-992315337.webp', '/uploads/1786870433615-778795600.webp', '/uploads/1786870433615-824855198.webp', 2, 1, '2026-08-16 08:53:53', '2026-08-16 08:53:53', 'Bank Syariah Indonesia', 'Pondokmelati'),
(37, 44, '085183299123', 'Jalan Raya Pulo Ribung No.9 Bekasi\r\nBekasi Selatan - Kota Bekasi\r\n\r\n*Menerima Cash\r\n*Bisa Dibantu KPR\r\n\r\nRumah siap huni lokasi strategis, dekat dengan fasilitas pendidikan, kesehatan, pusat perbelanjaan, dan akses transportasi.\r\n\r\nSHM\r\nLT 280\r\nLB 600\r\n3 Lantai\r\n6 Kamar Tidur\r\n3 Kamar Mandi\r\nListrik 3500 VA\r\nSumber Air Tanah\r\nHadap Timur\r\n\r\nFasilitas Sekitar Hunian:\r\n1 Menit ke Al-Anshar Islamic School\r\n1 Menit ke SD Harapan Mulia\r\n2 Menit ke TK, SD & SMP Driewanti\r\n4 Menit ke SD Batutis Al-ilmi\r\n4 Menit ke SDIT Al-Hambra\r\n2 Menit ke Sekolah Menengah Pertama Pax Ecclesia\r\n2 Menit ke Masjid Al Ikhlas SMP Negeri 12 Bekasi\r\n2 Menit ke SMP Negeri 12 Kota Bekasi\r\n3 Menit ke SMP Al-Mizan\r\n12 Menit ke SMPN 29 Bekasi\r\n1 Menit ke SMA Negeri 3 Bekasi\r\n2 Menit ke SMA Pax Patriae\r\n6 Menit ke SMA Negeri 8 Kota Bekasi\r\n4 Menit ke SMA Islam PB Soedirman Bekasi\r\n\r\n6 Menit ke Mall Pekayonn\r\n3 Menit ke Grand Galaxy Park\r\n4 Menit ke Pasar Pagi Pekayon\r\n5 Menit ke Fresh Market Grand Galaxy City\r\n15 Menit ke Pasar Bambu Kuning\r\n\r\n5 Menit ke Hermina Hospital Galaxy\r\n4 Menit ke RS EMC Pekayon\r\n5 Menit ke RS ANNA PEKAYON\r\n11 Menit ke Rumah Sakit Cikunir\r\n1 Menit ke Puskesmas Pekayon Jaya\r\n8 Menit ke UPTD Puskesmas Jakasetia\r\n9 Menit ke UPTD Puskesmas Jaka Mulya\r\n14 Menit ke UPTD Puskesmas Jatibening\r\n14 Menit ke Puskesmas Bojong Rawalumbu\r\n\r\n16 Menit ke Gerbang Tol Cikunir 4\r\n15 Menit ke Gerbang Tol Cikunir 2\r\n10 Menit ke Gerbang Tol Bekasi Barat 2\r\n14 Menit ke Terminal Bekasi Kayuringin', '/uploads/1786870692225-908449052.webp', '/uploads/1786870692225-681105564.webp', '/uploads/1786870692225-897372560.webp', 6, 3, '2026-08-16 08:58:12', '2026-08-16 08:58:12', 'Timo Hartono', 'Bekasi Selatan'),
(38, 45, '085183299123', 'Harga sangat murah.\r\nDijual melalui lelang.\r\nHarga belum termasuk Biaya dan Pajak.\r\nLuas tanah dan status Sertifikat adalah benar.\r\nSpek lainnya estimasi, bisa berbeda dgn aslinya (tidak bisa survey dalam).\r\nDokumen legalitas lengkap dan clean.\r\nKami bantu mulai lelang sampai baliknama sertifkat.\r\nTim khusus/Pengacara berpengalaman untuk penguasaan aset lelang.\r\nBuyer tinggal terima kunci.\r\nERA STAR berpengalaman 13 tahun membantu para Buyer beli Properti Agunan Bank.\r\n\r\nHubungi Agen ERA STAR Rawamangun.\r\nYulia & Verre Cou.', '/uploads/1786871128446-212401329.jpeg', '/uploads/1786871128446-522291820.webp', '/uploads/1786871128446-390108682.webp', 2, 1, '2026-08-16 09:05:28', '2026-08-16 09:05:28', 'Yuliana', 'Bantar Gebang'),
(39, 46, '085183299123', 'Kemang Pratama 2\r\n\r\nA spacious home\r\nperfect for big families & comfort living \r\n\r\n LT 270 m²\r\n LB 350 m²\r\n 18 m × 15 m\r\n 6 + 1 Kamar Tidur\r\n 4 + 1 Kamar Mandi\r\n Ruang Tamu\r\n‍‍‍ Ruang Keluarga\r\n Ruang Kerja\r\n:zap: Listrik 5500 + 3500 Watt\r\n Hadap Selatan\r\n SHM (2 Sertifikat)', '/uploads/1786871620782-150918097.webp', '/uploads/1786871620782-79188862.webp', '/uploads/1786871620782-958260629.webp', 6, 7, '2026-08-16 09:13:40', '2026-08-16 09:13:40', 'Yanthi Yuliana', 'Bekasi Barat'),
(40, 47, '085183299123', 'Dijual Rumah siap huni \r\nDi Taman Galaxy Indah\r\nBekasi Selatan\r\n\r\nDengan spesifikasi \r\nLuas tanah : 234m²\r\nLuas bangunan : 225 m²\r\nKamar tidur : 5\r\nKamar mandi : 2\r\nJumlah lantai : 2\r\nCarport :  1\r\nListrik :  4400 Watt\r\nAir : Jetpump\r\nSertifikat SHM\r\nIMB : Ada \r\nHadap : timur\r\n\r\nPoint selling :\r\nBebas banjir\r\nDekat dengan RS.hermina galaxy\r\nDekat dengan RS.EMC \r\nDekat dengan pasar fres market \r\nDekat dengan pintu tol becakayu', '/uploads/1786871964306-621462761.webp', '/uploads/1786871964306-989685367.webp', '/uploads/1786871964306-649182411.webp', 5, 2, '2026-08-16 09:19:24', '2026-08-16 09:19:24', 'Nelis Asia One Properti', 'Bekasi Selatan'),
(41, 48, '085183299123', 'Rumah Dijual Bekasi Rumah 2 Lantai \r\nSemi Furnish \r\nGarasi 4 mobil \r\nHadap Barat\r\nTaman depan, belakang & Kolam Ikan\r\n LT = 432 M2\r\nLB = 500 M2 \r\nDimensi Ukuran = 24 M2 X 18 M2\r\nKT =  5+1  KM =4 +1 \r\nListrik 5500 Watt\r\n\r\nFasilitas Perumahan : \r\nSport Club\r\nDriving Range\r\nSekolah Al- Azhar, Marsudirini, Sekolah Victory Plus (IB Word Internasional) \r\nRS Elisabeth\r\nGS Supermarket\r\nPakuan Mall, Metropolitan Mall, Revo Town, dll\r\nFeeder Bus\r\nDekat Pintu Tol & LRT', '/uploads/1786872308204-960230432.webp', '/uploads/1786872308204-820533336.webp', '/uploads/1786872308204-946187357.webp', 6, 5, '2026-08-16 09:25:08', '2026-08-16 09:25:08', 'MARIA', 'Bekasi Barat'),
(42, 49, '085183299123', 'Akses :\r\n- 7,6km RS EMC Pekayon\r\n- 3,2km SMKN 3 Kota Bekasi\r\n- 5,3km TIP TOP Tambun\r\n- 4,7km Pasar Bantar Gebang\r\n- 7,1km Living World Grand Wisata Bekasi\r\n- 6,6km Rumah Sakit Hermina Grand Wisata\r\n- 7,1km Living World Grand Wisata Bekasi\r\n- 8km dari Tol Tambun Grand Wisata \r\n- 5,8km dari Tol Bekasi Timur 2\r\nHubungi Nunung', '/uploads/1786872641852-779946077.webp', '/uploads/1786872641853-936814529.webp', '/uploads/1786872641853-532490805.webp', 4, 3, '2026-08-16 09:30:41', '2026-08-16 09:30:41', 'Nunung', 'Mustikajaya'),
(43, 50, '085183299123', 'Rumah dalam cluster terpavorite,lingkungan aman dan asri lengkap dengan club house dan masjid dalam cluster,akses tol langsung, dekat mall dan prasarana lainnya,keamanan 24 jam', '/uploads/1786872870529-53513815.jpeg', '/uploads/1786872870530-811172758.webp', '/uploads/1786872870530-569244651.webp', 5, 4, '2026-08-16 09:34:30', '2026-08-16 09:34:30', 'Dewipuspa', 'Mustikajaya'),
(44, 51, '085183299123', 'Rumah Strategis Harapan Indah Regency Bekasi Barat | Dekat Jakarta & Tol\r\nLokasi strategis di kawasan Harapan Indah, berbatasan langsung dengan Jakarta Timur sehingga mobilitas menuju Jakarta dan Bekasi sangat mudah.\r\nAkses mudah ke berbagai ruas tol, seperti Tol Jakarta-Cikampek, JORR, dan akses menuju Tol Cibitung-Cilincing, memudahkan perjalanan ke berbagai wilayah Jabodetabek.\r\nDekat pusat perbelanjaan, seperti Summarecon Mall Bekasi, serta berbagai pusat kuliner, supermarket, dan retail di kawasan Harapan Indah.\r\nDikelilingi sekolah unggulan, seperti Al Azhar, BPK Penabur, dan Global Mandiri, sehingga ideal untuk keluarga dengan anak usia sekolah.\r\nDekat fasilitas kesehatan, seperti RS Ananda dan Eka Hospital Harapan Indah, sehingga kebutuhan layanan kesehatan mudah dijangkau.\r\nLingkungan nyaman, hijau, dan tertata, cocok untuk keluarga yang menginginkan suasana hunian yang tenang.', '/uploads/1786873201251-904467734.webp', '/uploads/1786873201251-174341363.webp', '/uploads/1786873201252-444458691.webp', 3, 2, '2026-08-16 09:40:01', '2026-08-16 09:40:01', 'Nathalia Susanti', 'Bekasi Barat'),
(45, 52, '085183299123', 'Rumah 2 Lantai 8Jt all in, Free Semua Biaya, Sertifikat SHM, Dekat Tol, LRT dan Stasiun..\r\nTahap Akhir 12 Unit lagi.\r\n\r\nLokasi Super Strategis \r\n8 Menit Stasiun \r\n10 Menit Tol & LRT \r\n\r\nPromo\r\n- Free BPHTB \r\n- Free AJB & Balik Nama\r\n- Free Biaya KPR\r\n- Free SHM\r\n- Subsidi DP\r\n\r\nInclude Free: \r\n- Canopy \r\n- Pintu Baja \r\n- Smart Door Lock \r\n- Toren \r\n- 2 Mesin Pompa Semi JetPump (atas dan bawah)\r\n- AC\r\n\r\nFasilitas: \r\n- Gerbang Mewah One Gate System Dengan Akses Kartu \r\n- Security dan CCTV 24 Jam \r\n- Listrik Underground \r\n- Waterpond System \r\n- Children Playground\r\n- Communal Gazebo\r\n- Parking Space \r\n- Pedestrian dan Ruang Hijau\r\n\r\nHunian Modern Tropis Siap Huni di Bekasi!\r\nNikmati hidup lebih tenang di *Gracia Ayu Amerta*, rumah 2 lantai bergaya tropis modern dengan desain elegan dan pencahayaan alami \r\n\r\nLokasi Strategis!\r\nHanya *8 menit* ke Stasiun KRL Bekasi Timur, *10 Menit* Ke Gerbang tol bekasi timur & LRT Jatimulya.\r\nDekat sekolah, pusat belanja, dan akses jalan utama \r\n\r\nRumah impian keluarga modern dengan suasana sejuk, lingkungan rapi, dan kenyamanan maksimal kini bisa langsung Anda miliki!\r\n\r\nYuk, kunjungi show unitnya Sekarang!\r\nStok terbatas - jangan sampai kehabisan!', '/uploads/1786873611122-544812064.webp', '/uploads/1786873611122-581539086.webp', '/uploads/1786873611122-633070319.webp', 2, 2, '2026-08-16 09:46:51', '2026-08-16 09:46:51', 'Budhi Prayitno ', 'Bekasi Timur,'),
(46, 53, '085183299123', 'BU di jual rumah bagus 2 lantai di bekasi jaya\r\n\r\nHadap selatan\r\nLT 140\r\nLB 200\r\nKamar tidur 5\r\nKamar mandi 3\r\nGarasi 2 mobil\r\nListrik token 4400\r\nAir PAM + air tanah\r\n\r\nHarga jual 1,7 M turun harga menjadi 1,5 M ', '/uploads/1786874263172-276580505.webp', '/uploads/1786874263172-811867257.webp', '/uploads/1786874263173-854301134.webp', 5, 3, '2026-08-16 09:57:43', '2026-08-16 09:57:43', 'Imelda Setiawan', 'Bekasi Timur'),
(47, 54, '085183299123', 'L.Tanah : 226 meter\r\nL. Bangunan : 118\r\nLantai : 2\r\nListrik: 4.400 watt\r\nKamar : 4+1\r\nKamar mandi: 2+1\r\nCarport : 2\r\nHadap : Timur Tenggara & Timur Laut\r\nSertifikat : SHM\r\n\r\nKondisi Rumah:\r\n  1.⁠ ⁠Baru selesai bangun \r\n 2.⁠ ⁠Luas dan Megah\r\n   3.Free Solar Panel \r\n 4.⁠ ⁠Tersedia Water Heater untuk setiap instalasi air \r\n 5.⁠ ⁠Didesain estetik n nyaman untuk tinggal sendiri tadinya\r\n 6.⁠ ⁠Adem n jauh dari bising\r\n 7.⁠ ⁠Tidak cocok untuk yang suka ngumpul bareng Ibu komplek bergosip, gibah & flexing.\r\n       Karena warganya aktif n sibuk dengan kehidupan masing2.\r\n 8.⁠ ⁠Lingkungan aman n bersih\r\n 9.⁠ ⁠Hook timur - Tenggara \r\n  10.⁠ ⁠Free Ac 2 unit\r\n   11.⁠ ⁠Free kitchen set\r\n\r\nFasilitas Cluster :\r\n 1.⁠ ⁠Children Playground \r\n 2.⁠ ⁠Water Pond pengendali banjir \r\n 3.⁠ ⁠Row jalan lebar \r\n 4.⁠ ⁠Lapangan bulutangkis \r\n 5.⁠ ⁠Balai warga\r\n 6.⁠ ⁠Keamanan 24 jam dengan Cctv\r\n \r\n\r\nKeunggulan:\r\n 1.⁠ ⁠2 KM dari Toll Bekasi dan LRT Jatimulya\r\n 2.⁠ ⁠15 menit dari stasiun Bekasi timur \r\n 3.⁠ ⁠Bebas banjir \r\n 4.⁠ ⁠Bangunan kokoh dengan desain estetik \r\n 5.⁠ ⁠Posisi Hook\r\n', '/uploads/1786874559882-663202493.webp', '/uploads/1786874559882-441063883.webp', '/uploads/1786874559882-172595734.webp', 4, 2, '2026-08-16 10:02:39', '2026-08-16 10:02:39', 'Christian Rasandy ', 'Mustikajaya'),
(48, 55, '085183299123', 'Grand kota bintang *CLUSTER PREMIUM MODERN KLASIK - BEKASI BARAT*  \r\n*KOTA MANDIRI SUPERBLOCK | ONE STOP LIVING | SAMPING TOL*  Kota Bintang\r\nHub Giatta\r\nWA 0812xxxxxxxx\r\n\r\nWujudkan rumah impian di kawasan lengkap & bebas banjir. UNIT TERBATAS!\r\n\r\nSpeck\r\nL Tanah 90 \r\nL Bangunan 110 \r\nK Tidur 3 +1\r\nK Mandi 3\r\nCarport 2 Mobil \r\n Listrik 2200 \r\nBahanBata Merah \r\n Smart Door Lock  \r\nOne Gate | Security & CCTV 24 Jam \r\nKeunggulan Club House + Kolam Renang\r\n\r\n*LOKASI LENGKAP:*  \r\nSamping Tol  Kalimalang | Kuliner 24 Jam \r\n XX1, KFC, Starbucks  \r\nDekat Sekolah Al Azhar, Global Prestasi \r\n RS Siloam \r\nMall MM, Pakuwon  \r\nDekat Galaxy, Pekayon, Bintara \r\n6km Bandara Halim\r\n5 menit ke pintu tol becak kayu\r\n7 mebit pintu tol jati bening\r\n5 menit ke stasion LRT Cikunir\r\n8 menit ke Primaya hospital\r\n\r\n*Harga Cash: 2,587 M | KPR: 2,877 M*  ', '/uploads/1786875011212-647851464.webp', '/uploads/1786875011212-875074317.webp', '/uploads/1786875011212-538302040.webp', 3, 3, '2026-08-16 10:10:11', '2026-08-16 10:10:11', 'Giatta Ketaren', 'Bekasi Barat'),
(49, 56, '085183299123', '-	Lokasi strategis di Mustikajaya, Bekasi, tepat di jalan utama dan mudah diakses dari berbagai kawasan di Bekasi.\r\n-	Akses mudah ke Tol Grand Wisata, Tol Tambun, dan Tol Bekasi Timur, sehingga mobilitas menuju Jakarta maupun kawasan industri menjadi lebih praktis.\r\n-	Dekat Stasiun Tambun dan Stasiun Bekasi Timur, memberikan pilihan transportasi umum yang nyaman.\r\n-	Dekat pusat perbelanjaan dan area komersial, seperti pasar modern, supermarket, restoran, dan pusat kuliner di kawasan Mustikajaya.\r\n-	Dekat rumah sakit dan fasilitas kesehatan, sehingga kebutuhan medis mudah dijangkau.\r\n-	Dekat sekolah negeri maupun swasta, cocok untuk keluarga dengan anak usia sekolah.\r\n-	Lingkungan eksklusif dan nyaman, dengan konsep townhouse serta jumlah unit yang terbatas sehingga lebih privat.', '/uploads/1786875339472-591752171.jpeg', '/uploads/1786875339472-637291162.webp', '/uploads/1786875339472-73242086.webp', 4, 4, '2026-08-16 10:15:39', '2026-08-16 10:15:39', 'Tiwi', 'Mustikajaya');
INSERT INTO `house_details` (`id`, `house_id`, `contact`, `description`, `image_1`, `image_2`, `image_3`, `beds`, `baths`, `createdAt`, `updatedAt`, `contact_name`, `location`) VALUES
(50, 57, '085183299123', 'Citra Gran Cibubur Cluster Nusa Dua\r\n\r\nRumah siap huni lokasi strategis, dekat dengan fasilitas pendidikan, kesehatan, pusat perbelanjaan, dan akses transportasi.\r\n\r\nSHM\r\nLT 270\r\nLB 350\r\n2 Lantai\r\n8 Kamar Tidur\r\n6 Kamar Mandi\r\nListrik 2200 VA\r\nSumber Air Tanah\r\nHadap Selatan\r\n\r\nFasilitas Sekitar Hunian:\r\n7 Menit ke SDN Jatikarya I\r\n10 Menit ke SDN Jatikarya III\r\n10 Menit ke SD Sekolah Quantum Inti Indonesia\r\n10 Menit ke SMP Negeri 1 Sukajaya\r\n15 Menit ke SMA Negeri 7 Bekasi\r\n15 Menit ke SMPN 15 Kota Bekasi\r\n\r\n10 Menit ke Ciputra Cibubur\r\n10 Menit ke Mall Citra Grand\r\n10 Menit ke Plasa Cibubur\r\n15 Menit ke Pasar Kranggan\r\n\r\n7 Menit ke Puskesmas Jatikarya\r\n10 Menit ke Rumah Sakit Permata Cibubur\r\n15 Menit ke RS Mitra Keluarga Cibubur\r\n20 Menit ke UPTD Puskesmas Harjamukti\r\n25 Menit ke UPTD Puskesmas Sukatani Depok\r\n25 Menit ke Puskesmas Gunung Putri\r\n\r\n15 Menit ke Stasiun Harjamukti\r\n15 Menit ke Terminal Leuwinanggung\r\n20 Menit ke Terminal Cileungsi\r\n20 Menit ke Stasiun Ciracas\r\n20 Menit ke Stasiun Kampung Rambutan\r\n25 Menit ke Stasiun Nambo\r\n25 Menit ke Stasiun Pondok Cina\r\n35 Menit ke Gerbang Tol Tambun', '/uploads/1786875688411-92436272.webp', '/uploads/1786875688411-381621408.webp', '/uploads/1786875688411-886552761.webp', 8, 6, '2026-08-16 10:21:28', '2026-08-16 10:21:28', 'PASHOUSES ID', 'Jatisampurna'),
(51, 58, '085183299123', 'Luas Tanah 460 m²\r\nLuas Bangunan 673 m²\r\nKamar Tidur 1\r\nKamar Mandi 1\r\nSertifikat HGB', '/uploads/1786875922885-485764265.webp', '/uploads/1786875922885-43011377.webp', '/uploads/1786875922886-544167159.webp', 1, 1, '2026-08-16 10:25:22', '2026-08-16 10:25:22', 'Permata Bank', 'Jatisampurna'),
(52, 59, '085183299123', 'Dijual Rumah mewah Terawat dalam cluster Citragrand Alternatif Cibubur,bebas banjir.\r\nSpesifikasi:\r\nLuas tanah : 160\r\nLuas bangunan : 210\r\nKamar tidur : 4+1\r\nKamar mandi : 3+1\r\nJumlah lantai : 2\r\nOrientasi/hadap : Timur\r\n\r\nAir : PAM dan Jetpump\r\nListrik : 5500 watt\r\nStatus kepemilikan : SHM\r\n\r\nFitur tambahan ( jika furnish dan semi furnish): ac 3, water heater, sanyo 2 mesin ditinggal\r\n*Bangunan baru tahun 2022', '/uploads/1786876110852-606514228.webp', '/uploads/1786876110853-162019399.webp', '/uploads/1786876110853-231098716.webp', 5, 4, '2026-08-16 10:28:30', '2026-08-16 10:28:30', 'Diah Mansyur ', 'Jatisampurna');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullName` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) DEFAULT 'user',
  `profilePicture` varchar(255) DEFAULT 'user.jpg',
  `isActive` tinyint(1) DEFAULT 1,
  `activationCode` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fullName`, `username`, `email`, `password`, `role`, `profilePicture`, `isActive`, `activationCode`, `createdAt`, `updatedAt`) VALUES
(1, 'Admin', 'admin', 'admin@gmail.com', 'd5c30ffa6cc422e1a1ba915dd5bf3e364f6a971dd362c90bd1d6b106de466c97a15dc548252102820ddbe87a5371f64dfbfd09916ec658584e4e198d61609c75', 'admin', '/uploads/1784414028205-549787881.jpg', 1, '97c3a68e7adc087bc8ccb6e50fef41376898c013b01d4c142b0412e17597ad9a85347b6e9e44505adc0376787ca57fd2849cac7b118565ed68023a2279e9658d', '2026-04-04 18:45:07', '2026-08-07 09:49:19'),
(2, 'Dewa Khresna', 'dewakhresna', 'dewakhresna04@gmail.com', '2e3c457f2a4dffd29544fd72354375cacf1a70535488866e5f3d1d7bec091742cb743cde3908d0828d702842ad1452544df21628634e1efb8c3c4972b4710ac0', 'user', 'user.jpg', 1, '8426775e547a172867729f5a0ceabe3df7370b0c446dc9cf20919ab8ecdfb33a5094637ef374562f0cc7de32a15660114807d0cbf2e373968cdc1ddf64776a1c', '2026-04-19 17:29:38', '2026-08-11 18:40:58'),
(3, 'tes1', 'tes123', 'tes@gmail.com', 'dff9e6ea7da1c66b86cfbe709268f6411b40abd06ef24f70c919e36e736a3264484bcf8a746b98d0da0e22f93ef7ba56e91b935dcdd2df93a496f8023db76f4a', 'user', 'user.jpg', 1, '2cb26372707eb1b3599d1c42ce0dca053a5ad6379c10d21d69b3f7111f7a4f9cae255ee849e3882a7e1cbedc31605541f8396c67f4b41960a814678f82dbcf30', '2026-04-24 15:43:58', '2026-04-24 15:43:58');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `favorites`
--
ALTER TABLE `favorites`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_user_house` (`user_id`,`house_id`),
  ADD KEY `house_id` (`house_id`);

--
-- Indexes for table `houses`
--
ALTER TABLE `houses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `house_details`
--
ALTER TABLE `house_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `house_id` (`house_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `username_20` (`username`),
  ADD UNIQUE KEY `email_20` (`email`),
  ADD UNIQUE KEY `username_21` (`username`),
  ADD UNIQUE KEY `email_21` (`email`),
  ADD UNIQUE KEY `username_22` (`username`),
  ADD UNIQUE KEY `email_22` (`email`),
  ADD UNIQUE KEY `username_23` (`username`),
  ADD UNIQUE KEY `email_23` (`email`),
  ADD UNIQUE KEY `username_24` (`username`),
  ADD UNIQUE KEY `email_24` (`email`),
  ADD UNIQUE KEY `username_25` (`username`),
  ADD UNIQUE KEY `email_25` (`email`),
  ADD UNIQUE KEY `username_26` (`username`),
  ADD UNIQUE KEY `email_26` (`email`),
  ADD UNIQUE KEY `username_27` (`username`),
  ADD UNIQUE KEY `email_27` (`email`),
  ADD UNIQUE KEY `username_28` (`username`),
  ADD UNIQUE KEY `email_28` (`email`),
  ADD UNIQUE KEY `username_29` (`username`),
  ADD UNIQUE KEY `email_29` (`email`),
  ADD UNIQUE KEY `username_30` (`username`),
  ADD UNIQUE KEY `email_30` (`email`),
  ADD UNIQUE KEY `username_31` (`username`),
  ADD UNIQUE KEY `email_31` (`email`),
  ADD UNIQUE KEY `username_32` (`username`),
  ADD UNIQUE KEY `username_2` (`username`),
  ADD UNIQUE KEY `email_2` (`email`),
  ADD UNIQUE KEY `username_3` (`username`),
  ADD UNIQUE KEY `email_3` (`email`),
  ADD UNIQUE KEY `username_4` (`username`),
  ADD UNIQUE KEY `email_4` (`email`),
  ADD UNIQUE KEY `username_5` (`username`),
  ADD UNIQUE KEY `email_5` (`email`),
  ADD UNIQUE KEY `username_6` (`username`),
  ADD UNIQUE KEY `email_6` (`email`),
  ADD UNIQUE KEY `username_7` (`username`),
  ADD UNIQUE KEY `email_7` (`email`),
  ADD UNIQUE KEY `username_8` (`username`),
  ADD UNIQUE KEY `email_8` (`email`),
  ADD UNIQUE KEY `username_9` (`username`),
  ADD UNIQUE KEY `email_9` (`email`),
  ADD UNIQUE KEY `username_10` (`username`),
  ADD UNIQUE KEY `email_10` (`email`),
  ADD UNIQUE KEY `username_11` (`username`),
  ADD UNIQUE KEY `email_11` (`email`),
  ADD UNIQUE KEY `username_12` (`username`),
  ADD UNIQUE KEY `email_12` (`email`),
  ADD UNIQUE KEY `username_13` (`username`),
  ADD UNIQUE KEY `email_13` (`email`),
  ADD UNIQUE KEY `username_14` (`username`),
  ADD UNIQUE KEY `email_14` (`email`),
  ADD UNIQUE KEY `username_15` (`username`),
  ADD UNIQUE KEY `email_15` (`email`),
  ADD UNIQUE KEY `username_16` (`username`),
  ADD UNIQUE KEY `email_16` (`email`),
  ADD UNIQUE KEY `username_17` (`username`),
  ADD UNIQUE KEY `email_17` (`email`),
  ADD UNIQUE KEY `username_18` (`username`),
  ADD UNIQUE KEY `email_18` (`email`),
  ADD UNIQUE KEY `username_19` (`username`),
  ADD UNIQUE KEY `email_19` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `favorites`
--
ALTER TABLE `favorites`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT for table `houses`
--
ALTER TABLE `houses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT for table `house_details`
--
ALTER TABLE `house_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `favorites`
--
ALTER TABLE `favorites`
  ADD CONSTRAINT `favorites_ibfk_231` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `favorites_ibfk_232` FOREIGN KEY (`house_id`) REFERENCES `houses` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `house_details`
--
ALTER TABLE `house_details`
  ADD CONSTRAINT `house_details_ibfk_1` FOREIGN KEY (`house_id`) REFERENCES `houses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
