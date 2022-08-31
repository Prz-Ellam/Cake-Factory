<?php

namespace Controllers;

require_once 'core/Controller.php';
require_once 'src/models/connections/MainConnection.php';

use core\Controller;
use Models\Connections\MainConnection;

class ImageController extends Controller
{
    private MainConnection $connection;

    public function __construct()
    {
        $this->connection = new MainConnection();
    }

    public function __destruct()
    {
        
    }

    public function getImage($request, $response)
    {
        $query = "SELECT image_name, image_mime_type, image_content FROM images WHERE image_id = 5";
        $execute = $this->connection->executeReader($query);

        if ($row = $execute->fetch()) {

            $mime = $row["image_mime_type"];
            header("Content-Type: $mime");
            header("Accept: $mime");
            header('Content-Disposition: inline; filename="' . $row["image_name"] . '"');
            $response->send($row['image_content']);
            return;

        }

    }


}


?>