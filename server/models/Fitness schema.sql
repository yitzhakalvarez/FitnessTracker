-- phpMyAdmin SQL Dump
-- version 4.7.1
-- https://www.phpmyadmin.net/
--
-- Host: sql9.freemysqlhosting.net
-- Generation Time: Nov 05, 2020 at 06:05 PM
-- Server version: 5.5.62-0ubuntu0.14.04.1
-- PHP Version: 7.0.33-0ubuntu0.16.04.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sql3376190`
--

-- --------------------------------------------------------

--
-- Table structure for table `Exercises`
--

CREATE TABLE `Exercises` (
  `name` int(11) NOT NULL,
  `posts` int(11) NOT NULL,
  `sets` int(11) NOT NULL,
  `reps` int(11) NOT NULL,
  `date` datetime DEFAULT NULL,
  `location` varchar(45) NOT NULL DEFAULT 'Gym',
  `time-spent` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='''Exercise'' table';

-- --------------------------------------------------------

--
-- Table structure for table `Followers`
--

CREATE TABLE `Followers` (
  `approval` tinyint(4) DEFAULT NULL,
  `id` int(11) NOT NULL DEFAULT '0',
  `userID` int(11) NOT NULL,
  `follower` int(11) NOT NULL,
  `posts-liked` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='''UserFollowers'' table';

-- --------------------------------------------------------

--
-- Table structure for table `Likes`
--

CREATE TABLE `Likes` (
  `id` int(11) NOT NULL DEFAULT '0',
  `posts` int(11) DEFAULT NULL,
  `comments` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='''Likes'' table';

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `nickname` varchar(45) DEFAULT NULL,
  `followerscount` int(11) DEFAULT NULL,
  `status` enum('A','U') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='''Users'' table';

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Exercises`
--
ALTER TABLE `Exercises`
  ADD PRIMARY KEY (`posts`),
  ADD KEY `name` (`name`);

--
-- Indexes for table `Followers`
--
ALTER TABLE `Followers`
  ADD PRIMARY KEY (`id`,`follower`),
  ADD KEY `follower` (`follower`),
  ADD KEY `UsersID` (`userID`),
  ADD KEY `Likes` (`posts-liked`);

--
-- Indexes for table `Likes`
--
ALTER TABLE `Likes`
  ADD KEY `id` (`id`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `followerscount` (`followerscount`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Exercises`
--
ALTER TABLE `Exercises`
  MODIFY `posts` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `Exercises`
--
ALTER TABLE `Exercises`
  ADD CONSTRAINT `Exercises_ibfk_2` FOREIGN KEY (`name`) REFERENCES `Exercises` (`posts`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `Exercises_ibfk_1` FOREIGN KEY (`posts`) REFERENCES `Users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `Followers`
--
ALTER TABLE `Followers`
  ADD CONSTRAINT `Likes` FOREIGN KEY (`posts-liked`) REFERENCES `Users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `followersID` FOREIGN KEY (`follower`) REFERENCES `Users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `UsersID` FOREIGN KEY (`userID`) REFERENCES `Users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `Likes`
--
ALTER TABLE `Likes`
  ADD CONSTRAINT `Likes_ibfk_1` FOREIGN KEY (`id`) REFERENCES `Users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `Users`
--
ALTER TABLE `Users`
  ADD CONSTRAINT `Users_ibfk_2` FOREIGN KEY (`id`) REFERENCES `Followers` (`follower`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `Users_ibfk_1` FOREIGN KEY (`followerscount`) REFERENCES `Users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
