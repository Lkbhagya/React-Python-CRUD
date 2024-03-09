-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 09, 2024 at 06:50 AM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pycrud`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `Id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `mobile` varchar(10) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`Id`, `name`, `email`, `mobile`, `date`) VALUES
(1, 'Bhagya Updated', 'bhagyaupdated@gmail.com', '0767689460', '2024-02-29 01:20:55'),
(2, 'Bhagya', 'bhagya@gmail.com', '0767689460', '2024-02-29 01:21:06'),
(33, 'test1', 'test1@gmail.com', '0111234567', '2024-03-05 16:35:13'),
(34, 'test1', 'test1@gmail.com', '0111234567', '2024-03-05 23:22:12'),
(35, 'admin', 'admin@gmail.com', '0817654321', '2024-03-06 00:25:27'),
(36, 'Kamal', 'kamal@gmail.com', '000000000', '2024-03-08 12:27:30'),
(37, 'Saman', 'saman@gmail.com', '1111111111', '2024-03-08 14:53:29'),
(38, 'Kasun Saman', 'kasunsaman@gmail.com', '1234567891', '2024-03-08 14:54:10'),
(39, 'Yasiru', 'yasiru@gmail.com', '2222222222', '2024-03-08 15:23:09'),
(40, 'Udara', 'udara@gmail.com', '3333333333', '2024-03-08 15:24:32'),
(44, 'Shehan Rashmika', 'shehanrashmika@gmail.com', '0771234567', '2024-03-09 00:18:02');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
