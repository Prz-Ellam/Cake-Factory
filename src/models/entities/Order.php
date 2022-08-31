<?php

namespace Models\Entities;

class Order
{
    private ?int $orderId;

    public function __construct()
    {

    }

    public function __destruct()
    {

    }

    public function getOrderId() : ?int
    {
        return $this->orderId;
    }

    public function setOrderId(?int $orderId)
    {
        $this->orderId = $orderId;
    }
}

?>