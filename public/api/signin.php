<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// $username = $_POST["username"];
// $password = $_POST["password"];
$username = "jihad" ;
$password = "1234";
// include database and object files
include_once './connection.php';

// instantiate database and product object
$database = new Database();
$db = $database->getConnection();

$query = "SELECT docname, docid, docpass FROM Doctors where dname=:name and docpass=:pass";

// prepare query statement
$stmt = $db->prepare($query);
$stmt->bindParam(":name", $username);
$stmt->bindParam(":pass", $password);
// execute query
$stmt->execute();
$num = $stmt->rowCount();

// check if more than 0 record found
if($num>0){

    // products array
    $doctor_arr=array();
    $doctor_arr["records"]=array();

    // retrieve our table contents
    // fetch() is faster than fetchAll()
    // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);

        $doctor_item=array(
            "did" => $docid,
            "dname" => $docname,
            "dpass" => $docpass
        );

        array_push($doctor_arr["records"], $doctor_item);
    }

    echo "".json_encode($doctor_arr)."\n";
}else{
    echo json_encode(
        array("message" => "No products found.")
    );
}

?>
