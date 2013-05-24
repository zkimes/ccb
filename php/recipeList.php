<?php

include "dbconnect.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

	$query2 = "SELECT * from recipes";

	$result2 = mysql_query($query2) or die(mysql_error());

	$resultArray = array();

	while($row = mysql_fetch_array($result2)) {
		$array[0] = $row["id"];
		$array[1] = $row["name"];
		$array[2] = $row["summary"];
		array_push($resultArray, $array);
	}

	$json_result = json_encode($resultArray);
	header('Content-Type: application/json');
	echo($json_result);

}

?>