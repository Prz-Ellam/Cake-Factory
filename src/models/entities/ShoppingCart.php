<?php

namespace Models\Entities;

class ShoppingCart
{
    private ?int $shoppingCartId;

    public function __construct()
    {

    }

    public function __destruct()
    {

    }

    public function toJson() : string
    {
        return json_encode($this);
    }
}

?>