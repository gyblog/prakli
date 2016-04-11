-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2016. Ápr 11. 12:56
-- Kiszolgáló verziója: 10.1.10-MariaDB
-- PHP verzió: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `prakli`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `title` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `text` text COLLATE utf8_hungarian_ci NOT NULL,
  `sender` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `recipient` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `taskreference` int(11) NOT NULL,
  `senton` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `messages`
--

INSERT INTO `messages` (`id`, `title`, `text`, `sender`, `recipient`, `taskreference`, `senton`) VALUES
(1, 'Új Feladat Meghatározva', 'Feladat\n\n Probléma: sdfsafd\n\n Akció: asdfasd', 'nikolett.schramm', 'nikolett.schramm', 0, '2016-04-02 11:18:36'),
(2, 'Új Feladat Meghatározva', 'Feladat\n\n Probléma: sldkfja\n\n Akció: flkajsfd', 'nikolett.schramm', 'tamas.lacher', 0, '2016-04-02 11:34:18'),
(3, 'Új Feladat Meghatározva', 'Feladat\n\n Probléma: fasdf\n\n Akció: fasdfa', 'nikolett.schramm', 'szabolcs.andok', 0, '2016-04-04 11:22:41');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `modified`
--

CREATE TABLE `modified` (
  `id` int(11) NOT NULL,
  `task_id` int(11) NOT NULL,
  `on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `responsible` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `duedate` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `status` varchar(20) COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `modified`
--

INSERT INTO `modified` (`id`, `task_id`, `on`, `responsible`, `duedate`, `status`) VALUES
(1, 2, '2016-04-02 11:36:35', 'tamas.lacher', '2016-04-22 22:00:00', 'P');

-- --------------------------------------------------------

--
-- A nézet helyettes szerkezete `mytasks`
--
CREATE TABLE `mytasks` (
`id` int(11)
,`status` int(11)
,`createdon` timestamp
,`type` varchar(50)
,`duedate` timestamp
,`owner` varchar(50)
,`title` varchar(200)
,`description` text
,`attendees` text
,`responsible` varchar(50)
);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `createdon` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `type` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `duedate` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `owner` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `title` varchar(200) COLLATE utf8_hungarian_ci NOT NULL,
  `description` text COLLATE utf8_hungarian_ci NOT NULL,
  `attendees` text COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `projects`
--

INSERT INTO `projects` (`id`, `status`, `createdon`, `type`, `duedate`, `owner`, `title`, `description`, `attendees`) VALUES
(1, 0, '2016-04-02 11:17:08', 'Lean', '2016-04-20 22:00:00', 'nikolett.schramm', 'gizella', 'egyl', ''),
(2, 25, '2016-04-02 11:17:31', '', '2016-04-29 22:00:00', 'nikolett.schramm', 'fdsfa', 'fasdfad', ''),
(3, 0, '2016-04-02 11:36:05', 'Custom', '2016-05-23 22:00:00', 'balazs.kallai', 'Új Projekt', 'Nakem', 'nikolett.schramm'),
(4, 0, '2016-04-04 11:22:07', 'Custom', '2016-04-27 22:00:00', 'nikolett.schramm', 'még egy', 'projekt', '');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  `inproject_id` int(11) NOT NULL,
  `problem` text COLLATE utf8_hungarian_ci NOT NULL,
  `action` text COLLATE utf8_hungarian_ci NOT NULL,
  `comment` text COLLATE utf8_hungarian_ci NOT NULL,
  `affecting` text COLLATE utf8_hungarian_ci NOT NULL,
  `responsible` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `status` varchar(20) COLLATE utf8_hungarian_ci NOT NULL,
  `createdon` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `duedate` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `closedon` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `tasks`
--

INSERT INTO `tasks` (`id`, `project_id`, `inproject_id`, `problem`, `action`, `comment`, `affecting`, `responsible`, `status`, `createdon`, `duedate`, `closedon`) VALUES
(1, 2, 1, 'sdfsafd', 'asdfasd', '', 'CP', 'nikolett.schramm', 'D', '2016-04-02 11:18:36', '2016-04-20 22:00:00', '0000-00-00 00:00:00'),
(2, 2, 2, 'sldkfja', 'flkajsfd', '', '', 'tamas.lacher', 'P', '2016-04-02 11:34:18', '2016-04-28 22:00:00', '0000-00-00 00:00:00'),
(3, 4, 1, 'fasdf', 'fasdfa', '', '', 'szabolcs.andok', 'Pending', '2016-04-04 11:22:41', '2016-04-27 22:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `users`
--

CREATE TABLE `users` (
  `username` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `password` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `name` text COLLATE utf8_hungarian_ci NOT NULL,
  `supervisor` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `organization` varchar(25) COLLATE utf8_hungarian_ci NOT NULL,
  `role` varchar(20) COLLATE utf8_hungarian_ci NOT NULL,
  `defaultlang` varchar(2) COLLATE utf8_hungarian_ci NOT NULL,
  `emailfreqvency` varchar(2) COLLATE utf8_hungarian_ci NOT NULL DEFAULT 'wk'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `users`
--

INSERT INTO `users` (`username`, `password`, `name`, `supervisor`, `organization`, `role`, `defaultlang`, `emailfreqvency`) VALUES
('balazs.kallai', 'Balazs2015', 'Kállai Balázs', '', 'Operation', 'admin', 'hu', 'wk'),
('georgina.abraham', 'Georgina2015', 'Horváth-Ábrahám Georgina', 'balazs.kallai', 'Finance', 'admin', 'hu', 'wk'),
('nikolett.schramm', 'Nikolett2015', 'Schramm Nikolett', 'balazs.kallai', 'Production', 'admin', 'hu', 'wk'),
('peter.kiss', 'Peter2015', 'Kiss Péter', 'balazs.kallai', 'Engineering', 'admin', 'hu', 'wk'),
('szabolcs.andok', 'Szabolcs2015', 'Andok Szabolcs', 'peter.kiss', 'Engineering', 'employee', 'hu', 'wk'),
('tamas.lacher', 'Tamas2015', 'Lacher Tamás', 'nikolett.schramm', 'Production', 'employee', 'hu', 'wk');

-- --------------------------------------------------------

--
-- Nézet szerkezete `mytasks`
--
DROP TABLE IF EXISTS `mytasks`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `mytasks`  AS  select `projects`.`id` AS `id`,`projects`.`status` AS `status`,`projects`.`createdon` AS `createdon`,`projects`.`type` AS `type`,`projects`.`duedate` AS `duedate`,`projects`.`owner` AS `owner`,`projects`.`title` AS `title`,`projects`.`description` AS `description`,`projects`.`attendees` AS `attendees`,`tasks`.`responsible` AS `responsible` from (`projects` left join `tasks` on((`projects`.`id` = `tasks`.`project_id`))) ;

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `modified`
--
ALTER TABLE `modified`
  ADD PRIMARY KEY (`id`),
  ADD KEY `task_id` (`task_id`);

--
-- A tábla indexei `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `project_id` (`project_id`);

--
-- A tábla indexei `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`username`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT a táblához `modified`
--
ALTER TABLE `modified`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT a táblához `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT a táblához `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `modified`
--
ALTER TABLE `modified`
  ADD CONSTRAINT `modified_ibfk_2` FOREIGN KEY (`task_id`) REFERENCES `tasks` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `tasks_ibfk_2` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
