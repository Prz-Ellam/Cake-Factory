<?php

namespace cf\controllers\repositories;

require_once 'src/models/connections/MainConnection.php';

use models\connections\MainConnection;

class WishlistRepository 
{
    private MainConnection $connection;
    private string $CREATE_WISHLIST = "";
    private string $UPDATE_WISHLIST = "";
    private string $DELETE_WISHLIST = "";

    public function __construct()
    {
        $this->connection = new MainConnection();
    }
}

?>