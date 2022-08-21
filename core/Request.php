<?php

namespace core;

class Request
{
    private string $method;
    private string $protocol;
    private string $path;
    private string $body;
    private string $query;
    private string $params;
    private array $headers;

    public function __construct()
    {
        $this->method = $_SERVER["REQUEST_METHOD"];
        $this->protocol = $_SERVER["SERVER_PROTOCOL"];
        $this->path = $_SERVER["REQUEST_URI"] ?? "/";
        $this->path = parse_url($this->path, PHP_URL_PATH);
    }

    public function getMethod() : string
    {
        return $this->method;
    }

    public function getBody(string $name = null) : string|object
    {
        $requestBody = file_get_contents('php://input');
        if ($requestBody === null)
        {
            return "";
        }

        if ($name === null)
        {
            return $requestBody;
        }

        return $_POST[$name];
    }

    public function getQuery(string $name = null)
    {
        if ($name === null)
        {

        }
        return $_GET[$name];
    }

    public function getHeaders(string $name = null)
    {

    }

    public function getPathVariables(string $name = null)
    {
        // :id
    }




    public function getPath() : string
    {
        return $this->path;
    }

    public function getProtocol() : string
    {
        return $this->protocol;
    }

}

?>