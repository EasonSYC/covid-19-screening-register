<?php
@header("content-type:text/html;charset=utf8");
$conn = mysqli_connect("localhost", "root", "123456") or die("FATAL_ERR" . mysqli_error($conn));
$select = mysqli_select_db($conn, 'pim');
$utf = mysqli_query($conn, "set names utf8");


$syid = $_POST["sid"];


$sql = mysqli_query($conn, "select checked from resi where syid=$syid");
$row = mysqli_fetch_array($sql);
$num = $row[0];

$sql = mysqli_query($conn, "update resi set checked=1-$num where syid=$syid");

if (1 == 0) {
	echo json_encode('err');
} else {
	echo json_encode($rowall);
}
