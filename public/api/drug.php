<?php

/**
 * Created by PhpStorm.
 * User: jihadbadran
 * Date: 7/5/17
 * Time: 3:14 PM
 */
class Drug{



    // database connection and table name
    private $conn;
    private $table_name = "drugs";

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
        $query = "SELECT did, dname FROM " . $this->table_name;

        // prepare query statement
        $stmt = $this->conn->prepare($query);
        // execute query
        $stmt->execute();
        return $stmt;
    }

}