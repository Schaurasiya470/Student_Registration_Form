<?php
    header('content-Type: application/json');
    header('acess-Control-Allow-Origin: *');
    header('Access-Control-Allow-Method: DELETE');
    
    include "database.php";

    $data = json_decode(file_get_contents("php://input"),true);

    $id = $data["id"];

    $sql  = "DELETE FROM tbl_student_registration where id = {$id}";

    if(mysqli_query($conn,$sql)){
        echo json_encode(array("Message"=> "Student data deleted",'status' => "true"));
    }else{
        echo json_encode(array("error"=> "Data not updated for this id",'status' => "false"));
    }




?>