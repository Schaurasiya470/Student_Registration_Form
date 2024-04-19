<?php
    header('content-Type: application/json');
    header('acess-Control-Allow-Origin: *');
    header('Access-Control-Allow-Method: POST');
    
    include "database.php";

    $data = json_decode(file_get_contents("php://input"),true);

    $id = $data["id"];
    $fname = $data["first_name"];
    $lname = $data["last_name"];
    $email = $data["email_id"];
    $dob = $data["date_of_birth"];
    // $photo = $data["upload-photo"];
    // $created_date =["created_date"];

    $sql  = "INSERT INTO  tbl_student_registration(id,first_name,last_name,email_id,date_of_birth) VALUES ($id,'{$fname}','{$lname}','{$email}','{$dob}' )";

    if(mysqli_query($conn,$sql)){
        echo json_encode(array("Message"=> "Student data Created",'status' => "true"));
    }else{
        echo json_encode(array("error"=> "No record Created",'status' => "false"));
    }




?>