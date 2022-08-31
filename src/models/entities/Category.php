<?php

namespace Models\Entities;

class Category
{
    private ?int $categoryId;
    private string $name;
    private string $description;

    public function __construct()
    {

    }

    public function __destruct()
    {

    }

    public function getCategoryId() : ?int
    {
        return $this->categoryId;
    }

    public function setCategoryId(int $categoryId) : void
    {
        $this->categoryId = $categoryId;
    }

    public function getName() : string
    {
        return $this->name;
    }

    public function setName(string $name) : void
    {
        $this->name = $name;
    }

    public function getDescription() : string
    {
        return $this->description;
    }

    public function setDescription(string $description) : void
    {
        $this->description = $description;
    }

    public function toJson() : string|false
    {
        return json_encode($this);
    }

}

?>