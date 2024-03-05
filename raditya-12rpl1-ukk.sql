-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 05, 2024 at 11:44 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `raditya-12rpl1-ukk`
--

-- --------------------------------------------------------

--
-- Table structure for table `alasanban`
--

CREATE TABLE `alasanban` (
  `AlasanBanID` int(11) NOT NULL,
  `UserID` int(11) NOT NULL,
  `AlasanBan` varchar(255) NOT NULL,
  `TanggalBan` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `buku`
--

CREATE TABLE `buku` (
  `BukuID` int(11) NOT NULL,
  `Judul` varchar(255) NOT NULL,
  `Penulis` varchar(255) NOT NULL,
  `Penerbit` varchar(255) NOT NULL,
  `TahunTerbit` int(11) NOT NULL,
  `FotoCover` varchar(255) NOT NULL,
  `CoverDataType` varchar(255) NOT NULL,
  `Bahasa` varchar(255) NOT NULL,
  `JumlahHalaman` int(11) NOT NULL,
  `Deskripsi` varchar(255) NOT NULL,
  `TanggalDitambah` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `buku`
--

INSERT INTO `buku` (`BukuID`, `Judul`, `Penulis`, `Penerbit`, `TahunTerbit`, `FotoCover`, `CoverDataType`, `Bahasa`, `JumlahHalaman`, `Deskripsi`, `TanggalDitambah`) VALUES
(58, 'Filosofi Teras', 'Henry Manampiring', 'Penerbit Buku Kompas', 2022, '470_filosofi-teras', '.jpg', 'Indonesia', 298, 'Lebih dari 2000 tahun lalu, sebuah mazhab filsafat menemukan akar masalah dan juga solusi dari banyak emosi negatif. Stoisisme, atau Filosofi Teras, adalah filsafat Yunani-Romawi kuno yang bisa membantu kita mengatasi emosi negatif dan menghasilkan mental', '2024-03-05'),
(59, 'How to Think Like Sherlock Holmes', 'Peter Hollins', 'Bhuana Ilmu Populer', 2021, '477_how-to-think-like-sherlock-holmes', '.jpeg', 'Indonesia', 204, 'Sherlock Holmes adalah tokoh fiksi karya Sir Arthur Conan Doyle yang sangat legendaris sejak 1887 hingga sekarang. Ia pun sering diangkat ke layar lebar juga serial televisi. Mengapa masih banyak orang yang terpaku pada Sherlock Holmes? Itu karena kemampu', '2024-03-05'),
(60, 'Mantappu Jiwa', 'Jerome Polin Sijabat', 'Gramedia Pustaka Utama', 2019, '631_mantappu-jiwa', '.jpg', 'Indonesia', 224, 'Jerome lahir di tengah-tengah situasi sulit karena krisis moneter pasca kerusuhan mei 1998. Didukung keluarga yang suportif, Jerome mendapatkan beasiswa penuh program sarjana Mitsui Bussan di Waseda University, Jepang, dengan mengambil jurusan Matematika ', '2024-03-05'),
(61, 'Rich Dad Poor Dad', 'Robert T. Kiyosaki', 'Gramedia Pustaka Utama', 2016, '836_rich-dad-poor-dad', '.jpg', 'Indonesia', 244, 'Robert Kiyosaki telah menantang dan mengubah cara pikir puluhan juta orang di seluruh dunia tentang uang. Dengan perspektif yang kerap bertentangan dengan kebijaksanaan umum, Robert memiliki reputasi sebagai orang yang bicara secara apa adanya, tidak meng', '2024-03-05'),
(62, 'Seni Bersikap Bodo Amat', 'Mark Manson', 'Gramedia Widiasarana Indonesia', 2022, '410_seni-bodo-amat', '.jpg', 'Indonesia', 256, '\'Dalam buku pengembangan diri yang mewakili generasi ini, seorang blogger superstar menunjukkan pada kita bahwa kunci untuk menjadi orang yang lebih kuat, lebih bahagia adalah dengan mengerjakan segala tantangan dengan lebih baik dan berhenti memaksa diri', '2024-03-05'),
(67, 'Sherlock Holmes', 'Orang inggris', 'Orang itu', 1900, '329_sherlock-holmes', '.jpg', 'inggris', 100, '\'sfsdf\'', '2024-03-05');

-- --------------------------------------------------------

--
-- Table structure for table `kategoribuku`
--

CREATE TABLE `kategoribuku` (
  `KategoriID` int(11) NOT NULL,
  `NamaKategori` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kategoribuku`
--

INSERT INTO `kategoribuku` (`KategoriID`, `NamaKategori`) VALUES
(5, 'Filsafat'),
(6, 'Self Development'),
(7, 'Fiksi');

-- --------------------------------------------------------

--
-- Table structure for table `kategoribuku_relasi`
--

CREATE TABLE `kategoribuku_relasi` (
  `KategoriBukuID` int(11) NOT NULL,
  `BukuID` int(11) NOT NULL,
  `KategoriID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `koleksipribadi`
--

CREATE TABLE `koleksipribadi` (
  `KoleksiID` int(11) NOT NULL,
  `UserID` int(11) NOT NULL,
  `BukuID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `lokasi`
--

CREATE TABLE `lokasi` (
  `LokasiID` int(11) NOT NULL,
  `Lokasi` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `lokasi`
--

INSERT INTO `lokasi` (`LokasiID`, `Lokasi`) VALUES
(17, 'perpustakaan telkom'),
(18, 'perpustakaan gadjah mada');

-- --------------------------------------------------------

--
-- Table structure for table `lokasibuku`
--

CREATE TABLE `lokasibuku` (
  `LokasiBukuID` int(11) NOT NULL,
  `LokasiID` int(11) NOT NULL,
  `BukuID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `peminjaman`
--

CREATE TABLE `peminjaman` (
  `PeminjamanID` int(11) NOT NULL,
  `UserID` int(11) NOT NULL,
  `BukuID` int(11) NOT NULL,
  `TanggalPeminjaman` date NOT NULL,
  `TanggalPengembalian` date NOT NULL,
  `StatusPeminjaman` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ulasanbuku`
--

CREATE TABLE `ulasanbuku` (
  `UlasanID` int(11) NOT NULL,
  `UserID` int(11) NOT NULL,
  `BukuID` int(11) NOT NULL,
  `Ulasan` text NOT NULL,
  `Rating` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ulasanbuku`
--

INSERT INTO `ulasanbuku` (`UlasanID`, `UserID`, `BukuID`, `Ulasan`, `Rating`) VALUES
(1, 44, 58, 'Buku ini sangat baik. Setelah membaca buku ini, cara pandang saya terhadap kehidupan telah berubah menjadi lebih baik.', 4);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `UserID` int(11) NOT NULL,
  `Username` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `NamaLengkap` varchar(255) NOT NULL,
  `Alamat` text NOT NULL,
  `Akses` varchar(10) NOT NULL,
  `FotoProfil` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `TanggalBergabung` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`UserID`, `Username`, `Password`, `Email`, `NamaLengkap`, `Alamat`, `Akses`, `FotoProfil`, `status`, `TanggalBergabung`) VALUES
(30, 'petugas', '$2b$10$ReCHRNc0xNrsEmb3rOHgyuyclodrvDgRCmR9xaE.p/OGHPSooonhi', 'petugas@mail.com', 'petugas', 'kantor', 'petugas', '', 'aktif', '2024-02-28'),
(44, 'radit.rchmd', '$2b$10$6xX..zaEG08rg.VmGCSIueZdH6Y3bUd67Io72DUjYapPj4UY.5Mxy', 'radit@mail.com', 'Raditya Atallahasyrif Rachmadie', 'radit@mail.com', 'peminjam', '', 'aktif', '2024-03-05'),
(45, 'raditaja', '$2b$10$dI.USuzahd7nnRBZn20fZuJ6lj8WPLcNm.pMIgfCMs2SLA7VAVxpm', 'atalla@mail.com', 'Raditya Atallahasyrif Rachmadie', 'atalla@mail.com', 'petugas', '', 'aktif', '2024-03-05'),
(46, 'orang', '$2b$10$Kn0UN69ZEGeMiz1gExIeT.r2GK1dIEbqTDa28X1zxlM7yuKRn3u/q', 'orang@mail.com', 'orang lain', 'orang@mail.com', 'peminjam', '', 'aktif', '2024-03-05'),
(47, 'asrul', '$2b$10$yFwFyvN4GTgKLDbMFHj2WOZBcV8nPTPdhtFq8Ym75RwtTIHt4E/Ve', 'asrul@mail.com', 'asrul', 'asrul@mail.com', 'peminjam', '', 'aktif', '2024-03-05');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `alasanban`
--
ALTER TABLE `alasanban`
  ADD PRIMARY KEY (`AlasanBanID`),
  ADD KEY `UserID` (`UserID`);

--
-- Indexes for table `buku`
--
ALTER TABLE `buku`
  ADD PRIMARY KEY (`BukuID`);

--
-- Indexes for table `kategoribuku`
--
ALTER TABLE `kategoribuku`
  ADD PRIMARY KEY (`KategoriID`);

--
-- Indexes for table `kategoribuku_relasi`
--
ALTER TABLE `kategoribuku_relasi`
  ADD PRIMARY KEY (`KategoriBukuID`),
  ADD KEY `BukuID` (`BukuID`),
  ADD KEY `BukuID_2` (`BukuID`),
  ADD KEY `foreignKategoriToKategoribuku_relasi` (`KategoriID`);

--
-- Indexes for table `koleksipribadi`
--
ALTER TABLE `koleksipribadi`
  ADD PRIMARY KEY (`KoleksiID`),
  ADD KEY `UserID` (`UserID`),
  ADD KEY `BukuID` (`BukuID`);

--
-- Indexes for table `lokasi`
--
ALTER TABLE `lokasi`
  ADD PRIMARY KEY (`LokasiID`);

--
-- Indexes for table `lokasibuku`
--
ALTER TABLE `lokasibuku`
  ADD PRIMARY KEY (`LokasiBukuID`),
  ADD KEY `LokasiID` (`LokasiID`,`BukuID`),
  ADD KEY `foreignBukuToLokasibuku` (`BukuID`);

--
-- Indexes for table `peminjaman`
--
ALTER TABLE `peminjaman`
  ADD PRIMARY KEY (`PeminjamanID`),
  ADD KEY `UserID` (`UserID`,`BukuID`),
  ADD KEY `foreignBukuToPeminjaman` (`BukuID`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Indexes for table `ulasanbuku`
--
ALTER TABLE `ulasanbuku`
  ADD PRIMARY KEY (`UlasanID`),
  ADD KEY `UserID` (`UserID`,`BukuID`),
  ADD KEY `foreignBukuToUlasan` (`BukuID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`UserID`),
  ADD UNIQUE KEY `Username` (`Username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `alasanban`
--
ALTER TABLE `alasanban`
  MODIFY `AlasanBanID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `buku`
--
ALTER TABLE `buku`
  MODIFY `BukuID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT for table `kategoribuku`
--
ALTER TABLE `kategoribuku`
  MODIFY `KategoriID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `kategoribuku_relasi`
--
ALTER TABLE `kategoribuku_relasi`
  MODIFY `KategoriBukuID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `koleksipribadi`
--
ALTER TABLE `koleksipribadi`
  MODIFY `KoleksiID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `lokasi`
--
ALTER TABLE `lokasi`
  MODIFY `LokasiID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `lokasibuku`
--
ALTER TABLE `lokasibuku`
  MODIFY `LokasiBukuID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `peminjaman`
--
ALTER TABLE `peminjaman`
  MODIFY `PeminjamanID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ulasanbuku`
--
ALTER TABLE `ulasanbuku`
  MODIFY `UlasanID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `UserID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `alasanban`
--
ALTER TABLE `alasanban`
  ADD CONSTRAINT `foreignUserToAlasanban` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`);

--
-- Constraints for table `kategoribuku_relasi`
--
ALTER TABLE `kategoribuku_relasi`
  ADD CONSTRAINT `foreignBukuToKategoribuku_relasi` FOREIGN KEY (`BukuID`) REFERENCES `buku` (`BukuID`),
  ADD CONSTRAINT `foreignKategoriToKategoribuku_relasi` FOREIGN KEY (`KategoriID`) REFERENCES `kategoribuku` (`KategoriID`);

--
-- Constraints for table `koleksipribadi`
--
ALTER TABLE `koleksipribadi`
  ADD CONSTRAINT `foreignBukuToKoleksipribadi` FOREIGN KEY (`BukuID`) REFERENCES `buku` (`BukuID`),
  ADD CONSTRAINT `foreignUserToKoleksipribadi` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`);

--
-- Constraints for table `lokasibuku`
--
ALTER TABLE `lokasibuku`
  ADD CONSTRAINT `foreignBukuToLokasibuku` FOREIGN KEY (`BukuID`) REFERENCES `buku` (`BukuID`),
  ADD CONSTRAINT `foreignLokasitoLokasibuku` FOREIGN KEY (`LokasiID`) REFERENCES `lokasi` (`LokasiID`);

--
-- Constraints for table `peminjaman`
--
ALTER TABLE `peminjaman`
  ADD CONSTRAINT `foreignBukuToPeminjaman` FOREIGN KEY (`BukuID`) REFERENCES `buku` (`BukuID`),
  ADD CONSTRAINT `foreignUserToPeminjaman` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`);

--
-- Constraints for table `ulasanbuku`
--
ALTER TABLE `ulasanbuku`
  ADD CONSTRAINT `foreignBukuToUlasan` FOREIGN KEY (`BukuID`) REFERENCES `buku` (`BukuID`),
  ADD CONSTRAINT `foreignUserToUlasan` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
