<?php

namespace Models\Repositories;

require_once 'src/models/connections/MainConnection.php';

use models\connections\MainConnection;

class CategoryRepository
{
    private MainConnection $connection;
    private const CREATE_CATEGORY = "";
    private const GET_CATEGORIES = "";

    public function __construct()
    {
        $this->connection = new MainConnection();
    }
}


?>