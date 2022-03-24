<?php
@header("content-type:text/html;charset=utf8");
$conn = mysqli_connect("localhost", "root", "123456") or die("FATAL_ERR" . mysqli_error($conn));
$select = mysqli_select_db($conn, 'pim');
$utf = mysqli_query($conn, "set names utf8");


$unit = $_POST["unit"];
$checked = $_POST["checked"];
$ability = $_POST["ability"];


$query = "";
if ($unit != "-1") $query = $query . "buildingInfo = " . $unit . " and ";
if ($checked != "-1") $query = $query . "loginInfo = " . $checked . " and ";
if ($ability != "-1") $query = $query . "moveInfo = " . $ability . " and ";
if ($query != "") {
	$query = substr($query, 0, -5);
	$query = "where " . $query;
}

$sql = mysqli_query($conn, "select * from resi " . $query);

$i = 0;
$row = mysqli_fetch_array($sql);
do {
	$rows[$i] = $row;
	$i++;
} while ($row = mysqli_fetch_array($sql));
$rowall = '';
for ($i = 0; $i < count($rows); $i++) {
	for ($j = 1; $j < 10; $j++) {
		$rowall = $rowall . $rows[$i][$j] . ',';
	}
	$rowall = $rowall . $rows[$i][$j] . ';';
}

if (1 == 0) {
	echo json_encode('err');
} else {
	echo json_encode($rowall);
}
?>