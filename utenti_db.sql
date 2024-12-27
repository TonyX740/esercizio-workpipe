-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 27, 2024 at 03:35 AM
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
-- Database: `utenti_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `utenti`
--

CREATE TABLE `utenti` (
  `id` bigint(20) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `cognome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `data_nascita` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `utenti`
--

INSERT INTO `utenti` (`id`, `nome`, `cognome`, `email`, `data_nascita`) VALUES
(1, 'Mario', 'Rossi', 'mario.rossi@example.com', '1990-05-15'),
(2, 'Luigi', 'Verdi', 'luigi.verdi@example.com', '1985-09-20'),
(3, 'Anna', 'Bianchi', 'anna.bianchi@example.com', '1992-12-01'),
(5, 'Marco', 'Bianchi', 'marco.bianchi@example.com', '1992-01-15'),
(6, 'Anna', 'Verdi', 'anna.verdi@example.com', '1988-11-20'),
(7, 'Luca', 'Gialli', 'luca.gialli@example.com', '1995-03-10'),
(8, 'Giulia', 'Rossi', 'giulia.rossi@example.com', '1993-07-25'),
(9, 'Francesco', 'Neri', 'francesco.neri@example.com', '1987-09-30'),
(10, 'Elena', 'Bianchi', 'elena.bianchi@example.com', '1990-12-12'),
(11, 'Paolo', 'Gialli', 'paolo.gialli@example.com', '1994-05-05'),
(12, 'Simona', 'Verdi', 'simona.verdi@example.com', '1991-08-18'),
(13, 'Stefano', 'Rossi', 'stefano.rossi@example.com', '1992-06-23'),
(14, 'Marta', 'Neri', 'marta.neri@example.com', '1996-02-14');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `utenti`
--
ALTER TABLE `utenti`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `idx_nome` (`nome`),
  ADD KEY `idx_cognome` (`cognome`),
  ADD KEY `idx_data_nascita` (`data_nascita`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `utenti`
--
ALTER TABLE `utenti`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
