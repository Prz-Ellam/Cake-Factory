<?php

namespace cf\controllers;

require_once 'core/Controller.php';
require_once 'src/models/entities/User.php';
require_once 'src/models/connections/MainConnection.php';
require_once 'src/models/repositories/UserRepository.php';

use core\Controller;
use models\connections\MainConnection;
use models\entities\User;
use models\repositories\UserRepository;

// TODO: Mover esto a un lugar mas apropiado
function uuid($data = null) {
    // Generate 16 bytes (128 bits) of random data or use the data passed into the function.
    $data = $data ?? random_bytes(16);
    assert(strlen($data) == 16);

    // Set version to 0100
    $data[6] = chr(ord($data[6]) & 0x0f | 0x40);
    // Set bits 6-7 to 10
    $data[8] = chr(ord($data[8]) & 0x3f | 0x80);

    // Output the 36 character UUID.
    return vsprintf('%s%s-%s-%s-%s-%s%s%s', str_split(bin2hex($data), 4));
}

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
                $response->json(array("respuesta" => "Sus credenciales son incorrectas"));
                return;
            }

           
            $token = bin2hex(random_bytes(32)); // Dummy way of create a token
            session_start();
            $_SESSION['token'] = $token;
            setcookie('token', $token, time() + (60 * 60), '/');
            $response->json(array("respuesta" => $_SESSION['token']));
            
        }
        else {
            $response->json(array("respuesta" => "Nada"));
        }
    }

    public function registerUser($request, $response)
    {
        $response->send(var_dump($_POST));
        // Obtencion de datos
        // TODO: try catch

        /*
        $body = json_decode($request->getBody(), true);

        $hashedPwd = password_hash($body['password'], PASSWORD_DEFAULT);
        $user = new User();
        $user->setUserId(uuid());
        $user->setEmail($body['email']);
        $user->setUsername($body['username']);
        $user->setFirstName($body['first-name']);
        $user->setLastName($body['last-name']);
        $user->setBirthDate($body['birth-date']);
        $user->setGender($body['gender']);
        $user->setPassword($hashedPwd);

        // Validator aqui


        // Capa de persistencia
        $repository = new UserRepository();

        $query = "INSERT INTO users(email, username, user_role, birth_date, first_name, last_name, password, 
        gender, profile_picture)
        VALUES ('$email', '$username', 1, CURDATE(), '$firstName', '$lastName', '$password', 1, 1);";
        
        $this->connection->executeNonQuery($query);

        $response->json(array(
            "respuesta" => "Usuario se registro correctamente"
        ));
        */
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

    public function token($request, $response)
    {
        session_start();
        $response->send($_SESSION["token"] . "and" . $_COOKIE["token"]);
    }

    public function expireSession($request, $response)
    {
        //session_start();
        //setcookie('s', 'hola', time() + (60 * 60));
        $response->send(var_dump(json_decode($request->getBody(), true)['profile-picture']));
    }

    public function isEmailAvailable($request, $response)
    {
        $email = $_POST["email"];
        $query = "SELECT COUNT(*) as count FROM users WHERE email = '$email'";

        $execute = $this->connection->executeReader($query);

        if ($row = $execute->fetch()) {
            $num = $row["count"];
            $response->json(($num !== 0) ? false : true);
        }
        else
        {
            $response->send(json_encode(false));
        }
    }

    public function isUsernameAvailable($request, $response)
    {
        $username = $_POST["username"];
        $query = "SELECT COUNT(*) as count FROM users WHERE username = '$username'";

        $execute = $this->connection->executeReader($query);

        if ($row = $execute->fetch()) {
            $num = $row["count"];
            $response->json(($num !== 0) ? false : true);
        }
        else
        {
            $response->send(json_encode(false));
        }
    }
}

?>