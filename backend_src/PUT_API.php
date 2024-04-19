<?php
    header('content-Type: application/json');
    header('acess-Control-Allow-Origin: *');
    header('Access-Control-Allow-Method: UPDATE');
    
    include "database.php";

    $data = json_decode(file_get_contents("php://input"),true);

    $id = $data["id"];
    $fname = $data["first_name"];
    $lname = $data["last_name"];
    $email = $data["email_id"];
    $dob = $data["date_of_birth"];
    // $photo = $data["upload-photo"];
    // $created_date =["created_date"];

    $sql  = "UPDATE  tbl_student_registration SET id = {$id} , first_name = '{$fname}', 
            last_name = '{$lname}', email_id = '{$email}', date_of_birth = '{$dob}' WHERE id = {$id}";

    if(mysqli_query($conn,$sql)){
        echo json_encode(array("Message"=> "Student data Updated",'status' => "true"));
    }else{
        echo json_encode(array("error"=> "Data not updated",'status' => "false"));
    }




?>