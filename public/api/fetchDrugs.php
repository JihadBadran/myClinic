<?php
/**
 * Created by PhpStorm.
 * User: jihadbadran
 * Date: 7/5/17
 * Time: 3:15 PM
 */
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
require_once "./connection.php";
require_once "./drug.php";

$conn = new Database();
$db = $conn->getConnection();

$drug = new Drug($db);

$stmt = $drug->read();
$stmt->execute();

$num = $stmt->rowCount();

if($num > 0){

    $drugs = array();
    $drugs["records"] = array();

    while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        extract($row);
        $drug_item = array(
            "did"=>$did,
            "dname"=>$dname
        );
        array_push($drugs["records"],$drug_item);
    }

    echo "".json_encode($drugs) . "\n";
}else{
    echo json_encode(array());
}