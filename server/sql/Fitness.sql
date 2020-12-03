-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Fitness Tracker database schema
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Table `Types`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Types` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NOT NULL,
  `update_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Name` VARCHAR(45) NOT NULL,
  `Type_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Types_Types1_idx` (`Type_id` ASC) ,
  UNIQUE INDEX `Name_UNIQUE` (`Name` ASC) ,
  CONSTRAINT `fk_Types_Types1`
    FOREIGN KEY (`Type_id`)
    REFERENCES `Types` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NOT NULL,
  `update_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Username` VARCHAR(45) NOT NULL,
  `Firstname` VARCHAR(45) NOT NULL,
  `Lastname` VARCHAR(45) NOT NULL,
  `DOB` DATETIME NULL,
  `Password` VARCHAR(5000) NULL,
  `User_Type` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Users_Types1_idx` (`User_Type` ASC) ,
  CONSTRAINT `fk_Users_Types1`
    FOREIGN KEY (`User_Type`)
    REFERENCES `Types` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ContactMethods`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ContactMethods` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NOT NULL,
  `update_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Type` VARCHAR(45) NOT NULL,
  `Value` VARCHAR(45) NOT NULL,
  `IsPrimary` BIT NOT NULL DEFAULT 0,
  `CanSpam` BIT NOT NULL DEFAULT 0,
  `User_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_ContactsMethods_Users_idx` (`User_id` ASC) ,
  INDEX `fk_ContactsMethods_Type_idx` (`Type` ASC) ,
  CONSTRAINT `fk_ContactsMethods_Users`
    FOREIGN KEY (`User_id`)
    REFERENCES `Users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ContactsMethods_Type`
    FOREIGN KEY (`Type`)
    REFERENCES `Types` (`Name`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Exercise_Types`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Exercise_Types` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NOT NULL,
  `update_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Exercise_Types_Name` VARCHAR(45) NOT NULL,
  `Exercise_Types_Type` VARCHAR(45) NOT NULL,
  `MET_Score` FLOAT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `Exercise_Types_Name_UNIQUE` (`Exercise_Types_Name` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Exercises`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Exercises` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NOT NULL,
  `update_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Time_Spent` INT NOT NULL,
  `Calories_Burned` INT NOT NULL,
  `Favorite_Exercise` INT NOT NULL,
  `Exercise_Type` VARCHAR(45) NOT NULL,
  `Exercise_Type_id` INT NOT NULL,
  `Distance` FLOAT NULL,
  `Exercise_Sets` INT NULL,
  `Reps_Per_Set` INT NULL,
  `Lifting_Weight` FLOAT NULL,
  `BodyWeight` FLOAT NULL,
  `User_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Exercises_Type_idx` (`Exercise_Type_id` ASC) ,
  INDEX `fk_Exercises_Exercises_Types1_idx` (`Exercise_Type` ASC) ,
  INDEX `fk_Exercises_Users_idx` (`User_id` ASC) ,
  CONSTRAINT `fk_Exercises_Exercises_Types`
    FOREIGN KEY (`Exercise_Type_id`)
    REFERENCES `Exercise_Types` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Exercises_Exercises_Types1`
    FOREIGN KEY (`Exercise_Type`)
    REFERENCES `Exercise_Types` (`Exercise_Types_Name`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Exercises_Users`
    FOREIGN KEY (`User_id`)
    REFERENCES `Users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Friendlist`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Friendlist` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NOT NULL,
  `update_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Friends_url_page` VARCHAR(2048) NULL,
  `Friends_id` INT NOT NULL,
  `Owner_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Friends_Users_idx` (`Friends_id` ASC) ,
  INDEX `fk_Friends_Users_idx1` (`Owner_id` ASC) ,
  CONSTRAINT `fk_Friends_Users`
    FOREIGN KEY (`Friends_id`)
    REFERENCES `Users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Friends_Users1`
    FOREIGN KEY (`Owner_id`)
    REFERENCES `Users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Requests`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Requests` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NOT NULL,
  `update_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `user_id` INT NOT NULL,
  `friends_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Requests_Users_idx` (`user_id` ASC) ,
  INDEX `fk_Requests_Friends_idx` (`friends_id` ASC) ,
  CONSTRAINT `fk_Requests_Users`
    FOREIGN KEY (`user_id`)
    REFERENCES `Users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Requests_Friends`
    FOREIGN KEY (`friends_id`)
    REFERENCES `Friendlist` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Reactions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Reactions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NOT NULL,
  `update_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Emoji` VARCHAR(2) NULL,
  `Exercise_id` INT NOT NULL,
  `Owner_id` INT NOT NULL,
  `Like_Exercise` BIT NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  INDEX `fk_Reactions_Exercises_idx` (`Exercise_id` ASC) ,
  INDEX `fk_Reactions_Users_idx` (`Owner_id` ASC) ,
  CONSTRAINT `fk_Reactions_Exercises`
    FOREIGN KEY (`Exercise_id`)
    REFERENCES `Exercises` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Reactions_Users`
    FOREIGN KEY (`Owner_id`)
    REFERENCES `Users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Comments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Comments` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NOT NULL,
  `update_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Text` VARCHAR(4000) NULL,
  `Exercise_id` INT NOT NULL,
  `Owner_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_comments_exercises_idx` (`Exercise_id` ASC) ,
  INDEX `fk_comments_users_idx` (`Owner_id` ASC) ,
  CONSTRAINT `fk_comments_exercises`
    FOREIGN KEY (`Exercise_id`)
    REFERENCES `Exercises` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_comments_users`
    FOREIGN KEY (`Owner_id`)
    REFERENCES `Users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Emojis`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Emojis` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NOT NULL,
  `update_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Name` VARCHAR(45) NOT NULL,
  `Description` VARCHAR(500) NULL,
  `Code` VARCHAR(2) NOT NULL,
  `Type_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `Name_UNIQUE` (`Name` ASC) ,
  UNIQUE INDEX `Code_UNIQUE` (`Code` ASC) ,
  INDEX `fk_Emojis_Types_idx` (`Type_id` ASC) ,
  CONSTRAINT `fk_Emojis_Types`
    FOREIGN KEY (`Type_id`)
    REFERENCES `Types` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `Types`
-- -----------------------------------------------------
START TRANSACTION;
INSERT INTO `Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (1, 'Now()', DEFAULT, 'Types', 1);
INSERT INTO `Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (2, 'Now()', DEFAULT, 'User Types', 1);
INSERT INTO `Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (3, 'Now()', DEFAULT, 'Media Types', 1);
INSERT INTO `Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (4, 'Now()', DEFAULT, 'Contact Method Types', 1);
INSERT INTO `Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (20, 'Now()', DEFAULT, 'Emoji Types', 1);
INSERT INTO `Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (5, 'Now()', DEFAULT, 'Admin', 2);
INSERT INTO `Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (6, 'Now()', DEFAULT, 'User', 2);
INSERT INTO `Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (DEFAULT, 'Now()', DEFAULT, 'image/gif', 3);
INSERT INTO `Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (DEFAULT, 'Now()', DEFAULT, 'image/jpg', 3);
INSERT INTO `Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (DEFAULT, 'Now()', DEFAULT, 'image/png', 3);
INSERT INTO `Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (DEFAULT, 'Now()', DEFAULT, 'video/webm', 3);
INSERT INTO `Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (DEFAULT, 'Now()', DEFAULT, 'video/ogg', 3);
INSERT INTO `Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (DEFAULT, 'Now()', DEFAULT, 'Email', 4);
INSERT INTO `Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (DEFAULT, 'Now()', DEFAULT, 'Cell Phone', 4);
INSERT INTO `Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (420, 'Now()', DEFAULT, 'Reactions', 20);
COMMIT;


-- -----------------------------------------------------
-- Data for table `Emojis`
-- -----------------------------------------------------
START TRANSACTION;
INSERT INTO `Emojis` (`id`, `created_at`, `update_at`, `Name`, `Description`, `Code`, `Type_id`) VALUES (DEFAULT, 'Now()', '', 'red_heart', 'red heart - U+2764', '❤️', 420);

COMMIT;

