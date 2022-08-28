<?php

namespace cf\controllers;

use core\Controller;
use models\connections\MainConnection;

class ProductController extends Controller
{
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