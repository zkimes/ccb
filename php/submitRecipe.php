<?php

include "dbconnect.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$userid = $_POST["userid"];
	$name = $_POST["name"];
	$summary = $_POST["summary"];
	$ingredients = $_POST["ingredients"];
	$directions = $_POST["directions"];

	$query = "INSERT INTO `recipes`(`userid`, `name`, `summary`, `ingredients`, `steps`) VALUES ('$userid', '$name','$summary','$ingredients', '$directions')";

	$result = mysql_query($query) or die(mysql_error());

	print "success";

}

?>