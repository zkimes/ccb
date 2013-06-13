<?php

include "dbconnect.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$id = $_POST["id"];

	$query2 = "SELECT * from recipes where id like '$id'";

	$result2 = mysql_query($query2) or die(mysql_error());

	$array = array();

	while($row = mysql_fetch_array($result2)) {
		$array[0] = html_entity_decode($row["id"], ENT_QUOTES);
		$array[1] = html_entity_decode($row["name"], ENT_QUOTES);
		$array[2] = html_entity_decode($row["summary"], ENT_QUOTES);
		$array[3] = html_entity_decode($row["prepTime"], ENT_QUOTES);
		$array[4] = html_entity_decode($row["cookTime"], ENT_QUOTES);
		$array[5] = html_entity_decode($row["ingredients"], ENT_QUOTES);
		$array[6] = html_entity_decode($row["steps"], ENT_QUOTES);
	}

	$json_result = json_encode($array);
	header('Content-Type: application/json');
	echo($json_result);

}

?>