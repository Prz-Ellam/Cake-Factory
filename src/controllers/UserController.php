<?php

namespace controllers;

class UserController
{
    public function getUsers($request, $response)
    {

    }

    public function getUser($request, $response)
    {
        
    }

    public function registerUser($request, $response)
    {
        $body = $request->getBody();
        $response->send($body);
    }

    public function changePassword($request, $response)
    {
        
    }
}

?>