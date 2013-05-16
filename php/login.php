<?php

include "dbconnect.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$username = $_POST["username"];
	$password = $_POST["password"];

	$query = "SELECT * from users where `username` like '$username'";

	$result = mysql_query($query) or die(mysql_error());

	

	while($row = mysql_fetch_array($result)) {
		if ($row["password"] == $password) {
			print "success";
		}else {
			print "failure";
		}
	}

}

?>