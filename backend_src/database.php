<?php

// $servername = "115.243.44.218";
$servername = "http://srv-dev.dayalinfosystems.com";
$username = "sachinc_bit";
$password = "Sc#9525&"; 
$dbname = "db_sachinc_bit";

$conn = new mysqli_connect($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "MySQL DB Connected successfully!";

$conn->close();
?>


