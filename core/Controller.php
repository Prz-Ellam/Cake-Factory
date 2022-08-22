<?php

namespace core;

require_once 'Request.php';
require_once 'Response.php';

class Controller
{
    protected array $middlewares;

    public function __construct()
    {
        
    }

    public function getMiddlewares() : array
    {
        return $this->middlewares;
    }

    public function pushMiddleware($middleware) : void
    {
        $this->middleware[] = $middleware;
    }

}

?>