<?php

include "dbconnect.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$id = $_POST["id"];

	$query2 = "SELECT * from recipes where id like '$id'";

	$result2 = mysql_query($query2) or die(mysql_error());

	$array = array();

	while($row = mysql_fetch_array($result2)) {
		$array[0] = $row["id"];
		$array[1] = $row["name"];
		$array[2] = $row["summary"];
		$array[3] = $row["ingredients"];
		$array[4] = $row["steps"];
	}

	$json_result = json_encode($array);
	header('Content-Type: application/json');
	echo($json_result);

}

?>