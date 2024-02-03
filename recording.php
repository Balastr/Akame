<?php
	$host="localhost";
	$user="root";
	$pass="";
	$db="users";
	$usertable="recording";

	$name = $_POST["name"];
	$email = $_POST['email'];
	$phone = $_POST['phoneNumber'];
	$service = $_POST['service'];
	$master = $_POST['master'];
	$day = $_POST['day'];
	$status = 0;
	$link = mysqli_connect($host, $user, $pass, $db) or die("Ошибка " . mysqli_error($link));

	$query="insert into $usertable (name, email, phone, service, master, day, status) values ('$name', '$email', '$phone', '$service', '$master', '$day', '$status')";

	if(($name == '') || ($email == '') || ($phone == '')|| ($service == '') || ($master == '') || ($day == '')){
		$response = 0;
	}
	elseif(($service == 'Услуга') || ($master == 'Специалист')){
		$response = 2;
	}
	elseif(filter_var($email,FILTER_VALIDATE_EMAIL) === false){
			$response = 3;
		}
	else{
		$result = mysqli_query($link, $query) or die ("Ошибка " . mysqli_error($link));
		$response = 1;
	}
	echo json_encode($response);
?>