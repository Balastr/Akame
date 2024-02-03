function call(){
	let msg = $('#formx').serialize();
	$.ajax({
		type: 'POST',
		url: 'http://localhost/test/akame/auth.php',
		data: msg,
		success: function(msg){
			if(msg == 2){
				alert('Такого пользователя не существует');
			}
			else if(msg == 1){
			 	let url = localStorage.getItem('page');
			 	location.href = url + '?saved_role='+ msg;
			}
			else{
				let url = localStorage.getItem('page');
				location.href = url + '?saved_role='+ msg;
			}
		},
		error:function(xhr,str){
			alert('Возникла ошибка: ' + xhr.responseCode)
		}
	})
}