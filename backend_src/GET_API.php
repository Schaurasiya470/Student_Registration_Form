<?php
    header('content-Type: application/json');
    // header('content-Type: image/jpeg');
    header('access-Control-Allow-Origin: *');

    include "database.php";

    $sql  = "SELECT 
    id ,first_name ,last_name ,email_id ,aadhar_no,date_of_birth,mobile ,gender,country,state,city,street,landmark,pincode,username
    ,password  ,hobbies ,created_date
    FROM tbl_student_registration";
    $result = mysqli_query($conn,$sql) or die("QUERY not Compiled") ;

    if(mysqli_num_rows($result)>0){
        // foreach($result as $row){
        //     echo $row['id'];
        //     echo $row['first_name'];  echo $row['date_of_birth']; 
        //     echo $row['created_date'];  echo $row['mobile'];
        //     <img src = "data:image/jpeg" echo $row["image_blb"]' height="100px" width=100px/>' ;
        //     echo "\n";

        // }
        $output = mysqli_fetch_all($result,MYSQLI_ASSOC);
        echo json_encode($output);
    }else{
        echo json_encode(array("error"=> "No record found",'status' => "false"));
    }




?>