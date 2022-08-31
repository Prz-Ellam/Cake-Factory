<?php

namespace Models\Repositories;

require_once 'src/models/connections/MainConnection.php';
require_once 'src/models/interfaces/UserRepositoryInterface.php';

use models\connections\MainConnection;
use Models\Interfaces\UserRepositoryInterface;

class UserRepository implements UserRepositoryInterface
{
    private const CREATE_USER = "CALL sp_create_user(?)";
    private const UPDATE_USER = "CALL sp_update_user(?)";
    private const UPDATE_USER_PASSWORD = "CALL sp_update_user_password(?)";
    private const DELETE_USER = "CALL sp_delete_user(?)";
    private const GET_USER = "CALL sp_get_user(?)";
    private const GET_USERS = "CALL sp_get_users(?)";
    private const LOGIN_USER = "CALL sp_login_user(?)";
    private const IS_EMAIL_AVAILABLE = "CALL sp_is_email_available(?)";
    private const IS_USERNAME_AVAILABLE = "CALL sp_is_username_available(?)";
    private MainConnection $connection;

    public function __construct()
    {
        $this->connection = new MainConnection();
    }

    public function __destruct()
    {

    }

    /**
     * Persist an user in the database
     *
     * @return boolean
     */
    public function createUser() : bool
    {
        try
        {
            $result = $this->connection->executeNonQuery(self::CREATE_USER, [
                1,
                2,
                3,
                4,
            ]);
        }
        catch (\PDOException $ex)
        {
            die($ex->getMessage());
        }
    }

    /**
     * Undocumented function
     *
     * @return boolean
     */
    public function updateUser() : bool
    {
        // UPDATE_USER
    }

    /**
     * Undocumented function
     *
     * @return boolean
     */
    public function deleteUser() : bool
    {
        // DELETE_USER
    }

    /**
     * Undocumented function
     *
     * @return boolean
     */
    public function updateUserPassword() : bool
    {

    }

    /**
     * Undocumented function
     *
     * @return boolean
     */
    public function isEmailAvailable() : bool
    {

    }

    /**
     * Undocumented function
     *
     * @return boolean
     */
    public function isUsernameAvailable() : bool
    {

    }

    /**
     * Undocumented function
     *
     * @return void
     */
    public function getUsers()
    {

    }

    /**
     * Undocumented function
     *
     * @return void
     */
    public function getUser()
    {

    }
}

?>