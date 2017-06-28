 <?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// include database and object files
include_once './connection.php';

// instantiate database and product object
$database = new Database();
$db = $database->getConnection();



// select all query
$query = "SELECT * FROM app_settings";
// prepare query statement
$stmt = $db->prepare($query);

// execute query
$stmt->execute();

$num = $stmt->rowCount();

// check if more than 0 record found
if($num>0){

    // products array
    $settings = array();
    $settings["records"]=array();


    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        echo $row;
        extract($row);
        $item=array(
            "key" => $setting,
            "value" => $choice
        );

        array_push($settings["records"], $item);
    }

    echo "".json_encode($settings)."\n";
}

else{
    echo json_encode(
        array("message" => "No products found.")
    );
}
?>
