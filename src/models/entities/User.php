<?php

namespace cf\models\entities;

class User
{
    private string $userId;
    private string $email;
    private string $username;
    private string $firstName;
    private string $lastName;
    private string $birthDate;
    private string $gender;
    private string $password;

    public function __construct()
    {

    }

    public function getUserId() : string
    {
        return $this->userId;
    }

    public function setUserId(string $userId) : void
    {
        $this->userId = $userId;
    }

    public function getEmail() : string
    {
        return $this->email;
    }

    public function setEmail(string $email) : void
    {
        $this->email = $email;
    }

    public function getUsername() : string
    {
        return $this->username;
    }

    public function setUsername(string $username) : void
    {
        $this->username = $username;    
    }

    public function getFirstName(string $firstName) : string 
    {
        return $this->firstName;
    }

    public function setFirstName(string $firstName) : void
    {
        $this->firstName = $firstName;
    }

    public function getLastName() : string
    {
        return $this->lastName;
    }

    public function setLastName(string $lastName) : void
    {
        $this->lastName = $lastName;
    }

    public function getBirthDate() : string
    {
        return $this->birthDate;
    }

    public function setBirthDate(string $birthDate) : void
    {
        $this->birthDate = $birthDate;
    }

    public function getGender(string $gender) : string
    {
        $this->gender = $gender;
    }

    public function setGender() : string
    {
        return $this->gender;
    }

    public function getPassword() : string
    {
        return $this->password;
    }

    public function setPassword(string $password) : void
    {
        $this->password = $password;
    }

    public function toJson()
    {
        return json_encode($this);
    }

}

?>