<?php

require_once 'core/Application.php';
require_once 'src/controllers/UserController.php';
require_once 'src/controllers/ProductController.php';
require_once 'src/controllers/CategoryController.php';
require_once 'src/controllers/ImageController.php';

use core\Application;
use Controllers\UserController;
use Controllers\ProductController;
use Controllers\CategoryController;
use Controllers\ImageController;

$application = new Application();

// Usuarios
$application->get('/api/v1/users', [new UserController(), 'registerUser']);
$application->post('/api/v1/users', [new UserController(), 'registerUser']);
$application->post('/api/v1/login', [new UserController(), 'loginUser']);

$application->get('/token', [ new UserController(), 'token' ]);
$application->post('/session', [ new UserController(), 'expireSession' ]);
$application->post('/isEmailAvailable', [ new UserController(), 'isEmailAvailable' ]);

// Productos
$application->post('/api/v1/products', [ new ProductController(), 'createProduct' ]);
/*
$application->get('/api/v1/products', [ new ProductController(), 'getProducts' ]);
$application->get('/api/v1/products/{id}', [ new ProductController(), 'getUserProducts' ]);
*/

$application->get('/api/v1/images', [ new ImageController(), 'getImage' ]);

// Categorias
$application->post('/api/v1/categories', [ new CategoryController(), 'createCategory' ]);

// Vistas
$application->setViewPath('src/views');
$application->view('/home', '/dashboard.html');
$application->view('/', '/landing-page.html');
$application->view('/login', '/login.html');
$application->view('/signup', '/sign-up.html');
$application->view('/product', '/product.html');
$application->view('/shopping-cart', '/shopping-cart.html');
$application->view('/wishlists', '/my-wishlists.html');
$application->view('/wishlist', '/wishlist.html');
$application->view('/users', '/users.html');
$application->view('/checkout', '/checkout.html');
$application->view('/chat', '/chat.html');
$application->view('/create-product', '/create-product.html');
$application->view('/edit-product', '/product-edition.html');
$application->view('/profile', '/user-profile.html');
$application->view('/search', '/search.html');
$application->view('/sales-report', '/sales-report.html');
$application->view('/orders-report', '/orders-report.html');
$application->view('/products', '/my-products.html');
$application->view('/pending-products', '/approve-products.html');
$application->view('/categories', '/categories.html');

$application->view('/sandbox', '/user-profile-2.html');

$application->run();

?>