<?php

namespace core;

require_once 'Router.php';

use core\Router;

class Application
{
    // private static Application $instance;
    private Router $router;
    // private string $root;
    // Middlewares

    public function __construct(/*string $root*/)
    {
        // self::$instance = $this;
        // $this->root = $root;

        $this->router = new Router();
        // $this->router->setPath('/Router');

        // Get Users
        // $this->router->get('/api/v1/users', [ new UserController, 'get' ]);
        // $this->router->post('/api/v1/users', [ new UserController, 'post' ]);

        // Get User
        // $this->router->get('/api/v1/users/{id}', [ new UserController, 'get' ], array('id' => '[0-9]+'));

        // Begin session
        // $this->router->post('/api/v1/login', [ new UserController, 'get' ]);


    }

    public function get(string $uri, callable $controller)
    {
        $this->router->get($uri, $controller);
    }

    public function post(string $uri, callable $controller)
    {
        $this->router->post($uri, $controller);
    }

    public function put(string $uri, callable $controller)
    {
        $this->router->put($uri, $controller);
    }

    public function delete(string $uri, callable $controller)
    {
        $this->router->delete($uri, $controller);
    }

    public function setViewPath(string $path)
    {
        $this->router->setViewPath($path);
    }

    public function view(string $uri, string $path)
    {
        $this->router->view($uri, $path);
    }

    public function run() : void
    {
        $this->router->resolve();
    }

    public static function getInstance() : Application
    {
        return null;
        // return self::$instance;
    }
}

?>