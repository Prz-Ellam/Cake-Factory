<?php

namespace Models\Connections;

require_once 'DbConnection.php';

use Models\Connections\DbConnection;

class MainConnection extends DbConnection
{

    /**
     * Undocumented function
     *
     * @return void
     */
    public function beginTransaction()
    {
        $this->getConnection()->beginTransaction();
    }

    /**
     * Undocumented function
     *
     * @return void
     */
    public function endTransaction()
    {
        $this->getConnection()->commit();
    }

    /**
     * Undocumented function
     *
     * @param string $query
     * @param array|null $parameters
     * @return void
     */
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

    /**
     * Undocumented function
     *
     * @param string $query
     * @param array|null $parameters
     * @return void
     */
    public function executeReader(string $query, array $parameters = null)
    {
        $prepareStatement = $this->getConnection()->prepare($query);
        $prepareStatement->execute($parameters);
        return $prepareStatement;  
    }
}

?>