<?php

namespace Models\Repositories;

require_once 'src/models/connections/MainConnection.php';
require_once 'src/models/interfaces/ProductRepositoryInterface.php';

use models\connections\MainConnection;
use Models\Interfaces\ProductRepositoryInterface;

class ProductRepository implements ProductRepositoryInterface
{
    private MainConnection $connection;
    private const CREATE_PRODUCT = "";
    private const GET_PRODUCTS = "";
    private const GET_PRODUCT = "";

    public function createProduct() : bool
    {

    }

    public function getProducts()
    {

    }

    public function getProduct()
    {
        
    }
}

?>