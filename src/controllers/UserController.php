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

    public function getUser($request, $response)
    {
        $body = json_decode($request->getBody(), true);

        $query = "SELECT * FROM users";

    }

    public function loginUser($request, $response)
    {
        $body = json_decode($request->getBody(), true);

        $email = $body["email"];
        $password = $body["password"];

        $query = "SELECT * FROM users WHERE email = '$email'";
        
        $execute = $this->connection->executeReader($query);

        if ($row = $execute->fetch()) {

            $passwordHashed = $row["password"];
            $passwordCheck = password_verify($password, $passwordHashed);

            if ($passwordCheck == false) {
                $response->json(array("respuesta" => "Nada"));
                return;
            }

            $response->json(array("respuesta" => "Todo salio al 100"));
            
        }
        else {
            $response->json(array("respuesta" => "Todo salio al 100"));
        }
    }

    public function registerUser($request, $response)
    {
        $body = json_decode($request->getBody(), true);

        $email = $body["email"];
        $username = $body["username"];
        $firstName = $body["first-name"];
        $lastName = $body["last-name"];
        $password = password_hash($body["password"], PASSWORD_DEFAULT);

        $query = "INSERT INTO users(email, username, user_role, birth_date, first_name, last_name, password, 
        gender, profile_picture)
        VALUES ('$email', '$username', 1, CURDATE(), '$firstName', '$lastName', '$password', 1, 1);";
        
        $this->connection->executeNonQuery($query);

        $response->json(array("respuesta" => "Usuario se registro correctamente"));
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