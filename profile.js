function checkProfile(){
    let name = localStorage.getItem('user');
    if(name !== null){
        if(name == 'admin'){
            let admin = document.querySelector('.btn-group');
            document.querySelector('#button-login').style.display = "none";
            admin.style.display = "block";
        }
        else{
            $('#userName').html(name);
            let admin = document.querySelector('.btn-group');
            document.querySelector('#button-login').style.display = "none";
            admin.style.display = "block";
        }
    }
}

  
  