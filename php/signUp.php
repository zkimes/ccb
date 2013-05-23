<?php

include "dbconnect.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

	$username = $_POST["username"];
	$email = $_POST["email"];
	$password = $_POST["password"];

	$query = "INSERT INTO `users`(`username`, `password`, `email`) VALUES ('$username','$password','$email')";

	$result = mysql_query($query) or die(mysql_error());

	print "success";

}

?>