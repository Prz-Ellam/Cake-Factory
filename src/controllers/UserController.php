<?php

namespace cf\controllers;

require_once 'core/Controller.php';
require_once 'src/models/connections/MainConnection.php';

use core\Controller;
use models\connections\MainConnection;

class UserController extends Controller
{
    private MainConnection $connection;

    public function __construct()
    {
        $this->connection = new MainConnection();
    }

    public function getUsers($request, $response)
    {

    }

    public function getUser($request, $response)
    {
        
    }

    public function loginUser($request, $response)
    {
        $body = json_decode($request->getBody(), true);

        $email = $body["email"];
        $password = $body["password"];

        $query = "SELECT * FROM users WHERE email = '$email' AND password = '$password'";
        
        $execute = $this->connection->executeReader($query);

        if ($row = $execute->fetch()) {
            $response->send($row["username"]);
        }
        else {
            $response->send("Nada");
        }
    }

    public function registerUser($request, $response)
    {
        $body = json_decode($request->getBody(), true);

        $email = $body["email"];
        $username = $body["username"];
        $firstName = $body["first-name"];
        $lastName = $body["last-name"];
        $password = $body["password"];

        $query = "INSERT INTO users(email, username, user_role, birth_date, first_name, last_name, password, 
        gender, profile_picture)
        VALUES ('$email', '$username', 1, CURDATE(), '$firstName', '$lastName', '$password', 1, 1);";
        
        $this->connection->executeNonQuery($query);

        $response->send("$email $username $firstName $lastName");
    }

    public function updateUserInfo($request, $response)
    {
        
    }

    public function changePassword($request, $response)
    {
        $body = json_decode($request->getBody(), true);

        $oldPassword = $body["old-password"];
        $newPassword = $body["new-password"];

        $response->send("Actualizar contraseña");
    }
}

?>