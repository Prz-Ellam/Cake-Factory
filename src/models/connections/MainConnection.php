<?php

namespace models\connections;

require_once 'DbConnection.php';

use connections\DbConnection;

class MainConnection extends DbConnection
{
    public function executeNonQuery(string $query, array $parameters = null) {

        try 
        {
            $prepareStatement = $this->getConnection()->prepare($query);
            $prepareStatement->execute($parameters);

            $rowCount = $prepareStatement->rowCount();
            $prepareStatement = null;

            // $database->lastInsertId()
            // $stmt->bindValue
            // $db->begintransaction
            // $db->commit
            // $db->rollback
            // $db->intransaction

            return $rowCount;
        }
        catch (\PDOException $ex)
        {
            echo $ex->getMessage();
            return -1;
        }

    }

    public function executeReader(string $query, array $parameters = null)
    {
        $prepareStatement = $this->getConnection()->prepare($query);
        $prepareStatement->execute($parameters);
        return $prepareStatement;  
    }
}

?>