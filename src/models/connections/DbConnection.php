<?php

namespace connections;

abstract class DbConnection
{
    private string $domain = "localhost";
    private string $database = "cake_factory";
    private string $username = "root";
    private string $password = "admin";
    private \PDO $connection;

    public function __construct()
    {
        // mysql:host=$host;dbname=$dbname;charset=utf8
        $connectionString = "mysql:host=" . $this->domain . ";dbname=" . $this->database . ";charset=utf8";

        try
        {
            // connection string, username and the password
            $this->connection = new \PDO($connectionString, $this->username, $this->password);
            $this->connection->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
            $this->connection->setAttribute(\PDO::ATTR_DEFAULT_FETCH_MODE, \PDO::FETCH_ASSOC);
        }
        catch (\PDOException $ex)
        {
            die($ex->getMessage());
        }
    }

    public function getConnection()
    {
        return $this->connection;
    }
}

?>