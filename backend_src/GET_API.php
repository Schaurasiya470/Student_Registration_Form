<?php
    header('content-Type: application/json');
    header('acess-Control-Allow-Origin: *');

    include "database.php";

    $sql  = "SELECT id,first_name,last_name,email_id FROM tbl_student_registration";
    $result = mysqli_query($conn,$sql) or die("QUERY not Compiled") ;

    if(mysqli_num_rows($result)>0){
        $output = mysqli_fetch_all($result,MYSQLI_ASSOC);
        echo json_encode($output);
    }else{
        echo json_encode(array("error"=> "No record found",'status' => "false"));
    }




?>