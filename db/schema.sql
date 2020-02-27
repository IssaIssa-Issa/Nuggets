DROP DATABASE IF EXISTS nuggets;
CREATE DATABASE nuggets;
USE nuggets;

CREATE TABLE `chores` (
    `chores_id` int NOT NULL AUTO_INCREMENT,
    `admin_id` int NOT NULL,
    `chore_name` varchar(255) NOT NULL,
    `date_created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `date_approved` datetime DEFAULT NULL, 
    `date_completed` datetime DEFAULT NULL,
    `completed_by_child_id` int DEFAULT NULL,
    `amount` decimal NOT NULL,
    `child_comments` varchar(255) DEFAULT NULL,
    `admin_comments` varchar(255) DEFAULT NULL,
    PRIMARY KEY (`chores_id`)
); 
CREATE TABLE `transactions` (
    `transaction_id` int NOT NULL AUTO_INCREMENT,
    `amount` decimal NOT NULL,
    `admin_id` int NOT NULL,
    `child_id` int NOT NULL,
    `admin_comments` varchar(255) DEFAULT NULL,
    `date_created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`transaction_id`)
);
 CREATE TABLE `admin` (
    `admin_id` int NOT NULL AUTO_INCREMENT,
    `admin_name` varchar(255) NOT NULL,
    PRIMARY KEY (`admin_id`)
);
 CREATE TABLE `children` (
    `children_id` int NOT NULL AUTO_INCREMENT,
    `child_name` varchar(255) NOT NULL,
    `admin_id` int NOT NULL,
    `balance` decimal NOT NULL,
    PRIMARY KEY (`children_id`)
);
 CREATE TABLE `login` (
    `login_id` int NOT NULL AUTO_INCREMENT,
    `username` varchar(255) NOT NULL,
    `password` varchar(255) NOT NULL,
    `admin_id` int NOT NULL,
    `child_id` int NOT NULL,
    PRIMARY KEY (`login_id`)
)