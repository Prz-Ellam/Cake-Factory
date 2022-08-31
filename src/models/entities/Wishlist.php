<?php

namespace Models\Entities;

class Wishlist
{
    private ?int $wishlistId;
    private string $name;
    private string $description;
    private string $visibility;

    public function __construct()
    {

    }

    public function __destruct()
    {

    }

    public function getWishlistId() : ?int
    {
        return $this->wishlistId;
    }

    public function setWishlistId(int $wishlistId) : void
    {
        $this->wishlistId = $wishlistId;
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