<?php

namespace cf\models\entities;

class Wishlist
{
    private string $name;
    private string $description;
    private string $visibility;

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
}

?>