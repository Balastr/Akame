<?php
	$host="localhost";
	$user="root";
	$password="";
	$db="users";
	$usertable="users";

	$name = $_POST['name'];
	$surname = $_POST['surname'];
	$login = $_POST['login'];
	$email = $_POST['email'];
	$pass = $_POST['pass'];
	$repeatPass = $_POST['repeatPass'];
	$role = 0;

	$link = mysqli_connect($host, $user, $password, $db) or die("Ошибка " . mysqli_error($link));

	$query = "insert into $usertable(name,surname,login,pass,email,role) values ('$name', '$surname', '$login', '$pass','$email', '$role')";

	$query2 = "select login from users where login='".$login."'";
	$result2 = mysqli_query($link, $query2) or die("Ошибка " . mysqli_error($link));
	$num = mysqli_num_rows($result2);
	$checkLogin = mysqli_fetch_array($result2);

	if($num == 0){
		if(($name == '') || ($surname == '') || ($login == '') || ($email == '') || ($pass == '') || ($repeatPass == '')){
			$response = 0;
		}
		elseif($pass != $repeatPass){
			$response = 2;
		}
		elseif(filter_var($email,FILTER_VALIDATE_EMAIL) === false){
			$response = 3;
		}
		else{
			$response = 4;
			$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link));
		}
	}
	else{
		$response = 1;
	}



	echo json_encode($response);
?>