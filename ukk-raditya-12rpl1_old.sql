-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 05, 2024 at 01:35 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ukk-raditya-12rpl1`
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
  `Bahasa` varchar(255) NOT NULL,
  `JumlahHalaman` int(11) NOT NULL,
  `Deskripsi` varchar(255) NOT NULL,
  `TanggalDitambah` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `buku`
--

INSERT INTO `buku` (`BukuID`, `Judul`, `Penulis`, `Penerbit`, `TahunTerbit`, `FotoCover`, `Bahasa`, `JumlahHalaman`, `Deskripsi`, `TanggalDitambah`) VALUES
(44, 'Filosofi Teras', 'Henry Manampiring', 'Penerbit Buku Kompas', 2018, '972_filosofi_teras', 'Indonesia', 298, 'Lebih dari 2000 tahun lalu, sebuah mazhab filsafat menemukan akar masalah dan juga solusi dari banyak emosi negatif. Stoisisme, atau Filosofi Teras, adalah filsafat Yunani-Romawi kuno yang bisa membantu kita mengatasi emosi negatif dan menghasilkan mental', '2024-03-02'),
(52, '10 dosa besar Soeharto', 'saya', 'mereka', 2024, '275_filosofi_teras', 'indonesia', 100, 'lorem ipsum', '2024-03-04');

-- --------------------------------------------------------

--
-- Table structure for table `kategoribuku`
--

CREATE TABLE `kategoribuku` (
  `KategoriID` int(11) NOT NULL,
  `NamaKategori` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
(6, 'asdfa');

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
(21, 'user', '$2b$10$vm4hA.tCuXiKamQmadNX/.HnFAsLIJ.kxidck5zUHw1FFptusVv0K', 'mail@mail.com', 'nama', 'alamat', 'peminjam', '', 'aktif', '2024-02-28'),
(22, 'user1', '$2b$10$0KXAAISt.g8jZog0FPIIkuUuqqC/Rss9FB/caEUeTDhn5qHcsB6x6', 'mail1@mail.com', 'nama', 'alamat', 'peminjam', '', 'aktif', '2024-02-28'),
(24, 'user2', '$2b$10$G/S09Wq1C9fAwjw/3z/97OtOdXCdIaGKPFAfFnQ4hm2IAIlIvdPHS', 'mail2@mail.com', 'nama', 'alamat', 'peminjam', '', 'aktif', '2024-02-28'),
(25, 'user3', '$2b$10$W4NDZRoxza1WbPPrxOBCg.TbsDES1XM83JLuzf8Ju9q917qyzw4oS', 'mail3@mail.com', 'nama', 'alamat', 'peminjam', '', 'aktif', '2024-02-28'),
(26, 'user4', '$2b$10$4D1yNdESmPc.riAWW1c4UeMCU9Zc0JeftALkt2P8RwDO7wAAM69Qy', 'mail5@mail.com', 'nama', 'alamat', 'peminjam', '', 'aktif', '2024-02-28'),
(27, 'user5', '$2b$10$ITE4GQ/8JiSs9fc7qaj3Z.21FQpem.mWdD0s1r2WEM2K9ziFuV0Na', 'mail5@mail.com', 'nama', 'alamat', 'peminjam', '', 'aktif', '2024-02-28'),
(28, 'user6', '$2b$10$WjoR3MfRSyi7o3VVwSt91.Lxq4NlWZjZFNbBftADJky9uHDQOcdzm', 'mail6@mail.com', 'nama', 'alamat', 'peminjam', '', 'aktif', '2024-02-28'),
(29, 'user7', '$2b$10$hb85DeFcN36qm/gRxuKh3u0DRZu9SOvXFbRi2KVKJP3GD/ju7xuoa', 'mail7@mail.com', 'nama', 'alamat', 'peminjam', '', 'aktif', '2024-02-28'),
(30, 'petugas', '$2b$10$ReCHRNc0xNrsEmb3rOHgyuyclodrvDgRCmR9xaE.p/OGHPSooonhi', 'petugas@mail.com', 'petugas', 'kantor', 'petugas', '', 'aktif', '2024-02-28'),
(31, 'petugas2', '$2b$10$GZpCXRdHUSiqqcMLPXSbquq0gZpZ2BME3LK3etlzrumPXB37DSAd2', 'petugas@mail.com', 'nama', 'alamat', 'petugas', '', 'aktif', '2024-02-29'),
(32, 'user8', '$2b$10$ir31.QlaTgtfwq7M/XEOueF0dVTkA5RnfIj2KSfMMEtYx/lHbw1Wu', 'mail8@mail.com', 'nama', 'alamat', 'peminjam', '', 'aktif', '2024-02-29'),
(33, 'user9', '$2b$10$SeABn84.zowWdHsMYZQteuQvvIUuGwENUlTgWCkbDaRBiU63b7bue', 'mail9@mail.com', 'nama', 'mail9@mail.com', 'peminjam', '', 'aktif', '2024-02-29'),
(34, 'user10', '$2b$10$/oHR8I7zHey3JdI03nSj0.JG83UwIE6oOJmvBsMxdBBre9exSZPq2', 'mail10@mail.com', 'nama', 'mail10@mail.com', 'peminjam', '', 'aktif', '2024-03-03');

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
  MODIFY `AlasanBanID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `buku`
--
ALTER TABLE `buku`
  MODIFY `BukuID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT for table `kategoribuku`
--
ALTER TABLE `kategoribuku`
  MODIFY `KategoriID` int(11) NOT NULL AUTO_INCREMENT;

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
  MODIFY `LokasiID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `lokasibuku`
--
ALTER TABLE `lokasibuku`
  MODIFY `LokasiBukuID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `peminjaman`
--
ALTER TABLE `peminjaman`
  MODIFY `PeminjamanID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ulasanbuku`
--
ALTER TABLE `ulasanbuku`
  MODIFY `UlasanID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `UserID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

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
