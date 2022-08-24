<?php

namespace cf\controllers\repositories;

require_once 'src/models/connections/MainConnection.php';

use models\connections\MainConnection;

class CategoryRepository
{
    private MainConnection $connection;
    private string $CREATE_CATEGORY = "";
    private string $GET_CATEGORIES = "";

    public function __construct()
    {
        $this->connection = new MainConnection();
    }
}


?>