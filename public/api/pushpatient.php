<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");


include_once './connection.php';
include_once './patient.php';

// instantiate database and product object
$database = new Database();
$db = $database->getConnection();
$patient = new Patient($db);

$name = $_POST['name'];
$id = $_POST['id'];
$phone = $_POST['phone'];
$bg = $_POST['blood'];
$gender = $_POST['gender'];

$patient->write($name,$id, $phone, $bg, $gender);