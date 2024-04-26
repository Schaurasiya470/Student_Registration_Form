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
        $output = mysqli_fetch_all($result,MYSQLI_ASSOC);
        echo json_encode($output);
    }else{
        echo json_encode(array("error"=> "No record found",'status' => "false"));
    }




?> 

<!-- if(mysqli_num_rows($result)==0){
        while($output = mysqli_fetch_assoc($result)) {
            $blob_data = $output["image_blb"];
            $base64_data = base64_encode($blob_data);
            $response = array("data" => $base64_data,"text" => $output);
            // echo '<img src="data:image/jpeg;base64,'.base64_encode($blobData).'"/>';
            echo json_encode($response);
    }
    }
    else{
        echo json_encode(array("error"=> "No record found",'status' => "false"));
    }
 -->
