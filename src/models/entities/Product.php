<?php

namespace cf\models\entities;

class Product
{
    private string $name;
    private string $description;
    private float $price;
    private int $stock;

    public function __construct()
    {

    }

    public function getName() : string
    {
        return $this->name;
    }

    public function getDescription() : string
    {
        return $this->description;
    }

    public function getPrice()
    {
        return $this->price;
    }

    public function getStock()
    {
        return $this->stock;
    }
}

?>