<?php

namespace core;

require_once 'Renderer.php';
require_once 'Request.php';
require_once 'Response.php';

use core\Renderer;
use core\Request;
use core\Response;

enum HttpMethod : string
{
    case GET = 'GET';
    case HEAD = 'HEAD';
    case POST = 'POST';
    case PUT = 'PUT';
    case DELETE = 'DELETE';
    case CONNECT = 'CONNECT';
    case OPTIONS = 'OPTIONS';
    case TRACE = 'TRACE';
    case PATCH = 'PATCH';
}

class Router
{
    private string $path;
    private array $routes;
    private Renderer $renderer;

    public function __construct()
    {
        $this->path = "";
        $this->routes = array();
        $this->renderer = new Renderer();
        foreach (HttpMethod::cases() as $method)
        {
            $this->routes[] = $method->value;
        }
    }

    public function setPath(string $path) : void
    {
        $this->path = $path;
    }

    public function setViewPath(string $path) : void
    {
        $this->renderer->setViewPath($path);
    }

    public function getPath() : string
    {
        return $this->path;
    }

    public function add(HttpMethod $method, string $uri, callable $controller, array $parameters = null) : void
    {
        $httpVerb = $method->value;
        $this->routes[$httpVerb][$uri] = (object)array(
            'action' => $controller,
            'parameters' => $parameters
        );
    }

    public function get(string $uri, callable $controller, array $parameters = null) : void
    {
        $this->add(HttpMethod::GET, $uri, $controller, $parameters);
    }

    public function head(string $uri, callable $controller, array $parameters = null) : void
    {
        $this->add(HttpMethod::HEAD, $uri, $controller, $parameters);
    }

    public function post(string $uri, callable $controller, array $parameters = null) : void
    {
        $this->add(HttpMethod::POST, $uri, $controller, $parameters);
    }

    public function put(string $uri, callable $controller, array $parameters = null) : void
    {
        $this->add(HttpMethod::PUT, $uri, $controller, $parameters);
    }

    public function delete(string $uri, callable $controller, array $parameters = null) : void
    {
        $this->add(HttpMethod::DELETE, $uri, $controller, $parameters);
    }

    public function connect(string $uri, callable $controller, array $parameters = null) : void
    {
        $this->add(HttpMethod::CONNECT, $uri, $controller, $parameters);
    }

    public function options(string $uri, callable $controller, array $parameters = null) : void
    {
        $this->add(HttpMethod::OPTIONS, $uri, $controller, $parameters);
    }

    public function trace(string $uri, callable $controller, array $parameters = null) : void
    {
        $this->add(HttpMethod::TRACE, $uri, $controller, $parameters);
    }

    public function patch(string $uri, callable $controller, array $parameters = null) : void
    {
        $this->add(HttpMethod::PATCH, $uri, $controller, $parameters);
    }

    public function addGroup(array $methods, string $uri, callable $controller) : void
    {
        foreach ($methods as $method)
        {
            $httpVerb = $method->value;
            $this->routes[$httpVerb][$uri] = $controller;
        }
    }

    public function view(string $uri, string $viewPath) : void
    {
        $this->routes[HttpMethod::GET->value][$uri] = (object)array(
            'action' => $viewPath,
            'parameters' => null
        );
    }

    public function exists(HttpMethod $method, string $uri) : bool
    {
        return (isset($this->routes[$method->value][$uri])) ? true : false;
    }



    public function resolve() : void
    {
        $request = new Request();

        $method = $request->getMethod();
        $uri = $request->getPath();

        foreach ($this->routes[$method] as $uriString => $route)
        {
            $uriString = $this->path . $uriString;
            $regexUri = str_replace("/", "\/", $uriString);

            if (isset($route->parameters))
            {
                foreach ($route->parameters as $key => $value)
                {
                    if (str_contains($regexUri, "{$key}"))
                    {
                        $regexUri = str_replace("{{$key}}", "(?P<$key>$value)", $regexUri);
                        break;
                    }
                }
            }

            $result = preg_match("/($regexUri)$/", $uri, $matches);
            if ($result)
            {
                if (is_callable($route->action))
                {
                    call_user_func($route->action, $request, new Response());
                }
                else if (is_string($route->action))
                {
                    $this->renderer->renderView($route->action);
                }
                return;
            }
            
        }

        echo "404 Not found";
        http_response_code(404);

        // is_callable
        // is_array
        // is_string

    }

}

?>