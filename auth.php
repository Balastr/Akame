<?php
	$host="localhost";
	$user="root";
	$password="";
	$db="users";
	$usertable="users";

	$login = $_POST['login'];
	$pass = $_POST['pass'];

	$link = mysqli_connect($host, $user, $password, $db) or die("Ошибка " . mysqli_error($link));

	$query = "select login, pass, role from users where login='".$login."' and pass='".$pass."'";

	$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link));

	$num = mysqli_num_rows($result);
	if($num == 0){
		$response = 2;
	}
	else{
		session_start();
		$arr = mysqli_fetch_array($result);
		$_SESSION['user'] = $arr[0];
		$response = $arr[2];

		if($arr[2] == 0){
			$response = $login;
		}
		else{
			$reponse = $arr[2];
		}
	}
	echo $response;
?>