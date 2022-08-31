<?php

namespace Models\Interfaces;

interface UserRepositoryInterface
{
    public function createUser() : bool;
    public function updateUser() : bool;
    public function deleteUser() : bool;
    public function updateUserPassword() : bool;
    public function getUser();
    public function getUsers();
    public function isEmailAvailable() : bool;
    public function isUsernameAvailable() : bool;
}

?>