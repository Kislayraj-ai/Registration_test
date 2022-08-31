<?php

include "config.php";
try{

 $input = file_get_contents("php://input");
 $decode = json_decode($input,true);

 $name = mysqli_real_escape_string($conn,$decode['name']);

 $sql = "SELECT u_name, u_pass from user_detail where u_name ='{$name}'" or die("Selection failed");

 $result = mysqli_query($conn,$sql) or die("Query Failed");

 $output = [] ; 
 if(mysqli_num_rows($result) > 0){

    $row = mysqli_fetch_assoc($result);
    session_start();
    $_SESSION['user_name'] = $row['u_name'];
   $output['name'] = $row["u_name"]; 
   $output['password'] = $row["u_pass"]; 
 }

 echo  json_encode($output);

}catch(Exception $e){
    echo json_encode($e->getMessage());
}





?>