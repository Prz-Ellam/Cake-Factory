<?php

require_once 'core/Application.php';
require_once 'src/controllers/UserController.php';

use core\Application;
use controllers\UserController;

$application = new Application(); 
$application->get('/api/v1/users', [new UserController(), 'registerUser']);
$application->post('/api/v1/users', [new UserController(), 'registerUser']);

$application->setViewPath('src/views');
$application->view('/', '/dashboard.html');
$application->view('/home', '/landing-page.html');
$application->view('/login', '/login.html');
$application->view('/signup', '/sign-up.html');
$application->view('/product', '/product.html');
$application->view('/shopping-cart', '/shopping-cart.html');
$application->view('/wishlists', '/wishlists.html');
$application->view('/wishlist', '/wishlist-details.html');
$application->view('/users', '/users.html');
$application->view('/checkout', '/checkout.html');
$application->view('/chat', '/chat.html');
$application->view('/create-product', '/create-product.html');
$application->view('/profile', '/user-profile.html');
$application->view('/search', '/search.html');
$application->view('/buys-reports', '/buys-reports.html');

$application->run();

?>