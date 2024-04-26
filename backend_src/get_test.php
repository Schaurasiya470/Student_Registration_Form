<?php

include "database.php";
// ... your connection and query logic (same as before)

$sql  = "SELECT *  FROM tbl_student_registration";
    $result = mysqli_query($conn,$sql) or die("QUERY not Compiled") ;

if (mysqli_num_rows($result) > 0) {
  while($row = mysqli_fetch_assoc($result)) {
    $blob_data = $row["image_blb"];
    $textData = json_encode($row); // Encode text data to JSON

    // Set the URL where you want to send the data
    $url = "http://localhost/Dayal_project/DIS_GIT_sachinc_bit/backend_src/get_test.php";

    // Prepare data for sending using cURL
    $postData = [
      "text_data" => $textData,
      "image" => new CURLFile($blob_data, mime_content_type($blob_data), basename("image.jpg")) // Assuming image data
    ];

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    // Execute the request and get the response
    $response = curl_exec($ch);
    $curl_error = curl_error($ch);

    curl_close($ch);

    if ($curl_error) {
      echo "Error sending data: " . $curl_error;
    } else {
      // Process the response from the URL (if needed)
      echo "Data sent successfully: " . $response;
    }
  }
} else {
  echo "No results found";
}

mysqli_close($conn);
?>
