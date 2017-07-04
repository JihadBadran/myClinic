<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

 $username = $_POST["username"];
 $password = $_POST["password"];
//$username = "tareq";
//$password = "1234";
// include database and object files
include_once './connection.php';

// instantiate database and product object
$database = new Database();
$db = $database->getConnection();

$query = "SELECT docname, docid, docpass FROM Doctors where docname=? and docpass=?;";


// prepare query statement
$stmt = $db->prepare($query);
$username = htmlspecialchars(strip_tags($username));
$password = htmlspecialchars(strip_tags($password));
$stmt->bindParam(1, $username, PDO::PARAM_STR, 20);
$stmt->bindParam(2, $password, PDO::PARAM_STR, 20);
// execute query
$stmt->execute();
$num = $stmt->rowCount();


if($num>0){
    echo json_encode(array("allowed" => true));
}else{
    echo json_encode(array("allowed" => false));
}

?>
