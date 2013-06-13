<?php

include "dbconnect.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$query2 = "SELECT * from recipes";

	$result2 = mysql_query($query2) or die(mysql_error());

	// echo $result2;
	$array = array();

	while($row = mysql_fetch_array($result2)) {
		$obj = new stdClass();
		$obj->id = $row["id"];
		$obj->name = $row["name"];
		$obj->summary = $row["summary"];
		$obj->ingredients = $row["ingredients"];
		$obj->steps = $row["steps"];

		$array[] = $obj;
	}

	$json_result = json_encode($array);
	header('Content-Type: application/json');
	echo($json_result);

}

?>