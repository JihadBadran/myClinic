<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");


include_once './connection.php';
include_once './patient.php';

// instantiate database and product object
$database = new Database();
$db = $database->getConnection();

$search = htmlspecialchars(strip_tags($_GET['cret']));
$number = (int)$_GET['number'];
$offset = (int)$_GET['offset'];

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
