?php
	$Name = $_POST['Name'];
	$email = $_POST['email'];
	

	// Database connection
	$conn = new mysqli('localhost','root','','mourya');
	if($conn->connect_error){
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into mourya(Name,email) values(?, ?)");
		$stmt->bind_param("ss", $Name, $email);
	    $stmt->execute();

		echo "Registration successfully...";
		$stmt->close();
		$conn->close();
	}
?