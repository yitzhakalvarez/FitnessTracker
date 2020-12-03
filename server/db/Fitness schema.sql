-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Fitness Tracker Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Table `Types`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `FitnessTracker_Types` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NOT NULL,
  `update_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Name` VARCHAR(45) NOT NULL,
  `Type_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_FitnessTracker_Types_Types1_idx` (`Type_id` ASC) ,
  UNIQUE INDEX `FitnessTracker_Name_UNIQUE` (`Name` ASC) ,
  CONSTRAINT `fk_FitnessTracker_Types_Types1`
    FOREIGN KEY (`Type_id`)
    REFERENCES `FitnessTracker_Types` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `FitnessTracker_Users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NOT NULL,
  `update_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `FirstName` VARCHAR(45) NOT NULL,
  `LastName` VARCHAR(45) NOT NULL,
  `DOB` DATETIME NULL,
  `Password` VARCHAR(45) NULL,
  `User_Type` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_FitnessTracker_Users_Types1_idx` (`User_Type` ASC) ,
  CONSTRAINT `fk_FitnessTracker_Users_Types1`
    FOREIGN KEY (`User_Type`)
    REFERENCES `FitnessTracker_Types` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ContactMethods`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `FitnessTracker_ContactMethods` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NOT NULL,
  `update_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Type` VARCHAR(45) NOT NULL,
  `Value` VARCHAR(45) NOT NULL,
  `IsPrimary` BIT NOT NULL DEFAULT 0,
  `CanSpam` BIT NOT NULL DEFAULT 0,
  `User_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_FitnessTracker_ContactMethods_Users_idx` (`User_id` ASC) ,
  INDEX `fk_FitnessTracker_ContactMethod_Type_idx` (`Type` ASC) ,
  CONSTRAINT `fk_FitnessTracker_ContactMethods_Users`
    FOREIGN KEY (`User_id`)
    REFERENCES `FitnessTracker_Users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_FitnessTracker_ContactMethod_Type`
    FOREIGN KEY (`Type`)
    REFERENCES `FitnessTracker_Types` (`Name`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Exercise_Types`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `FitnessTracker_Exercise_Types` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NOT NULL,
  `update_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Name` VARCHAR(45) NOT NULL,
  `Type` VARCHAR(45) NOT NULL, -- Strength, Cardio, etc.
  `Muscle_Group` VARCHAR(45) NOT NULL,
  `Video_Url` VARCHAR(500) NOT NULL,
  `Relative_Dificulty` FLOAT NOT NULL DEFAULT '1.0',

  PRIMARY KEY (`id`),
  UNIQUE INDEX `ix_FitnessTracker_Exercise_Types_Name_UNIQUE` (`Name` ASC) ,
  INDEX `fk_FitnessTracker_Exercise_Types_Types1_idx` (`Type` ASC) ,
  CONSTRAINT `fk_FitnessTracker_Exercise_Types_Types1_Types1`
    FOREIGN KEY (`Type`)
    REFERENCES `FitnessTracker_Types` (`Name`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  INDEX `fk_FitnessTracker_Exercise_Types_Muscle_Group_idx` (`Muscle_Group` ASC) ,
  CONSTRAINT `fk_FitnessTracker_Exercise_Types_Muscle_Group`
    FOREIGN KEY (`Muscle_Group`)
    REFERENCES `FitnessTracker_Types` (`Name`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Workouts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `FitnessTracker_Workouts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NOT NULL,
  `update_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Owner_id` INT NOT NULL,
  `Privacy_Setting` INT NULL COMMENT '0 - hidden\n1 - only me\n2 - only friends\n4 - public',
  `Start_Time` DATETIME NOT NULL,
  `End_Time` DATETIME NOT NULL,
  `Exercise_Type` VARCHAR(45) NOT NULL,
  `Note` VARCHAR(4000) NULL,

  -- Cardio Session Detials
  `Distance` FLOAT NULL, -- miles or fractions therof

  -- Strength Session Details
  `Sets` INT NULL,
  `Reps_Per_Set` INT NULL,
  `Weight` FLOAT NULL,

  INDEX `fk_FitnessTracker_Workouts_Users1_idx` (`Owner_id` ASC) ,
  INDEX `fk_FitnessTracker_Workout_Type_idx` (`Exercise_Type` ASC) ,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_FitnessTracker_Workout_Users1`
    FOREIGN KEY (`Owner_id`)
    REFERENCES `FitnessTracker_Users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_FitnessTracker_Workout_Exercise_Types`
    FOREIGN KEY (`Exercise_Type`)
    REFERENCES `FitnessTracker_Exercise_Types` (`Name`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Followers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `FitnessTracker_Followers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NOT NULL,
  `update_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Following_id` INT NOT NULL,
  `Follower_id` INT NOT NULL,
  `IsAccepted` BIT NOT NULL DEFAULT 0,

  PRIMARY KEY (`id`),
  INDEX `fk_FitnessTracker_Followers_Following_idx` (`Following_id` ASC) ,
  CONSTRAINT `fk_FitnessTracker_Followers_Following`
    FOREIGN KEY (`Following_id`)
    REFERENCES `FitnessTracker_Users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  INDEX `fk_FitnessTracker_Followers_Follower_idx` (`Follower_id` ASC) ,
  CONSTRAINT `fk_FitnessTracker_Followers_Follower`
    FOREIGN KEY (`Follower_id`)
    REFERENCES `FitnessTracker_Users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `Comments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `FitnessTracker_Comments` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NOT NULL,
  `update_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Text` VARCHAR(4000) NULL,
  `Workout_id` INT NOT NULL,
  `Owner_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_FitnessTracker_Comments_Workouts1_idx` (`Workout_id` ASC) ,
  INDEX `fk_FitnessTracker_Comments_Users1_idx` (`Owner_id` ASC) ,
  CONSTRAINT `fk_FitnessTracker_Comments_Workouts1`
    FOREIGN KEY (`Workout_id`)
    REFERENCES `FitnessTracker_Workouts` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_FitnessTracker_Comments_Users1`
    FOREIGN KEY (`Owner_id`)
    REFERENCES `FitnessTracker_Users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Reactions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `FitnessTracker_Reactions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NOT NULL,
  `update_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Emoji` VARCHAR(2) NULL,
  `Workout_id` INT NOT NULL,
  `Owner_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_FitnessTracker_Comments_Workouts1_idx` (`Workout_id` ASC) ,
  INDEX `fk_FitnessTracker_Comments_Users1_idx` (`Owner_id` ASC) ,
  CONSTRAINT `fk_FitnessTracker_Comments_Workouts10`
    FOREIGN KEY (`Workout_id`)
    REFERENCES `FitnessTracker_Workouts` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_FitnessTracker_Comments_Users10`
    FOREIGN KEY (`Owner_id`)
    REFERENCES `FitnessTracker_Users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Emojis`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `FitnessTracker_Emojis` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NOT NULL,
  `update_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Name` VARCHAR(45) NOT NULL,
  `Description` VARCHAR(500) NULL,
  `Code` VARCHAR(2) NOT NULL,
  `Type_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `FitnessTracker_Name_UNIQUE` (`Name` ASC) ,
  UNIQUE INDEX `FitnessTracker_Code_UNIQUE` (`Code` ASC) ,
  INDEX `fk_Emojis_Types1_idx` (`Type_id` ASC) ,
  CONSTRAINT `fk_FitnessTracker_Emojis_Types1`
    FOREIGN KEY (`Type_id`)
    REFERENCES `FitnessTracker_Types` (`id`)
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
INSERT INTO `FitnessTracker_Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (1, 'Now()', DEFAULT, 'Types', 1);
INSERT INTO `FitnessTracker_Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (2, 'Now()', DEFAULT, 'User Types', 1);
INSERT INTO `FitnessTracker_Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (3, 'Now()', DEFAULT, 'Media Types', 1);
INSERT INTO `FitnessTracker_Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (4, 'Now()', DEFAULT, 'Contact Method Types', 1);
INSERT INTO `FitnessTracker_Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (20, 'Now()', DEFAULT, 'Emoji Types', 1);
INSERT INTO `FitnessTracker_Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (5, 'Now()', DEFAULT, 'Admin', 2);
INSERT INTO `FitnessTracker_Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (6, 'Now()', DEFAULT, 'User', 2);
INSERT INTO `FitnessTracker_Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (DEFAULT, 'Now()', DEFAULT, 'image/gif', 3);
INSERT INTO `FitnessTracker_Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (DEFAULT, 'Now()', DEFAULT, 'image/jpeg', 3);
INSERT INTO `FitnessTracker_Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (DEFAULT, 'Now()', DEFAULT, 'image/pngvideo', 3);
INSERT INTO `FitnessTracker_Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (DEFAULT, 'Now()', DEFAULT, 'video/webm', 3);
INSERT INTO `FitnessTracker_Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (DEFAULT, 'Now()', DEFAULT, 'video/ogg', 3);
INSERT INTO `FitnessTracker_Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (DEFAULT, 'Now()', DEFAULT, 'Email', 4);
INSERT INTO `FitnessTracker_Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (DEFAULT, 'Now()', DEFAULT, 'Cell Phone', 4);
INSERT INTO `FitnessTracker_Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES (420, 'Now()', DEFAULT, 'Reactions', 20);

COMMIT;


-- -----------------------------------------------------
-- Data for table `Emojis`
-- -----------------------------------------------------
START TRANSACTION;
INSERT INTO `FitnessTracker_Emojis` (`id`, `created_at`, `update_at`, `Name`, `Description`, `Code`, `Type_id`) VALUES (DEFAULT, 'Now()', '', 'red_heart', 'red heart - U+2764', '❤️', 420);
COMMIT;

-- -----------------------------------------------------
-- Other tables to think about
-- -----------------------------------------------------

-- Track water consumption
-- Track weight ofer time
-- Keep track of goals (and if/when the user reaches them)