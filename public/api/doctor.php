<?php
class Doctor{

    // database connection and table name
    private $conn;
    private $table_name = "doctors";

    // object properties
    public $id;
    public $name;
    public $pass;

    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }


    function read(){
        // select all query
        $query = "SELECT docname, docid, docpass FROM " . $this->table_name;

        // prepare query statement
        $stmt = $this->conn->prepare($query);
        // execute query
        $stmt->execute();
        return $stmt;
    }
}
