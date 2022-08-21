<?php

namespace Http;

class Session
{
    public function __construct()
    {

    }  

    public function session()
    {
        session_start();
    }

    public function push(string $key, $value)
    {
        $_SESSION[$key] = $value;
    }

    public function get(string $key)
    {
        return $_SESSION[$key];
    }

    public function endSession()
    {
        session_reset();
    }
}

?>