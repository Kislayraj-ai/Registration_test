<?php

$input = file_get_contents("php://input");
$decode = json_decode($input,true);

$name = $decode['name'];
$age = $decode['age'];
$email = $decode['email'];
$mob = $decode['mob'];
$passwrd = $decode['passwrd'];

$output= [] ;
if($name && $age && $email && $mob){
    
    $output["name"] = $name;
    $output["age"] = $age;
    $output["mob"] = $mob;
    $output["email"] = $email;
    $output["passwrd"] = $passwrd;

echo  json_encode($output);
}

?>