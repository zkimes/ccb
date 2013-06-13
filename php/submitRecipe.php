<?php

include "dbconnect.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

	$userid = htmlentities($_POST["userid"], ENT_QUOTES);
	$name = htmlentities($_POST["name"], ENT_QUOTES);
	$summary = htmlentities($_POST["summary"], ENT_QUOTES);
	$ingredients = htmlentities($_POST["ingredients"], ENT_QUOTES);
	$directions = htmlentities($_POST["directions"], ENT_QUOTES);
	$prepTime = htmlentities($_POST["prepTime"], ENT_QUOTES);
	$cookTime = htmlentities($_POST["cooktime"], ENT_QUOTES);

	$query = "INSERT INTO `recipes`(`userid`, `name`, `summary`, `ingredients`, `steps`, 'prepTime', 'cookTime') VALUES ('$userid', '$name','$summary','$ingredients', '$directions', '$prepTime', '$cookTime')";

	$result = mysql_query($query) or die(mysql_error());

	print "success";

}

?>