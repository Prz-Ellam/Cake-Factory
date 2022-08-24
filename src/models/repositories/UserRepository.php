<?php

namespace cf\models\repositories;

require_once 'src/models/connections/MainConnection.php';

use models\connections\MainConnection;

class UserRepository
{
    private MainConnection $connection;
    private string $GET_USER = "";
    private string $LOGIN_USER = "";
    private string $REGISTER_USER = "";
    private string $UPDATE_USER_INFO = "";
    private string $UPDATE_USER_PASSWORD = "";
    private string $DELETE_USER = "";
    private string $IS_EMAIL_AVAILABLE = "";
    private string $IS_USERNAME_AVAILABLE = "";
    private string $GET_USERS = "";

    public function __construct()
    {
        $this->connection = new MainConnection();
    }

    public function createUser()
    {

    }

    public function updateUser()
    {

    }

    public function deleteUser()
    {

    }

    public function updatePasswordUser()
    {

    }

    public function isEmailAvailable()
    {

    }

    public function isUsernameAvailable()
    {

    }

    public function getUsers()
    {

    }
}

?>