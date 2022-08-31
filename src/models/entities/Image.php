<?php

namespace Models\Entities;

class Image
{
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