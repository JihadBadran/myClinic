<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");


include_once './connection.php';
include_once './patient.php';

// instantiate database and product object
$database = new Database();
$db = $database->getConnection();

$search = isset($_GET['cret']) ? htmlspecialchars(strip_tags($_GET['cret'])) : "";
$number = isset($_GET['number']) ? (int)$_GET["number"] : 1000000;
$offset = isset($_GET['offset']) ? (int)$_GET['offset'] : 0;

$patient = new Patient($db);

$stmt = $patient->read($search, $number, $offset);

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
            "pms" => $pms,
            "pbg" => $pbg
        );

        array_push($doctor_arr["records"], $doctor_item);
    }
    $stmt = $db->prepare("SELECT count(*) as numberOfPatients FROM Patients;");
    $stmt->execute();
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    extract($row);
    $doctor_arr["count"] = $numberOfPatients;

    echo "".json_encode($doctor_arr)."\n";
}else{
    echo json_encode(
        array("count"=>0 ,"records"=>array())
    );
}
?>
