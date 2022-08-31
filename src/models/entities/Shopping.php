<?php

namespace Models\Entities;

class Shopping
{
    private ?int $shoppingId;

    public function __construct()
    {

    }

    public function __destruct()
    {

    }

    public function getShoppingId() : ?int
    {
        return $this->shoppingId;
    }

    public function setShoppingId(?int $shoppingId) : void
    {
        $this->shoppingId = $shoppingId;
    }
}

?>