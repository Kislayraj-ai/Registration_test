<?php
include "config.php";

try{

// received data form js file in json format
$input = file_get_contents("php://input");
$decode = json_decode($input,true);

// data converted to php format
$name = mysqli_real_escape_string($conn,$decode['name']);
$age = mysqli_real_escape_string($conn,$decode['age']);
$email = mysqli_real_escape_string($conn,$decode['email']);
$mob = mysqli_real_escape_string($conn,$decode['mob']);
$passwrd =  mysqli_real_escape_string($conn,md5($decode['passwrd']));



$sql = "INSERT INTO user_detail(u_name,u_age,u_mob,u_email,u_pass)
        VALUES ('{$name}','{$age}','{$mob}','{$email}','{$passwrd}')" or die(json_encode("Error Occurred in insertion of data"));

$result  = mysqli_query($conn,$sql) or die(json_encode("Query Failed"));


if($result)
 echo json_encode("success");
}
catch(Exception $e){
    echo json_encode($e->getMessage());
}

?>