<?php

namespace Models\Entities;

class Product
{
    private ?int $productId;
    private string $name;
    private string $description;
    private float $price;
    private int $stock;

    public function __construct()
    {

    }

    public function __destruct()
    {

    }

    public function getProductId() : ?int
    {
        return $this->productId;
    }

    public function setProductId(int $productId) : void
    {
        $this->productId = $productId;
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

    public function toJson() : string|false
    {
        return json_encode($this);
    }
}

?>