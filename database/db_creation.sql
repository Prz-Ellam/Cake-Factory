CREATE DATABASE IF NOT EXISTS cake_factory;

USE cake_factory;

-- Users
CREATE TABLE users(
    user_id             INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email               VARCHAR(255) UNIQUE NOT NULL,
    username            VARCHAR(60) UNIQUE NOT NULL,
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

CREATE TABLE user_roles(
    user_role_id        INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name                VARCHAR(30) NOT NULL,
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
    rate                SMALLINT,
    created_at          TIMESTAMP NOT NULL,
    modified_at         TIMESTAMP,
    created_by          INT NOT NULL,
    modified_by         INT
);

-- Categories
CREATE TABLE categories(
    category_id         INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name                VARCHAR(60) NOT NULL,
    description         VARCHAR(200),
    created_at          TIMESTAMP NOT NULL,
    modified_at         TIMESTAMP,
    created_by          INT NOT NULL,
    modified_by         INT
);

-- Wishlists
CREATE TABLE wishlists(
    wishlist_id         INT,
    name                VARCHAR(60),
    description         VARCHAR(200),
    image               INT,
    user_id             INT NOT NULL
);

CREATE TABLE IF NOT EXISTS images(
    image_id            INT NOT NULL,
    content             LONGBLOB NOT NULL,
    created_by          TIMESTAMP NOT NULL
);

CREATE TABLE wishlist_objects(
    wishlist_object_id  INT,
    product_id          INT,
    wishlist_id         INT
);

-- Shopping Cart
CREATE TABLE shopping_carts(
    shopping_cart_id    INT,
    user_id             INT
);

CREATE TABLE shopping_cart_items(
    shopping_cart_item_id   INT,
    shopping_cart_id        INT
);

-- Shoppings
CREATE TABLE shoppings(
    shopping_id         INT,
    order_id            INT,
    product_id          INT
);

-- Orders
CREATE TABLE orders(
    order_id            INT,
    user_id             INT
);

-- Chats
CREATE TABLE chats(
    chat_id             INT
);

-- Messages
CREATE TABLE messages(
    message_id          INT,
    message             VARCHAR(255),
    chat_id             INT
);

-- Comments
CREATE TABLE comments(
    comment_id          INT,
    message             VARCHAR(255),
    product_id          INT,
    user_id             INT,
    created_at          TIMESTAMP,
    modified_at         TIMESTAMP
);

CREATE TABLE rates(
    rate_id             INT NOT NULL,
    rate                INT NOT NULL
    product_id          INT NOT NULL,
    user_id             INT NOT NULL
)