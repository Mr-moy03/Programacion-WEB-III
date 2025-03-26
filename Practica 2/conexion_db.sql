-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-03-2025 a las 04:46:18
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `conexion_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `db_conexion`
--

CREATE TABLE `db_conexion` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `edad` int(100) NOT NULL,
  `ciudad` varchar(100) NOT NULL,
  `correo` varchar(100) NOT NULL
  
  
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `db_conexion`
--

INSERT INTO `db_conexion` (`id`, `nombre`, `edad`, `ciudad`, `correo`) VALUES
(1, 'Juan Perez', 21, 'Lapaz','juan.perez@ejemplo.com'),
(2, 'Mayra Vela', 22, 'Lapaz', 'may.vel@ejemplo.com'),
(3, 'Alicia Vela',12, 'Lapaz', 'alicia.vela@ejemplo.com'),
(4, 'Luis Pereza',31, 'ElAlto', 'luis.pereza@ejemplo.com'),
(5, 'Carlos Huanca',21, 'Lapaz', 'carlos.hun@ejemplo.com'),
(6, 'Eva Huanca', 31, 'Lapaz','eva.huanca@ejemplo.com'),
(7, 'Alan Aquino', 20, 'ElAlto','alan.aqui@ejemplo.com'),
(8, 'Ruben Morales', 24, 'Lapaz','ruben.morales@ejemplo.com'),
(9, 'Ilse Cazas', 23, 'Lapaz','il.cazas@ejemplo.com'),
(10, 'Alejandro Aquino',20, 'Lapaz', 'ale.aquino@ejemplo.com');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `db_conexion`
--
ALTER TABLE `db_conexion`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `db_conexion`
--
ALTER TABLE `db_conexion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
