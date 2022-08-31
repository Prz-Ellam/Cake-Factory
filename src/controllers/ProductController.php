<?php

namespace Controllers;

require_once 'core/Controller.php';
require_once 'src/models/repositories/ProductRepository.php';
require_once 'src/models/interfaces/ProductRepositoryInterface.php';

use core\Controller;
use Models\Interfaces\ProductRepositoryInterface;
use Models\Repositories\ProductRepository;

class ProductController extends Controller
{
    private ProductRepositoryInterface $productRepository;

    public function __construct()
    {
        $this->productRepository = new ProductRepository();
    }

    public function createProduct($request, $response)
    {
        $response->send(var_dump($_FILES));
    }

    public function editProduct($request, $response)
    {
        $response->send('{ "response" : "El producto fue editado exitosamente" }');
    }

    public function deleteProduct($request, $response)
    {

    }
}


?>