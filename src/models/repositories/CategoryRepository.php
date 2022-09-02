<?php

namespace Models\Repositories;

require_once 'src/models/connections/MainConnection.php';
require_once 'src/models/interfaces/CategoryRepositoryInterface.php';

use models\connections\MainConnection;
use Models\Interfaces\CategoryRepositoryInterface;

class CategoryRepository implements CategoryRepositoryInterface
{
    private MainConnection $connection;
    private const CREATE_CATEGORY = "";
    private const GET_CATEGORIES = "";

    public function __construct()
    {
        $this->connection = new MainConnection();
    }

    public function createCategory() : bool
    {

    }

    public function getCategories()
    {

    }
}


?>