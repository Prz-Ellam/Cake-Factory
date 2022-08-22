CREATE DATABASE cake_factory;

USE cake_factory;

-- Users
CREATE TABLE users(
    user_id             INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email               VARCHAR(255) NOT NULL,
    username            VARCHAR(60) NOT NULL,
    user_role           INT NOT NULL,
    birth_date          DATETIME NOT NULL,
    first_name          VARCHAR(60) NOT NULL,
    last_name           VARCHAR(60) NOT NULL,
    password            VARCHAR(100) NOT NULL,
    gender              VARCHAR(20) NOT NULL,
    profile_picture     INT NOT NULL,
    created_at          TIMESTAMP,
    modified_at         TIMESTAMP
);

-- Products
CREATE TABLE products(
    product_id          INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name                VARCHAR(60) NOT NULL,
    description         VARCHAR(200) NOT NULL,
    price               FLOAT,
    stock               INT,
    rate                INT,
    created_at          TIMESTAMP NOT NULL,
    modified_at         TIMESTAMP,
    created_by          INT NOT NULL,
    modified_by         INT
);

-- Categories
CREATE TABLE categories(
    category_id         INT NOT NULL AUTOINCREMENT PRIMARY KEY,
    name                VARCHAR(60) NOT NULL,
    description         VARCHAR(200),
    created_at          TIMESTAMP NOT NULL,
    modified_at         TIMESTAMP,
    created_by          INT NOT NULL,
    modified_by         INT
);

-- Wishlists

-- Shopping Cart

-- Sells

-- Chats

-- Messages

-- Comments