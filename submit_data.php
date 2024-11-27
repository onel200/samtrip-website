<?php
 
$servername = "localhost";  // Your MySQL host, usually localhost
$username = "root";         // Your MySQL username
$password = "";             // Your MySQL password (leave empty if none)
$dbname = "bus_tracker";    // Your database name

 
$conn = new mysqli($servername, $username, $password, $dbname);

 
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

 
$email = $_POST['email'];
$department = $_POST['Department'];
$name = $_POST['Name'];
$bus_no = $_POST['bus_no'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Hash the password
$search_query = isset($_POST['search_query']) ? $_POST['search_query'] : ''; // Optional search query

 
$sql = "INSERT INTO users (email, department_id, name, bus_no, password, search_query) 
        VALUES ('$email', '$department', '$name', '$bus_no', '$password', '$search_query')";

 
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
