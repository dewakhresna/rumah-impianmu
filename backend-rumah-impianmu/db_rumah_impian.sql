-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 08, 2026 at 07:20 PM
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
(21, 'Soultan Island Summarecon Bekasi', 9450000000, 1, 5, 323);

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
  `contact_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `house_details`
--

INSERT INTO `house_details` (`id`, `house_id`, `contact`, `description`, `image_1`, `image_2`, `image_3`, `beds`, `baths`, `createdAt`, `updatedAt`, `contact_name`) VALUES
(2, 2, '082295594123', 'Rumah di Harapan Indah.\n\nDapatkan rumah 2 lantai yang asri ini,  dijual krn ownernya udh menetap di jawa. Rumah ini berada di area Dekat Kawasan Bisnis , mall, perbankan,sekolah swasta dan internasional, terminal bus dan damri, pasar modern serta menawarkan lingkungan fasilitas yang lengkap, cocok untuk Anda yang menginginkan hunian aman.\n\nSpesifikasi Utama Properti:\n\n  - Kamar Tidur: 4\n  - Kamar Mandi: 5\n  - Sertifikat: SHM - Sertifikat Hak Milik\nair pam\nlistrik 5500\nfull renov\nFitur unggulan:\n\n  - Lokasi di Pusat Kota.\n  - Dekat Kawasan Bisnis & Industri.\n  - Lingkungan Tenang dan Damai.\n  - Cocok Untuk Dijual Kembali.\n  - Cocok Untuk Investasi.\n  - Properti Bisa Nego.\n  - Lokasi Strategis.\n  - Tanpa Perantara.\n  - Bisa KPR.\n  - Properti Mewah.\n  - Dijual Cepat Butuh Uang.\n\nBerlokasi di Harapan Indah, rumah ini memberikan kemudahan akses ke berbagai fasilitas menarik.\n\nDengan harga Rp. 3.900.000.xxx, anda bisa memiliki hunian eksklusif yang sudah siap huni dan bersertifikat SHM - Sertifikat Hak Milik. Jangan lewatkan kesempatan untuk menikmati pengalaman tinggal di kawasan Harapan Indah yang nyaman ini!', '/uploads/1785288325227-433415507.webp', '/uploads/1785288330819-135231837.webp', '/uploads/1785288335874-578852516.webp', 4, 5, '2026-04-04 16:30:49', '2026-07-29 01:27:48', 'budi'),
(3, 3, '081234567898', 'kami menawarkan rumah second siap huni\ndengan dinding bata merah dan sudah cakar ayam siap untuk dibikin 2lantai\n\nlokasi strategis di payangan permai jatisari jati asih\n- 4km dari exit tol jati karya\n- 4km dari exit tol nagrak (kota wisata)\n- 5km dari exit tol jati warna\n- 8km dari exit tol cibubur\n- 8km dari exit tol jatiasih\n\njalan lebar dan bebas banjir\nKPR BISA DIBANTU SAMPAI SELESAI', '/uploads/1785289760771-206983320.webp', '/uploads/1785289770798-478076894.webp', '/uploads/1785289774225-242858462.webp', 3, 2, '2026-04-05 11:42:58', '2026-07-29 01:49:56', 'Elly Sefa Widyarini'),
(4, 4, '081225888855', 'Jual Rumah Murah Minimalis Modern Kondisi Sudah Renovasi, Pondok Gede, Bekasi, 028\n\nlebar 10\nLt 120m \nLb 100m\nKt 2\nKm 2\nCarport 1\n\nAda kursi + meja ruang tamu\nsudah ada westafel\n\nSertifikat shm\nBebas Banjir\nLokasi Strategis\nDekat dengan tol\n \nHarga 980 Juta NEGO\nMinat Hubungi:\nNancy, 0812xxxxxxxx', '/uploads/1785289537502-962788135.jpeg', '/uploads/1785289542491-179276503.webp', '/uploads/1785289546187-910912895.webp', 2, 2, '2026-04-05 11:55:54', '2026-07-29 01:45:48', 'andi'),
(6, 13, '0817177124', 'Cluster Palm Summarecon Bekasi. Cluster terdepan di Summarecon. Dekat Landmark. Lokasi bagus, hadap taman kosong.\n\nRumah bagus siap huni, type PREMIUM dengan spesifikasi sebagai berikut :\n- Luas Tanah 119 m2  (7x17)m2\n- Luas Bangunan 132 m2\n-  3+1 Kamar Tidur \n-  3+1 Kamar Mandi \n-  1 carport\n-  1 garasi\n- Daya Listrik : 2200 watt\n- Di depannya taman kosong.\n\nLokasi di Kawasan Ekskulsif dan sangat strategis di pusat Kota Bekasi dengan Akses Fly Over dan Exit Tol Bekasi Barat. \n\nDilengkapi PRIVATE CLUBHOUSE dengan swimming pool, children playground, security 24 jam dengan sistem cluster SMART GATE Plus CCTV, shuttle bus. Dekat dengan Summarecon Mal Bekasi, pusat kuliner, pusat perbankan, pasar modern SINPASA, Bursa mobil AXC, sekolah BPK PENABUR, AL AZHAR ,BINUS UNIVERSITY, halte TRANSJAKARTA, Stasiun Kereta api.\n\nInfo lengkap :\nIDA - 081717xxxx\nRay White Summarecon Bekasi', '/uploads/1785290025104-180730631.webp', '/uploads/1785290029287-844053719.webp', '/uploads/1785290032417-904069432.webp', 5, 3, '2026-04-05 18:56:52', '2026-07-29 01:53:53', 'hendi'),
(7, 14, '081234567891', 'Kesempatan terbatas buat Anda dapatkan rumah strategis dengan return investasi tinggi di Grand Wisata, Bekasi.\r\n\r\nRumah ini menawarkan kelengkapan fasilitas serta memiliki nilai tepat yang siap untuk segera Anda miliki, utamanya bagi Anda yang mencari hunian di lokasi yang dekat dengan fasilitas umum.\r\n\r\nKondisi properti ini bagus dan memiliki desain modern yang menambah daya tarik dan estetika properti ini. Rumah ini berada di wilayah strategis.\r\n\r\nDetail Properti ini adalah:\r\n\r\n  - Kamar Tidur: 3\r\n  - Kamar Mandi: 2\r\n  - Sertifikat: SHM - Sertifikat Hak Milik\r\n  - Daya Listrik: 2200 watt\r\n  - Arah Bangunan: Menghadap Utara\r\n  - Kondisi Perabotan: Unfurnished\r\n\r\nTersedia berbagai fasilitas lengkap, seperti:\r\n\r\n  - CCTV.\r\n  - Wastafel.\r\n  - Kitchen Set.\r\n  - Keamanan 24 jam.\r\n  - Taman.\r\n  - CCTV.\r\n  - One Gate System.\r\n  - Akses Parkir.\r\n  - Jalur Telepon.\r\n  - Taman.\r\n  - Tempat Jemuran.\r\n  - Jalur Telepon.\r\n  - Taman.\r\n  - Tempat Jemuran.\r\n  - Trak Lari.\r\n  - Lapangan Basket.\r\n  - Lapangan Voli.\r\n\r\nTidak hanya itu, namun properti ini juga memiliki keunggulan sebagai berikut:\r\n\r\n  - Bisa KPR.\r\n  - Siap Huni.\r\n  - Bebas Banjir.\r\n  - Dekat Akses KRL.\r\n  - Dekat Akses Pelabuhan.\r\n  - Dekat Akses Transjakarta.\r\n  - Dekat Akses LRT.\r\n  - Dekat Akses MRT.\r\n  - Dekat Akses Bus Kota.\r\n  - Dekat Akses Bandara.\r\n  - Dekat Pusat Perbelanjaan.\r\n  - Dekat Sekolah Internasional.\r\n  - Dekat Sekolah Negeri.\r\n  - Dekat Universitas.\r\n  - Dekat Fasilitas Kesehatan.\r\n  - Dekat Tempat Wisata.\r\n  - Dekat Tempat Ibadah.\r\n  - Dekat Akses Tol.\r\n  - Lokasi Pinggiran Kota.\r\n  - Dekat Kawasan Bisnis & Industri.\r\n  - Lingkungan Tenang dan Damai.\r\n  - Cocok Untuk Investasi.\r\n  - Cocok Untuk Dijual Kembali.\r\n  - Aset Kepemilikan Pribadi (Tangan Pertama).\r\n  - Properti Bisa Nego.\r\n  - Akses Jalan Muat 2 Mobil.\r\n  - Lokasi Strategis.\r\n  - Lokasi Bebas Banjir.\r\n  - One Gate System.\r\n  - Bisa KPR.\r\n  - Tanpa Perantara.\r\n\r\nLokasi Strategis terletak di Grand Wisata, properti ini memudahkan akses Anda ke fasilitas-fasilitas utama dan unggulan.\r\n\r\nHarga yang sangat kompetitif yaitu, Rp. 1.300.000.xxx, rumah ini siap menjadi milik Anda!\r\n\r\nNikmati segala kemudahan dan berbagai keunggulan menarik saat properti asri ini milik Anda.', '/uploads/1785288137582-310939560.webp', '/uploads/1785288137582-210565736.webp', '/uploads/1785288137582-571799267.webp', 3, 2, '2026-07-29 01:22:17', '2026-07-29 01:22:17', NULL),
(8, 15, '081574599005', 'DIJUAL RUMAH SIAP HUNI DI BURGUNDY - BANGUNAN LUAS, FUNGISIONAL, DAN SUDAH FULL RENOVASI\r\n\r\nKesempatan memiliki rumah nyaman di kawasan Burgundy dengan kondisi terawat dan bangunan yang sudah dikembangkan secara maksimal hingga lantai 3 bagian belakang. Sangat cocok untuk hunian keluarga besar maupun investasi jangka panjang.\r\n\r\nKeunggulan Properti :\r\n- Bangunan sudah diperluas full hingga lantai 3 pada bagian belakang\r\n- Memiliki kapasitas ruang yang lebih luas dan fungsional dibanding standar awal\r\n- Terdiri dari 5 kamar tidur dan 3 kamar mandi\r\n- Kondisi rumah masih dihuni dan terawat dengan baik\r\n- Cocok untuk keluarga besar maupun kebutuhan work from home\r\n- Lingkungan nyaman dan mudah diakses\r\n\r\nSpesifikasi Properti :\r\n- Luas Tanah : 91 m²\r\n- Luas Bangunan Sertifikat : 84 m²\r\n- Pengembangan bangunan full hingga lantai 3 bagian belakang\r\n- Jumlah Lantai : 2,5 Lantai\r\n- 5 Kamar Tidur\r\n- 3 Kamar Mandi\r\n- Listrik 4.400 Watt\r\n- Sertifikat Hak Milik (SHM)\r\n- Sertifikat berada di tangan pemilik\r\n- Posisi rumah badan\r\n\r\nHarga Penawaran :\r\nRp2,4 M (Nego)\r\nPilihan tepat bagi Anda yang mencari rumah siap huni dengan ruang lebih luas, lokasi nyaman, dan nilai tambah dari pengembangan bangunan yang sudah maksimal.', '/uploads/1785291020232-70894143.webp', '/uploads/1785291020232-533663570.webp', '/uploads/1785291020233-486803281.webp', 5, 2, '2026-07-29 02:10:20', '2026-07-29 02:10:20', NULL),
(9, 16, '082210005095', 'Jual Cepat Perumahan Bulog 1 Jatiwarna Dekat Pintu Tol.\r\n\r\nCek segera rumah 3 lantai yang modern ini,  dijual dengan pemandangan asri yang menambah nilai estetika di lingkungan hunian. Rumah ini berada di area strategis serta menawarkan lingkungan fasilitas yang lengkap, cocok untuk Anda yang menginginkan hunian nyaman.\r\n\r\nSpesifikasi Utama Properti:\r\nLuas tanah 385 m2 \r\nLuas bangunan 250 m2\r\n  - Kamar Tidur: 3+1\r\n  - Kamar Mandi: 3+1\r\n  - Carport 2 mobil\r\n  - Sertifikat: SHM - Sertifikat Hak Milik\r\n  - Kondisi Perabotan: Semi Furnished\r\n\r\nopsional living room lantai 2 bisa di rubah menjadi kamar ke 4\r\n\r\n\r\nSelling point: Lingkungan aman nyaman Hanya 5 menit ke pintu Tol Jatiwarna Dekat sekolah internasional, swasta, negeri Dekat pusat kuliner Mc D, Pizza Hut, KFC, Richeese, dll Dekat supermarket One gate Sistem Keamanan 24 jam dekat  McD Jatiwarna.\r\n\r\nharga 5,5M nego sampai deal\r\nCara bayar bisa cash atau KPR', '/uploads/1785291806105-294370144.webp', '/uploads/1785291806106-533374518.webp', '/uploads/1785291806106-929175279.webp', 3, 3, '2026-07-29 02:23:26', '2026-07-29 02:23:26', NULL),
(10, 17, '085695216364', 'Rumah bergaya modern glass house di Bekasi Selatan.\r\n\r\nTemukan rumah 2 lantai yang asri ini,  dijual dengan pemandangan perkotaan yang menambah nilai estetika di lingkungan hunian. Rumah ini berada di area strategis serta menghadirkan lingkungan fasilitas yang lengkap, cocok untuk Anda yang menginginkan hunian strategis.\r\n\r\nSpesifikasi Utama Properti:\r\n\r\n  - Kamar Tidur: 3\r\n  - Kamar Mandi: 2\r\n  - Sertifikat: SHM - Sertifikat Hak Milik\r\n  - Daya Listrik: 1300 W\r\n  - Arah Bangunan: Menghadap Barat\r\n  - Kondisi Perabotan: Unfurnished\r\n\r\nDilengkapi dengan:\r\n\r\n  - Wastafel.\r\n  - Keamanan 24 jam.\r\n  - Akses Parkir.\r\n  - Taman.\r\n  - CCTV.\r\n  - One Gate System.\r\n  - Tempat Laundry.\r\n  - Tempat Jemuran.\r\n  - Jalur Telepon.\r\n  - Taman.\r\n  - Tempat Jemuran.\r\n  - Jalur Telepon.\r\n  - Taman.\r\n\r\nFitur unggulan:\r\n\r\n  - Bisa KPR.\r\n  - Angsuran Rendah .\r\n  - Bebas Banjir.\r\n  - Lingkungan Islami.\r\n  - Cicilan Bertahap.\r\n  - Free Biaya Akad.\r\n  - Free Biaya Notaris.\r\n  - Free Biaya KPR.\r\n  - Dekat Akses KRL.\r\n  - Dekat Pusat Perbelanjaan.\r\n  - Dekat Sekolah Internasional.\r\n  - Dekat Sekolah Negeri.\r\n  - Dekat Fasilitas Kesehatan.\r\n  - Dekat Tempat Ibadah.\r\n  - Dekat Akses Tol.\r\n  - Lokasi di Pusat Kota.\r\n  - Dekat Kawasan Bisnis & Industri.\r\n  - Adem & Sejuk.\r\n  - Lingkungan Tenang dan Damai.\r\n  - Pemandangan City View.\r\n  - Cocok Untuk Investasi.\r\n  - Cocok Untuk Dijual Kembali.\r\n  - Aset Kepemilikan Pribadi (Tangan Pertama).\r\n  - Properti Bisa Nego.\r\n  - Akses Jalan Muat 2 Mobil.\r\n  - Lokasi Strategis.\r\n  - Lokasi Bebas Banjir.\r\n  - One Gate System.\r\n  - Bisa KPR.\r\n  - Properti Eksklusif.\r\n  - Properti Mewah.\r\n\r\nTerletak di Bekasi Selatan, rumah ini memberikan kemudahan akses ke berbagai fasilitas menarik.', '/uploads/1785292321148-893450797.webp', '/uploads/1785292321148-782333226.webp', '/uploads/1785292321148-428753287.webp', 3, 2, '2026-07-29 02:32:01', '2026-07-29 02:32:01', NULL),
(11, 18, '081285990926', '10 menit mall\r\n10 menit sekolah\r\n10 menit universitas\r\n7 menit Rumah sakit\r\n15 menit pintu toll\r\n\r\nLuas bangunan : 118\r\nLuas tanah : 104\r\nJumlah kamar tidur : 4\r\nkamar mandi : 4\r\nJumlah lantai : 2\r\nCarport : 2\r\nAir : PDAM\r\nDaya Listrik : 2200\r\nSertifikat  : SHM\r\nunfurnish\r\nHarga : 2.800.000.xxx', '/uploads/1785292625722-8609611.webp', '/uploads/1785292625722-71423470.webp', '/uploads/1785292625722-793237192.webp', 4, 4, '2026-07-29 02:37:05', '2026-07-29 02:37:05', NULL),
(12, 19, '081287518486', 'MEWAH BISA CUSTOM.Hanya 10 Menit Lrt dan Toll Jatibening\r\nTidak Banjir.. Unit Terbatas JANGAN SAMPAI KEHABISAN! LAUNCHIING HARGA PERDANA. Amankan unit Anda sekarang!\r\n\r\nRumah Baru Dalam Cluster Selangkah ke Galaxy , rumah selangkah cikunir dan rumah ini selangkah jatibening\r\n\r\nSpesifikasi:\r\nLuas tanah:  92 - 141 m² \r\nLuas bangunan: 120  m²\r\n\r\nKamar tidur:  3 \r\nKamar mandi: 3\r\nLegalitas:  SHM, PBB, PBG\r\nListrik (watt): 2.200\r\nSumber air:  Jet Pam\r\nCarport :  2 Mobil\r\nBebas Banjir ? :  Ya 100%\r\nAkses : 2 Mobil\r\nRuang Tamu\r\nRuang Keluarga\r\nDapur\r\nBalkon depan\r\nHalaman Belakang\r\nCluster One Gate\r\nDalam Cluster (  14   unit)\r\n\r\nHarga : Rp. 1,2 M-an**\r\n\r\nPROMO : \r\nFree Biaya Notaris AJB , BN\r\nSubsidi BPHTB 10jt\r\n\r\nAkses Tol Cepat:\r\n- Tol Jatiasih (JORR) - 5 menit\r\n- Tol Bekasi Barat  - 10 menit\r\n- Tol Becakayu (Bekasi-Cawang-Kampung Melayu) - 15 menit\r\n- Tol Jatibening  - 10 menit\r\n- akses mudah ke Jakarta Timur dan sekitarnya\r\n\r\nDekat ke Fasilitas Umum & Gaya Hidup\r\n\r\nRumah Sakit Terdekat:\r\n- RS Cikunir - 2 menit\r\n- RS Hermina Galaxy - 7 menit\r\n- RS Anna - 5 menit\r\n\r\nPusat Pendidikan:\r\n- SDIT Al-Hambra - 5 menit\r\n- SDIT Ikhlas 86 - 8 menit\r\n- SMAN 3 Bekasi - 6 menit\r\n\r\nPusat Perbelanjaan & Hiburan:\r\n- Grand Galaxy Park Mall - 7 menit\r\n- Naga Swalayan - 5 meniT\r\n- Pasar Galaxy - 10 menit\r\n- Mall Metropolitan Bekasi - 10 Menit\r\n- Pakuwon Mall Bekasi - hanya ±10 menit dari lokasi! Mall baru prestisius dengan tenant internasional & area hiburan lengkap.\r\n\r\nKeunggulan:\r\n- Bebas Banjir\r\n- Lingkungan Tenang dan Asri\r\n- Sistem One Gate dengan Keamanan 24 Jam\r\n- Jalan Lingkungan Lebar, Air bersih\r\n- Cocok untuk keluarga muda, pekerja urban, dan investor properti', '/uploads/1785293877352-304941009.webp', '/uploads/1785293877353-366342407.webp', '/uploads/1785293877353-343742283.webp', 3, 3, '2026-07-29 02:57:57', '2026-07-29 02:57:57', 'Baim Ditya'),
(13, 20, '081284811928', 'Dijual Cepat\r\n\r\nHarga 975 jt Nego smp deal\r\n\r\nPerumahan Vida Bekasi cluster kencana blok kencana selatan \r\nKelurahan: bantar gebang\r\nKecamatan: bantar gebang\r\n\r\nLT. 60 m2\r\nUkuran 5 x 12 m\r\nLB. 58 m2\r\n2 lantai\r\nKamar Tidur: 2\r\nKamar Mandi: 2\r\nListrik : 2200watt\r\nSHM \r\n\r\nFasilitas di rumah:\r\n- carport\r\n- taman belakang\r\n\r\nFasilitas perumahan :\r\n- kolam renang\r\n- sport centre\r\n- sekolah\r\n- rumah sakit\r\n- cafe \r\n- minimarket ', '/uploads/1785473630934-649369564.webp', '/uploads/1785473630935-489678311.webp', '/uploads/1785473630935-835120208.webp', 2, 2, '2026-07-31 04:53:50', '2026-07-31 04:53:50', NULL),
(14, 21, '081574599005', 'Soultan Island - Soul of Nature\r\nHunian Prestisius Bernuansa Villa di Pusat Kota\r\n\r\nBerada di kawasan elit Summarecon Bekasi, yang telah berkembang menjadi pusat hunian, bisnis, serta gaya hidup modern di timur Jakarta. Lingkungan premium dan akses super strategis menjadikan Soultan Island pilihan terbaik untuk keluarga maupun investor.\r\n\r\n5 Alasan Kenapa Harus Soultan Island?\r\n\r\n1️⃣ Developer Terpercaya\r\nSummarecon - 50 tahun pengalaman membangun kota terpadu berkelas nasional\r\n\r\n2️⃣ Prime Location - Heart of Summarecon Bekasi\r\n- 0,5 km ke BCBD (Bekasi Central Business District)\r\n-1 km ke Summarecon Mall Bekasi\r\n-2 km ke Bekasi City Center\r\n\r\nAkses & Landmark Terdekat\r\n±3 menit ke Summarecon Mall Bekasi\r\n±3 menit ke Kampus BINUS Bekasi\r\n±5 menit ke RS Mitra Keluarga\r\n±10 menit ke Tol Bekasi Barat & Bekasi Timur\r\n±10 menit ke Stasiun Bekasi\r\nDekat pusat bisnis & kuliner Summarecon\r\n\r\n3️⃣ Best Design & Premium Materials\r\nDirancang oleh arsitek internasional Thomas Elliot dengan Material kelas atas:\r\n-Marmer Import Lbr 18\r\n-Quadra Lbr 15 & 12\r\n-Sanitary Kohler\r\n\r\n4️⃣ Exclusive & Luxurious Facilities\r\n- Club House Terbesar di Summarecon Bekasi (±3.000 m²)\r\n-40% green & blue landscape\r\n-Row jalan 14-16 meter\r\n-Jogging Track View Danau\r\n\r\nFasilitas lengkap:\r\n-Gym & Sauna\r\n-Jacuzzi Pool\r\n-Infinity Pool View Danau\r\n-Children Playground\r\n\r\n5️⃣ Limited & Exclusive\r\n Hanya 110 unit - Privasi & kenyamanan maksimal\r\n\r\nHarga & Unit\r\nTipe Yellow - 12 x 25 | 300 m²\r\nHarga mulai Rp 9,3 M\r\nSerah terima: ± 24 bulan dari PPJB', '/uploads/1785474058573-467607006.webp', '/uploads/1785474058573-229210806.webp', '/uploads/1785474058575-287704947.webp', 4, 4, '2026-07-31 05:00:58', '2026-07-31 05:00:58', NULL);

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
(2, 'Dewa Khresna', 'dewakhresna', 'dewakhresna04@gmail.com', 'dff9e6ea7da1c66b86cfbe709268f6411b40abd06ef24f70c919e36e736a3264484bcf8a746b98d0da0e22f93ef7ba56e91b935dcdd2df93a496f8023db76f4a', 'user', 'user.jpg', 1, '8426775e547a172867729f5a0ceabe3df7370b0c446dc9cf20919ab8ecdfb33a5094637ef374562f0cc7de32a15660114807d0cbf2e373968cdc1ddf64776a1c', '2026-04-19 17:29:38', '2026-07-25 10:58:02'),
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
  ADD UNIQUE KEY `email_9` (`email`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `house_details`
--
ALTER TABLE `house_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

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
  ADD CONSTRAINT `favorites_ibfk_211` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `favorites_ibfk_212` FOREIGN KEY (`house_id`) REFERENCES `houses` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `house_details`
--
ALTER TABLE `house_details`
  ADD CONSTRAINT `house_details_ibfk_1` FOREIGN KEY (`house_id`) REFERENCES `houses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
