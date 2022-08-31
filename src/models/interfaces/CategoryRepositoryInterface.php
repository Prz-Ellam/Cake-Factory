<?php

namespace Models\Interfaces;

interface CategoryRepositoryInterface
{
    public function createCategory() : bool;
    public function getCategories();
}

?>