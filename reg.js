function call(){
	let msg = $('#regForm').serialize();
	$.ajax({
		type: 'POST',
		url: 'http://localhost/test/akame/reg.php',
		data: msg,
		success: function(msg){
			if(msg == 0){
				alert('Вы не заполнили все поля');
			}
			if(msg == 1){
				alert('Такой логин уже существует');
			}
			if(msg == 2){
				alert('Пароли не совпадают');
			}
			if(msg == 3){
				alert('E-mail введен не верно');
			}
			if(msg == 4){
				alert('Регистрация прошла успешно');
				location.href = 'login.html';
			}
		},
		error:function(xhr,str){
			alert('Возникла ошибка: ' + xhr.responseCode)
		}
	})
}