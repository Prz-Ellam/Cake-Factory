<?php

namespace Models\Interfaces;

interface ProductRepository
{
    public function createProduct() : bool;
    public function getProducts();
    public function getProduct();
}

?>