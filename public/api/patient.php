<?php

class Patient
{
    private $conn;
    private $tableName = "patients";

    private $id;
    private $name;
    private $gender;
    private $pms;


    public function __construct($conn)
    {
        $this->conn = $conn;
    }

    function read(){
        $query = "SELECT * FROM $this->tableName;";

        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }
}