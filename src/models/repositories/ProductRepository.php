<?php

namespace cf\controllers\repositories;

require_once 'src/models/connections/MainConnection.php';

use models\connections\MainConnection;

class ProductRepository
{
    private MainConnection $connection;
    private string $CREATE_PRODUCT = "";
    private string $GET_PRODUCTS = "";
}

?>