<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "registration";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Database Connection Failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'] ?? '';
    $fullName = $_POST['fullName'] ?? '';
    $address = $_POST['address'] ?? '';
    $aadharId = $_POST['aadharId'] ?? '';
    $mobile = $_POST['mobile'] ?? '';
    $email = $_POST['email'] ?? '';

    if (empty($name) || empty($fullName) || empty($address) || empty($aadharId) || empty($mobile) || empty($email)) {
        die("❌ All fields are required!");
    }

    $sql = "INSERT INTO details (name, fullName, address, aadharId, mobile, email) VALUES (?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    
    if (!$stmt) {
        die("❌ Database Error: " . $conn->error);
    }

    $stmt->bind_param("ssssss", $name, $fullName, $address, $aadharId, $mobile, $email);
    
    if ($stmt->execute()) {
        echo "success";
    } else {
        echo "❌ Insert Failed: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
?>
