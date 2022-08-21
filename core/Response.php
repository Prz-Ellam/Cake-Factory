<?php

namespace core;

class Response
{
    public function __construct()
    {
        
    }

    public function send($responseBody)
    {
        echo $responseBody;
    }

    public function setStatusCode(int $code)
    {
        http_response_code($code);
    }

    public function setHeader(string $header, string $value)
    {
        header("$header: $value");
    }

    public function setHeaders(array $headers)
    {
        foreach ($headers as $header => $value)
        {
            header("$header: $value");
        }
    }

    public function setLocation($url)
    {
        header("Location: $url");
    }

    public function setContentType($contentType)
    {
        header("Content-Type: $contentType");
    }

    public function setAccept($accept)
    {
        header("Accept: $accept");
    }

    public function setAuthorization($authorization)
    {
        header("Authorization: $authorization");
    }

    public function setContentLength($contentLength)
    {
        header("Content-Length: $contentLength");
    }
}

?>