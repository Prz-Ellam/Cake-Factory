<?php

namespace cf\controllers;

require_once 'core/Controller.php';
require_once 'src/models/connections/MainConnection.php';

use core\Controller;
use models\connections\MainConnection;

class CategoryController extends Controller
{
    private MainConnection $connection;

    public function __construct()
    {
        $this->connection = new MainConnection();
    }

    public function createCategory($request, $response)
    {
        header('Content-Type: application/json');
        $response->json($request->getBody());
        /*
        $body = json_decode($request->getBody(), true);

        $name = $body["name"];
        $description = $body["description"];

        $query = "INSERT INTO categories(name, description, created_at, created_by) VALUES('$name', '$description', NOW(), 1)";

        $this->connection->executeNonQuery($query);

        $response->json(array("respuesta" => "La categoría se registro correctamente"));
        */
    }

    public function updateCategory($request, $response)
    {
        $response->send('{ "response" : "Update Category" }');
    }

    public function getCategories($request, $response)
    {
        
    }
}

?>