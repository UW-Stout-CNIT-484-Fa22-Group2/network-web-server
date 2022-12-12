CREATE DATABASE  IF NOT EXISTS `cnit484-group2-schema` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `cnit484-group2-schema`;
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: cnit484-group2-schema
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `patient_doctor`
--

DROP TABLE IF EXISTS `patient_doctor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient_doctor` (
  `idPatient` int NOT NULL,
  `idDoctor` int NOT NULL,
  PRIMARY KEY (`idPatient`,`idDoctor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_doctor`
--

LOCK TABLES `patient_doctor` WRITE;
/*!40000 ALTER TABLE `patient_doctor` DISABLE KEYS */;
INSERT INTO `patient_doctor` VALUES (5,1),(6,1),(7,2),(8,2);
/*!40000 ALTER TABLE `patient_doctor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_records`
--

DROP TABLE IF EXISTS `user_records`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_records` (
  `idRecord` int NOT NULL AUTO_INCREMENT,
  `userId` int DEFAULT NULL,
  `recordData` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`idRecord`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_records`
--

LOCK TABLES `user_records` WRITE;
/*!40000 ALTER TABLE `user_records` DISABLE KEYS */;
INSERT INTO `user_records` VALUES (1,5,'Purple sliver on the bottom of patient\'s left heel. Infected for at least 2 months, recommended course of action is a stake and mallet on source of entry.'),(2,5,'Patient shows no sign of cooperation with treatment, foam oozes from the orifices on the face which I presume to be signs of rabies. I predict that this is from a nested wild animal due to the unkempt hair and egg shells embedded in the scalp. Recommended use of Old Spice and straight jacket.'),(3,6,'Is on TikTok far to often. Even while getting evaulted, they were whipping that ney ney. Agressive psychiatric treatment is required.'),(4,6,'Is a CNIT major. That\'s it. Nothing we can do about it. Maybe a full frontal lobotomy?'),(5,7,'Seems to show signs of depression and not giving a f- I mean care. Tried to wrestle ly laptop out of my lap to watch teletubbies.'),(6,8,'Has an irrationally deep love for ඞ.mongus. Spends most of their time on twitch.tv donating all their money to millionares. ');
/*!40000 ALTER TABLE `user_records` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `idUser` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `role` varchar(20) DEFAULT NULL,
  `displayName` varchar(45) DEFAULT NULL,
  `bloodType` varchar(5) DEFAULT NULL,
  `birthday` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`idUser`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'doc1','$2a$10$bylr82YjSX8tSaSqTUZZBenav70k4aUXC4GRwr1dM/LjSwAnGuCe.','doctor','Mason','O','20-Apr-1969'),(2,'doc2','$2a$10$zPgpY7YqkOzhM09t6Igvu.AIc1QPwfqK2jFN4qV/2T6o8fDm67ev.','doctor','Christie','AB','09-Jun-1988'),(3,'nurse1','$2a$10$SPVOjMXSP88VpLgd1Gn.juA8pimGV.1dMu5id9LGUFutltMWZmQFm','nurse','Antonio','A+','08-Aug-2001'),(4,'nurse2','$2a$10$dybnkx/wkazIjmQzgCiEA.9zvDbJemcJU5OBLqIlyDHgf8BNjCM/m','nurse','Trinity','B-','26-Dec-1991'),(5,'patientA','$2a$10$zgoLnmBrXGeKZ8yYYqZiNe.2v19T/8ZAXL3FiYMk7mBpTh/42NyWC','patient','Andrew','B+','29-Feb-2003'),(6,'patientC','$2a$10$YRz0Husxbll6ijpKaxFxtOFu9ONG8SfUvKeQy52Vq.cH566aavBs2','patient','Chris','AB','18-May-1999'),(7,'patientB','$2a$10$3pf7iV595PPJkScVIbkOouAEbIHlp6fR1QEW7TFPCvgXpXN0P4zJe','patient','Brian','O','01-Dec-2022'),(8,'patientD','$2a$10$8UwapvXPA94Wk9V7rEW3TO.mK79EyTa0/OhZhL2H4IvYUoHWJUsBy','patient','Dyler','A-','01-Jan-1970');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-12  9:55:59
