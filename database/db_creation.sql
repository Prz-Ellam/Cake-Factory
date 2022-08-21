CREATE DATABASE cake_factory;

USE cake_factory;

CREATE TABLE users(
    user_id         INT NOT NULL AUTOINCREMENT,
    email           VARCHAR(30),
    username        VARCHAR(50),
    birthdate       DATETIME,
    first_name      VARCHAR(50),
    last_name       VARCHAR(50),
    user_role       INT,
);