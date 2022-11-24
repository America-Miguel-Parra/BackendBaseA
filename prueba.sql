-- MariaDB dump 10.19  Distrib 10.6.7-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: prueba
-- ------------------------------------------------------
-- Server version	10.6.7-MariaDB-2ubuntu1.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `FIFA`
--

DROP TABLE IF EXISTS `FIFA`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `FIFA` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Activo` char(1) NOT NULL,
  `Nombre` varchar(255) NOT NULL,
  `Liga` varchar(255) NOT NULL,
  `J_Cham` char(1) DEFAULT NULL,
  `J_Europa` char(1) DEFAULT NULL,
  `Estadio` varchar(255) NOT NULL,
  `DT` varchar(255) NOT NULL,
  `Creado` timestamp NOT NULL DEFAULT current_timestamp(),
  `Modificado` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `FIFA`
--

LOCK TABLES `FIFA` WRITE;
/*!40000 ALTER TABLE `FIFA` DISABLE KEYS */;
INSERT INTO `FIFA` VALUES (1,'N','America','MX','N','N','Azteca','Herrera','2022-11-10 16:45:26','2022-11-16 16:06:08'),(2,'N','Chivas','MX','N','N','Akron','Marcelo Michel Leaño','2022-11-14 01:30:58','2022-11-14 03:03:23'),(3,'S','Cruz Azul','MX','N','N','Azteca','Ppbto','2022-11-15 16:37:43','2022-11-15 16:37:43'),(4,'S','Veracruz','MX','N','N','LPF','Ppbto','2022-11-15 16:43:17','2022-11-15 16:43:17'),(5,'S','Pumas','MX','N','S','LPF','Ppbto','2022-11-16 14:52:09','2022-11-16 14:52:09');
/*!40000 ALTER TABLE `FIFA` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Usuarios`
--

DROP TABLE IF EXISTS `Usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Usuarios` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Usuario` varchar(255) NOT NULL,
  `Nombre` varchar(255) NOT NULL,
  `Apellidos` varchar(255) NOT NULL,
  `Edad` int(3) NOT NULL,
  `Genero` char(1) DEFAULT NULL,
  `Contrasena` varchar(255) NOT NULL,
  `Fecha_Nacimiento` date DEFAULT NULL,
  `Activo` char(1) NOT NULL,
  `Creado` timestamp NOT NULL DEFAULT current_timestamp(),
  `Modificado` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Usuarios`
--

LOCK TABLES `Usuarios` WRITE;
/*!40000 ALTER TABLE `Usuarios` DISABLE KEYS */;
INSERT INTO `Usuarios` VALUES (1,'america@gmail.com','America','Miguel',25,'M','78945','1900-01-01','N','2022-10-25 21:59:25','2022-11-15 16:21:49'),(2,'marion@gmail.com','Marion Melina','Lascurain Parra',11,'M','1234','2010-06-27','S','2022-10-25 22:00:50','2022-10-25 22:00:50'),(3,'Juanito','Juan','Sanchez Cruz',20,'M','12345','2002-05-10','S','2022-10-26 15:21:14','2022-10-26 15:21:14'),(4,'Juanito@gmail.com','Juan','Sanchez Cruz',20,'M','12345','2002-05-10','S','2022-10-26 15:50:17','2022-10-26 15:50:17'),(5,'Maria@gmail.com','Maria','Lopez Lopez',50,'M','12345','1900-01-01','S','2022-10-26 15:52:33','2022-10-26 15:52:33'),(6,'AlexP@gmail.com','Alejandro','Pestañas Vargas',21,'H','2424','2000-11-18','S','2022-11-05 23:27:10','2022-11-05 23:27:10'),(7,'jaime@gmail.com','Jaime','Miguel Vergara',43,'M','$2a$10$vH6L6xzxLDGg.ejVMxhRkuu4eJc0rTmtNiSIk4HBNd8LUAnEgxzmy','1900-01-01','S','2022-11-05 23:48:36','2022-11-06 06:42:00'),(8,'Jaimito@gmail.com','Jaimito','Miguel Parra',22,'H','$2a$10$OKzPGnWJG3Qz7bnkiWDduOZOpghdckVYvkl2wk7rKpU1DwuR7CBpG','2000-09-04','S','2022-11-11 22:34:00','2022-11-11 22:37:22');
/*!40000 ALTER TABLE `Usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-18 10:19:20
