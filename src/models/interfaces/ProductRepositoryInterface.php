<?php

namespace Models\Interfaces;

interface ProductRepositoryInterface
{
    public function createProduct() : bool;
    public function getProducts();
    public function getProduct();
}

?>