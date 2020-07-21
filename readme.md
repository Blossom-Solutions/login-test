 # A simple Login Test
 Using Node JS, Express and MySQL to achieve a simple login application

## How to use
Simply clone in a directory of your choice, and run [npm](https://www.npmjs.com)install.
The Front-End can be found in /public/ , costumize it to your own liking.

## Requirements
- [nodeJS](https://nodejs.org/en/download/)
- Express 
- MySQL and a Database

## Usage

First you need a database, for that you can use this snippet
```
CREATE DATABASE IF NOT EXISTS `nodelogin` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `nodelogin`;

CREATE TABLE IF NOT EXISTS `accounts` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

INSERT INTO `accounts` (`id`, `username`, `password`, `email`) VALUES (1, 'test', 'test', 'test@test.com');

ALTER TABLE `accounts` ADD PRIMARY KEY (`id`);
ALTER TABLE `accounts` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
```

Then run the express app and you are good to go!, beware that this doesn't have any security!, make sure to hash passwords, you can use BCRYPT or anything to your liking.