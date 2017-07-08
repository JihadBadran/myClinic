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

    function read($search, $limit, $offset)
    {
        $query = "SELECT * FROM $this->tableName WHERE pname LIKE '%$search%' LIMIT ? OFFSET ?;";

        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1,$limit, PDO::PARAM_INT);
        $stmt->bindParam(2,$offset, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt;
    }

    function write($name, $id, $phone, $blood, $gender)
    {
        try {
            $query = "INSERT INTO patients (pname, pgender,pms, pnid, pbg) VALUES (?,?,?,?,?);";
            $stmt = $this->conn->prepare($query);

            $stmt->bindParam(1, $name, PDO::PARAM_STR, 200);
            $stmt->bindParam(2, $gender, PDO::PARAM_STR, 20);
            $stmt->bindParam(3, $name, PDO::PARAM_STR, 20);
            $stmt->bindParam(4, $id, PDO::PARAM_STR, 20);
            $stmt->bindParam(5, $blood, PDO::PARAM_STR, 20);

            echo $stmt->execute();
            if($phone !== ""){
                $last_id = $this->conn->lastInsertId();
                $query = "INSERT INTO `patient-number` (pid,cnumber) VALUES ($last_id,?)";
                $stmt = $this->conn->prepare($query);
                $stmt->bindParam(1, $phone, PDO::PARAM_STR, 20);
                echo $stmt->execute();
            }

        } catch (PDOException $e) {
            echo $e->getMessage();
        }

    }

    function delete($id){
        $query = "DELETE FROM Patients WHERE pid=?";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $id, PDO::PARAM_INT);
        echo $stmt->execute();
    }


}