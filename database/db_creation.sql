CREATE DATABASE IF NOT EXISTS cake_factory;

USE cake_factory;

-- Users
CREATE TABLE IF NOT EXISTS users(
    user_id                     INT NOT NULL AUTO_INCREMENT,
    email                       VARCHAR(255) NOT NULL UNIQUE,
    username                    VARCHAR(18) NOT NULL UNIQUE,
    first_name                  VARCHAR(50) NOT NULL,
    last_name                   VARCHAR(50) NOT NULL,
    birth_date                  DATE NOT NULL,
    password                    VARCHAR(255) NOT NULL,
    sex                         SMALLINT NOT NULL,
    visibility                  SMALLINT NOT NULL,
    user_role                   INT NOT NULL,
    profile_picture             INT NOT NULL,
    created_at                  TIMESTAMP NOT NULL DEFAULT NOW(),
    modified_at                 TIMESTAMP,
    active                      BOOLEAN NOT NULL DEFAULT TRUE,
    CONSTRAINT users_pk
        PRIMARY KEY (user_id)
);

-- User roles
CREATE TABLE user_roles(
    user_role_id                INT NOT NULL AUTO_INCREMENT,
    name                        VARCHAR(30) NOT NULL,
    created_at                  TIMESTAMP NOT NULL DEFAULT NOW(),
    modified_at                 TIMESTAMP,
    active                      BOOLEAN NOT NULL DEFAULT TRUE,
    CONSTRAINT user_roles_pk
        PRIMARY KEY (user_role_id)
);

-- Products
CREATE TABLE products(
    product_id                  INT NOT NULL AUTO_INCREMENT,
    name                        VARCHAR(50) NOT NULL,
    description                 VARCHAR(200) NOT NULL,
    is_quotable                 BOOLEAN NOT NULL,
    price                       DECIMAL(15, 2),
    stock                       INT NOT NULL,
    user_id                     INT NOT NULL,
    approved                    BOOLEAN NOT NULL DEFAULT FALSE,
    approved_by                 INT NOT NULL,
    created_at                  TIMESTAMP NOT NULL DEFAULT NOW(),
    modified_at                 TIMESTAMP,
    active                      BOOLEAN NOT NULL DEFAULT TRUE,
    CONSTRAINT products_pk
        PRIMARY KEY (product_id)
);

-- Categories
CREATE TABLE categories(
    category_id                 INT NOT NULL AUTO_INCREMENT,
    name                        VARCHAR(50) NOT NULL,
    description                 VARCHAR(200),
    user_id                     INT NOT NULL,
    created_at                  TIMESTAMP NOT NULL DEFAULT NOW(),
    modified_at                 TIMESTAMP,
    active                      BOOLEAN NOT NULL DEFAULT TRUE,
    CONSTRAINT categories_pk
        PRIMARY KEY (category_id)
);

-- Products Categories
CREATE TABLE products_categories(
    product_category_id         INT NOT NULL AUTO_INCREMENT,
    product_id                  INT NOT NULL,
    category_id                 INT NOT NULL,
    created_at                  TIMESTAMP NOT NULL DEFAULT NOW(),
    modified_at                 TIMESTAMP,
    active                      BOOLEAN NOT NULL DEFAULT TRUE,
    CONSTRAINT products_categories_pk
        PRIMARY KEY (product_category_id)
);

-- Comments
CREATE TABLE reviews(
    review_id                   INT NOT NULL AUTO_INCREMENT,
    message                     VARCHAR(255) NOT NULL,
    rate                        SMALLINT NOT NULL
    product_id                  INT NOT NULL,
    user_id                     INT NOT NULL,
    created_at                  TIMESTAMP NOT NULL DEFAULT NOW(),
    modified_at                 TIMESTAMP,
    active                      BOOLEAN NOT NULL DEFAULT TRUE,
    CONSTRAINT reviews_pk
        PRIMARY KEY (review_id)
);

-- Wishlists
CREATE TABLE wishlists(
    wishlist_id                 INT NOT NULL AUTO_INCREMENT,
    name                        VARCHAR(50) NOT NULL,
    description                 VARCHAR(200) NOT NULL,
    user_id                     INT NOT NULL,
    created_at                  TIMESTAMP NOT NULL DEFAULT NOW(),
    modified_at                 TIMESTAMP,
    active                      BOOLEAN NOT NULL DEFAULT TRUE,
    CONSTRAINT wishlists_pk
        PRIMARY KEY (wishlist_id)
);

-- Wishlist Objects
CREATE TABLE wishlist_objects(
    wishlist_object_id          INT NOT NULL AUTO_INCREMENT,
    product_id                  INT NOT NULL,
    wishlist_id                 INT NOT NULL,
    created_at                  TIMESTAMP NOT NULL DEFAULT NOW(),
    modified_at                 TIMESTAMP,
    active                      BOOLEAN NOT NULL DEFAULT TRUE,
    CONSTRAINT wishlist_objects_pk
        PRIMARY KEY (wishlist_object_id)
);

-- Shopping Cart
CREATE TABLE shopping_carts(
    shopping_cart_id            INT NOT NULL AUTO_INCREMENT,
    user_id                     INT NOT NULL,
    created_at                  TIMESTAMP NOT NULL DEFAULT NOW(),
    modified_at                 TIMESTAMP NOT NULL,
    active                      BOOLEAN DEFAULT TRUE,
    CONSTRAINT shopping_carts_pk
        PRIMARY KEY (shopping_cart_id)
);

-- Shopping Cart Items
CREATE TABLE shopping_cart_items(
    shopping_cart_item_id       INT NOT NULL AUTO_INCREMENT,
    quantity                    SMALLINT NOT NULL,
    shopping_cart_id            INT NOT NULL,
    product_id                  INT NOT NULL,
    created_at                  TIMESTAMP NOT NULL DEFAULT NOW(),
    modified_at                 TIMESTAMP,
    active                      BOOLEAN DEFAULT TRUE
);


-- Orders
CREATE TABLE orders(
    order_id                    INT NOT NULL AUTO_INCREMENT,
    payment_method              VARCHAR(100),
    phone                       BOOLEAN,
    street                      BOOLEAN,
    number                      BOOLEAN,
    city                        BOOLEAN,
    state                       BOOLEAN,
    postal_code                 VARCHAR(6),

    card_number                 INT,
    `year`                      INT,
    `month`                     INT,
    security_code               INT,
    user_id                     INT,
    
    created_at                  TIMESTAMP NOT NULL DEFAULT NOW(),
    modified_at                 TIMESTAMP,
    active                      BOOLEAN NOT NULL DEFAULT TRUE
);

-- Shoppings
CREATE TABLE shoppings(
    shopping_id                 INT NOT NULL AUTO_INCREMENT,
    quantity                    SMALLINT NOT NULL,
    amount                      DECIMAL (15, 2) NOT NULL,
    order_id                    INT NOT NULL,
    product_id                  INT NOT NULL,
    created_at                  TIMESTAMP NOT NULL DEFAULT NOW(),
    modified_at                 TIMESTAMP,
    active                      BOOLEAN NOT NULL DEFAULT TRUE
);


CREATE TABLE IF NOT EXISTS multimedia_types(
    multimedia_id               INT NOT NULL AUTO_INCREMENT,
    multimedia_name             VARCHAR(30) NOT NULL,
    created_at                  TIMESTAMP NOT NULL DEFAULT NOW(),
    modified_at                 TIMESTAMP,
    active                      BOOLEAN NOT NULL DEFAULT TRUE
);


CREATE TABLE IF NOT EXISTS multimedia_entities(
    multimedia_entity_id        INT NOT NULL AUTO_INCREMENT,
    entity_id                   INT NOT NULL,
    entity_type                 INT NOT NULL,
    created_at                  TIMESTAMP NOT NULL DEFAULT NOW(),
    modified_at                 TIMESTAMP,
    active                      BOOLEAN NOT NULL DEFAULT TRUE
);

-- Max de tamaño es 16MB pero solo admitiremos archivos de 8MB o menos, como discord
CREATE TABLE IF NOT EXISTS images(
    image_id                    INT NOT NULL AUTO_INCREMENT,
    image_name                  VARCHAR(255) NOT NULL,
    image_size                  BIGINT NOT NULL,
    image_content               MEDIUMBLOB NOT NULL,
    image_mime_type             VARCHAR(30) NOT NULL,
    multimedia_entity_id        INT NOT NULL,
    created_at                  TIMESTAMP NOT NULL DEFAULT NOW(),
    modified_at                 TIMESTAMP,
    active                      BOOLEAN NOT NULL DEFAULT TRUE,
    CONSTRAINT images_pk
        PRIMARY KEY (image_id)
) DEFAULT CHARSET = utf8 COLLATE = utf8_unicode_ci;

-- Max de LONGBLOB es 4GB pero no aceptaron mucho tampoco, porque 4GB es demasiado
CREATE TABLE IF NOT EXISTS videos(
    video_id                    INT NOT NULL AUTO_INCREMENT,
    video_name                  VARCHAR(255) NOT NULL,
    video_size                  BIGINT NOT NULL,
    video_content               LONGBLOB NOT NULL,
    video_mime_type             VARCHAR(30) NOT NULL,
    multimedia_entity_id        INT NOT NULL,
    created_at                  TIMESTAMP NOT NULL DEFAULT NOW(),
    modified_at                 TIMESTAMP,
    active                      BOOLEAN NOT NULL DEFAULT TRUE,
    CONSTRAINT videos_pk
        PRIMARY KEY (video_id)
);

-- Chats
CREATE TABLE chats(
    chat_id                     INT NOT NULL AUTO_INCREMENT,
    created_at                  TIMESTAMP NOT NULL DEFAULT NOW(),
    modified_at                 TIMESTAMP,
    active                      BOOLEAN DEFAULT TRUE
    CONSTRAINT chats_pk
        PRIMARY KEY (chat_id)
);

-- Chat Participants
CREATE TABLE chat_participants(
    chat_participant_id         INT NOT NULL AUTO_INCREMENT,
    chat_id                     INT NOT NULL,
    user_id                     INT NOT NULL,
    created_at                  TIMESTAMP NOT NULL DEFAULT NOW(),
    modified_at                 TIMESTAMP,
    active                      BOOLEAN NOT NULL DEFAULT TRUE,
    CONSTRAINT chat_participants_pk
        PRIMARY KEY (chat_participant_id)
);

-- Chat Messages
CREATE TABLE chat_messages(
    chat_message_id             INT NOT NULL AUTO_INCREMENT,
    message_content             VARCHAR(255) NOT NULL,
    chat_participant_id         INT NOT NULL,
    created_at                  TIMESTAMP NOT NULL DEFAULT NOW(),
    modified_at                 TIMESTAMP,
    active                      BOOLEAN NOT NULL DEFAULT TRUE,
    CONSTRAINT chat_messages_pk
        PRIMARY KEY (chat_message_id)
);

-- Chat files
-- imagenes, videos, documentos, audios
CREATE TABLE chat_files(
    chat_file_id                INT NOT NULL AUTO_INCREMENT,
    file_content                MEDIUMBLOB NOT NULL,
    chat_participant_id         INT NOT NULL,
    created_at                  TIMESTAMP NOT NULL DEFAULT NOW(),
    modified_at                 TIMESTAMP,
    active                      BOOLEAN NOT NULL DEFAULT TRUE,
    CONSTRAINT chat_files_pk
        PRIMARY KEY (chat_file_id)
);





-- https://mysql.tutorials24x7.com/blog/guide-to-design-database-for-shopping-cart-in-mysql
-- https://fabric.inc/blog/shopping-cart-database-design/
-- https://fabric.inc/blog/ecommerce-database-design-example/



