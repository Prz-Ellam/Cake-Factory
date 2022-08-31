<?php

namespace Models\Repositories;

require_once 'src/models/connections/MainConnection.php';

use models\connections\MainConnection;

class WishlistRepository 
{
    private MainConnection $connection;
    private const CREATE_WISHLIST = "";
    private const UPDATE_WISHLIST = "";
    private const DELETE_WISHLIST = "";

    public function __construct()
    {
        $this->connection = new MainConnection();
    }
}

?>