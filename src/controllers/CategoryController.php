<?php

namespace Controllers;

require_once 'core/Controller.php';
require_once 'src/models/repositories/CategoryRepository.php';
require_once 'src/models/interfaces/CategoryRepositoryInterface.php';

use core\Controller;
use Models\Interfaces\CategoryRepositoryInterface;
use Models\Repositories\CategoryRepository;

class CategoryController extends Controller
{
    private CategoryRepositoryInterface $categoryRepository;

    public function __construct()
    {
        $this->categoryRepository = new CategoryRepository();
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