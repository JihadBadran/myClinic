<?php
class Database{

    // specify your own database credentials
    private $host = "localhost";
    private $db_name = "clinic_management";
    private $username = "root";
    private $password = "1234567890";
    private $socket = "/tmp/mysql.sock";
    public $conn;

    // get the database connection
    public function getConnection(){
        $this->conn = null;

        try{
            $this->conn = new PDO("mysql:host=" . $this->host. ";unix_socket=".$this->socket  . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->conn->exec("set names utf8");
        }catch(PDOException $exception){
            echo "Connection error: " . $exception->getMessage();
        }

        return $this->conn;
    }
}
?>
