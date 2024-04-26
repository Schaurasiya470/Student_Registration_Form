<?php
header('content-Type: application/json');
// header('content-Type: image/jpeg');
header('access-Control-Allow-Origin: *');

include "database.php"; 

$sql  = "SELECT image_blb from tbl_student_registration";

$result = mysqli_query($conn,$sql) or die("QUERY not Compiled") ;
if(mysqli_num_rows($result)>0){
    $blob_data = mysqli_fetch_all($result, MYSQLI_ASSOC);
    // $base64_data = base64_encode($blob_data[4]['image_blb']);
    $response = array("data" => $blob_data[4]['image_blb']);
    echo json_encode($response);
}else{
    echo json_encode(array("error"=> "No record found",'status' => "false"));
}
 // Encode BLOB data from MySQL

 // Create a JSON response
// echo json_encode($response); // Send the JSON response
?>