-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 16-Out-2019 às 21:29
-- Versão do servidor: 10.1.38-MariaDB
-- versão do PHP: 7.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fakebook`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `categories`
--

INSERT INTO `categories` (`id`, `description`) VALUES
(3, 'Biológicas'),
(4, 'Dúvidas'),
(1, 'Exatas'),
(2, 'Humanas');

-- --------------------------------------------------------

--
-- Estrutura da tabela `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `author` int(11) NOT NULL,
  `publication` int(11) NOT NULL,
  `content` tinytext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `comments`
--

INSERT INTO `comments` (`id`, `author`, `publication`, `content`) VALUES
(11, 14, 24, 'Eu digo glória!');

-- --------------------------------------------------------

--
-- Estrutura da tabela `courses`
--

CREATE TABLE `courses` (
  `id` int(11) NOT NULL,
  `description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `courses`
--

INSERT INTO `courses` (`id`, `description`) VALUES
(1, 'Análise e Desenvolvimento de Sistemas'),
(2, 'Jogos digitais'),
(3, 'Segurança da Informação');

-- --------------------------------------------------------

--
-- Estrutura da tabela `publications`
--

CREATE TABLE `publications` (
  `id` int(11) NOT NULL,
  `user` int(11) NOT NULL,
  `category` int(11) NOT NULL,
  `content` text NOT NULL,
  `attach` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `publications`
--

INSERT INTO `publications` (`id`, `user`, `category`, `content`, `attach`) VALUES
(24, 13, 3, 'Dimas. O primeiro vida loka da história!', '{\"links\":[],\"references\":[],\"abstracts\":[]}');

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `course` int(11) DEFAULT NULL,
  `birth` date NOT NULL,
  `admin` int(11) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `avatar`, `course`, `birth`, `admin`) VALUES
(13, 'Eduardo Poças', 'dupocas@gmail.com', '123456', 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman2-512.png', 1, '1997-01-17', 0),
(14, 'Administrador', 'admin', 'admin', 'http://www.monteirolobato.edu.br/public/assets/admin/images/avatars/avatar11_big@2x.png', 1, '1900-01-01', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `description` (`description`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `author` (`author`),
  ADD KEY `publication` (`publication`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `description` (`description`);

--
-- Indexes for table `publications`
--
ALTER TABLE `publications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user` (`user`),
  ADD KEY `category` (`category`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `course` (`course`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `publications`
--
ALTER TABLE `publications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`author`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`publication`) REFERENCES `publications` (`id`);

--
-- Limitadores para a tabela `publications`
--
ALTER TABLE `publications`
  ADD CONSTRAINT `publications_ibfk_1` FOREIGN KEY (`user`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `publications_ibfk_2` FOREIGN KEY (`category`) REFERENCES `categories` (`id`);

--
-- Limitadores para a tabela `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`course`) REFERENCES `courses` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
