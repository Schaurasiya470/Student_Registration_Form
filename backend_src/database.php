<?php

// $servername = "115.243.44.218";
$servername = "http://srv-dev.dayalinfosystems.com";
$username = "sachinc_bit";
$password = "Sc#9525&"; // Change to your actual password if set
$dbname = "db_sachinc_bit";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "MySQL DB Connected successfully!";

$conn->close();
?>
