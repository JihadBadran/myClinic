<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");


include_once './connection.php';
include_once './patient.php';

// instantiate database and product object
$database = new Database();
$db = $database->getConnection();

$patient = new Patient($db);
$stmt = $patient->read();

$num = $stmt->rowCount();

if($num>0){

    $doctor_arr=array();
    $doctor_arr["records"]=array();

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){

        extract($row);

        $doctor_item=array(
            "pid" => $pid,
            "pname" => $pname,
            "pgender" => $pgender,
            "pms" => $pms
        );

        array_push($doctor_arr["records"], $doctor_item);
    }

    echo "".json_encode($doctor_arr)."\n";
}else{
    echo json_encode(
        array()
    );
}
?>
