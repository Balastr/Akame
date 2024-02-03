// ------------ ЦЕНЫ ----------
let addPriceBtn = document.querySelector('#addPrice');
let changePriceBtn = document.querySelector('#changePrice');
let deletePriceBtn = document.querySelector('#deletePrice');
let titleAddPrice = document.querySelector("#titleAddPrice");
let addPriceSelectBtn = document.querySelector('#titleAddPriceSelect');
let changeCost = document.querySelector('#cost');
let changeTitlePrice = document.querySelectorAll('.subTitlePrice');
let priceSpan = document.querySelectorAll('.price__number');
let priceItem = document.querySelectorAll('.price__item');
let item = document.createElement('option');
let priceName = document.querySelectorAll('.price__name');








function clearInput(){
    titleAddPrice.value = '';
    changeCost.value = '';
    for(j=0;j<changeTitlePrice.length;j++){
        changeTitlePrice[j].value = '';
    }
}

function addPriceClick(){
    addPriceBtn.style.display = "block";
    changePriceBtn.style.display = "none";
    deletePriceBtn.style.display = "none";
    addPriceSelectBtn.style.display = "none";
    titleAddPrice.style.display = "block";
    changeCost.style.display = "block";
    for(i=0;i<6;i++){
        changeTitlePrice[i].style.display = "block";
    }
    clearInput();
}

function changePriceClick(){
    let arr = document.querySelectorAll('.price__name');
    let changeCost = document.querySelector('#cost');
    let priceSpan = document.querySelectorAll('.price__number');
    let priceItem = document.querySelectorAll('.price__item');
    addPriceBtn.style.display = "none";
    deletePriceBtn.style.display = "none";
    titleAddPrice.style.display = "none";
    addPriceSelectBtn.style.display = "block";
    changePriceBtn.style.display = "block";
    changeCost.style.display = "block";
    for(i = 0;i<6;i++){
        changeTitlePrice[i].style.display = "block";
    }
    clearInput();
    let zero = 0;

    addPriceSelectBtn.addEventListener('change',function(){
        let index = addPriceSelectBtn.selectedIndex;
        if(index == 1){
            changeCost.value = priceSpan[index-1].textContent;
            for(i=0;i<6;i++){
                changeTitlePrice[i].value = priceItem[i].textContent;
            }            
        }
        else if(index == 2){
            let zero = 0;
            changeCost.value = priceSpan[index-1].textContent;
            for(i=6;i<12;i++){
                changeTitlePrice[zero].value = priceItem[i].textContent;
                zero++;
            } 
        }
        else if(index == 3){
            let zero = 0;
            changeCost.value = priceSpan[index-1].textContent;
            for(i=12;i<18;i++){
                changeTitlePrice[zero].value = priceItem[i].textContent;
                zero++;
            }             
        }
        else if(index == 4){
            let zero = 0;
            changeCost.value = priceSpan[index-1].textContent;
            for(i=18;i<24;i++){
                changeTitlePrice[zero].value = priceItem[i].textContent;
                zero++;
            }             
        }
        else if(index == 5){
            let zero = 0;
            changeCost.value = priceSpan[index-1].textContent;
            for(i=24;i<30;i++){
                changeTitlePrice[zero].value = priceItem[i].textContent;
                zero++;
            }             
        }
        else{
            let zero = 0;
            changeCost.value = priceSpan[index-1].textContent;
            for(i=30;i<36;i++){
                changeTitlePrice[zero].value = priceItem[i].textContent;
                zero++;
            }         
        }
    });
    if(addPriceSelectBtn.options.length=1){
        for(x = 0; x< arr.length; x++){
            item.remove(x);
            item.innerHTML = arr[x].textContent;
            addPriceSelectBtn.appendChild(item.cloneNode(true));
        }
    }
}

function deletePriceClick(){
    let priceName = document.querySelectorAll('.price__name');
    addPriceBtn.style.display = "none";
    changePriceBtn.style.display = "none";
    deletePriceBtn.style.display = "block";
    addPriceSelectBtn.style.display = "block";
    titleAddPrice.style.display = "none";
    changeCost.style.display = "none";
    for(i=0;i<6;i++){
        changeTitlePrice[i].style.display = "none";
    }
    if(addPriceSelectBtn.options.length=1){
        for(x = 0; x< priceName.length; x++){
            item.remove(x);
            item.innerHTML = priceName[x].textContent;
            addPriceSelectBtn.appendChild(item.cloneNode(true));
        }
    }
}

function addPrice(){
    let priceName = document.querySelectorAll('.price__name');
    let titleAddPrice1 = titleAddPrice.value;
    let cost1 = changeCost.value;
    if(priceName.length<6){
        let check = 0;
        if(titleAddPrice1.value == ''){
            alert('Необходимо заполнить все поля');
        } else if(cost1.value == ''){
            alert('Необходимо заполнить все поля');
        } else {
            check++;
        }
        for(i=0;i<6;i++){
            if(changeTitlePrice[i].value == ''){
                alert('Необходимо заполнить все поля');
                break;
            }
            else{
                check++;
            }
        }
        if(check == 7){

            document.getElementById("priceW").insertAdjacentHTML("beforeEnd",
            "<div class='col-sm-6 col-md-6 col-lg-4 col-xl-4 price__wrapper'> <p class='price__name'>" + titleAddPrice1 + "</p> <p class='price__cost'>от <span class='price__span price__number'>" + cost1 + "</span><span class='price__span'>&#8381;</span></p> <ul class='price-ul'> <li class='price__item'>"+ changeTitlePrice[0].value +"</li> <li class='price__item'>"+ changeTitlePrice[1].value +"</li> <li class='price__item'>"+ changeTitlePrice[2].value +"</li> <li class='price__item'>"+ changeTitlePrice[3].value +"</li> <li class='price__item'>"+ changeTitlePrice[4].value +"</li> <li class='price__item'>"+ changeTitlePrice[5].value +"</li> </ul> <a href='#online' class='price__button'>Записаться на приём</a> </div>");
        }
    } else {
        alert("Максимальное кол-во услуг на странице не должно быть больше 6");
    }
}

function changePrice(){
    let changeCost = document.querySelector('#cost');
    let priceSpan = document.querySelectorAll('.price__number');
    let priceItem = document.querySelectorAll('.price__item');
    let index = addPriceSelectBtn.selectedIndex;
    if(index == 1){
        let check = 0;
        if(changeCost.value.length == 0){
            alert("Не все поля заполнены");
        } else{
            check++;
        }
        for(i=0;i<6;i++){
            if(changeTitlePrice[i].value.length == 0){
                    check = 0;
                    alert("Не все поля заполнены");
                break;
            }
            else{
                check++;
            }
        }
        if(check==7){
            priceSpan[index-1].textContent = changeCost.value;
            for(i = 0; i<6; i++){
                priceItem[i].textContent = changeTitlePrice[i].value
            }
        }
    }
    
    else if(index == 2){
        let check = 0;
        if(changeCost.value.length == 0){
            alert("Не все поля заполнены");
        } else{
            check++;
        }
        for(i=0;i<6;i++){
            if(changeTitlePrice[i].value.length == 0){
                    check = 0;
                    alert("Не все поля заполнены");
                break;
            }
            else{
                check++;
            }
        }
        if(check==7){
            priceSpan[index-1].textContent = changeCost.value;
            let zero = 0;
            for(i = 6; i<12; i++){
                priceItem[i].textContent = changeTitlePrice[zero].value;
                zero++;
            }
        }
    }
    else if(index == 3){
        let check = 0;
        if(changeCost.value.length == 0){
            alert("Не все поля заполнены");
        } else{
            check++;
        }
        for(i=0;i<6;i++){
            if(changeTitlePrice[i].value.length == 0){
                    check = 0;
                    alert("Не все поля заполнены");
                break;
            }
            else{
                check++;
            }
        }
        if(check==7){
            priceSpan[index-1].textContent = changeCost.value;
            let zero = 0;
            for(i = 12; i<18; i++){
                priceItem[i].textContent = changeTitlePrice[zero].value;
                zero++;
            }
        }
    }
    else if(index == 4){
        let check = 0;
        if(changeCost.value.length == 0){
            alert("Не все поля заполнены");
        } else{
            check++;
        }
        for(i=0;i<6;i++){
            if(changeTitlePrice[i].value.length == 0){
                    check = 0;
                    alert("Не все поля заполнены");
                break;
            }
            else{
                check++;
            }
        }
        if(check==7){
            priceSpan[index-1].textContent = changeCost.value;
            let zero = 0;
            for(i = 18; i<24; i++){
                priceItem[i].textContent = changeTitlePrice[zero].value;
                zero++;
            }
        }
    }
    else if(index == 5){
        let check = 0;
        if(changeCost.value.length == 0){
            alert("Не все поля заполнены");
        } else{
            check++;
        }
        for(i=0;i<6;i++){
            if(changeTitlePrice[i].value.length == 0){
                    check = 0;
                    alert("Не все поля заполнены");
                break;
            }
            else{
                check++;
            }
        }
        if(check==7){
            priceSpan[index-1].textContent = changeCost.value;
            let zero = 0;
            for(i = 24; i<30; i++){
                priceItem[i].textContent = changeTitlePrice[zero].value;
                zero++;
            }
        }
    }
    else if(index == 6){
        let check = 0;
        if(changeCost.value.length == 0){
            alert("Не все поля заполнены");
        } else{
            check++;
        }
        for(i=0;i<6;i++){
            if(changeTitlePrice[i].value.length == 0){
                    check = 0;
                    alert("Не все поля заполнены");
                break;
            }
            else{
                check++;
            }
        }
        if(check==7){
            priceSpan[index-1].textContent = changeCost.value;
            let zero = 0;
            for(i = 30; i<36; i++){
                priceItem[i].textContent = changeTitlePrice[zero].value;
                zero++;
            }
        }
    }
    else{
        alert('Необходимо выбрать услугу');
    }
}

function deletePrice(){
    let priceName = document.querySelectorAll('.price__name');
    let serviceBlock = document.querySelectorAll('.price__wrapper');
    let index = addPriceSelectBtn.selectedIndex;
    let array = Array.from(priceName);
    if(index == 1){
        serviceBlock[index-1].style.display = 'none';
        array[index-1].remove();
    } else if(index == 2){
        serviceBlock[index-1].style.display = 'none';
        array[index-1].remove();
    } else if(index == 3){
        serviceBlock[index-1].style.display = 'none';
        array[index-1].remove();
    } else if(index == 4){
        serviceBlock[index-1].style.display = 'none';
        array[index-1].remove();
    } else if(index == 5){
        serviceBlock[index-1].style.display = 'none';
        array[index-1].remove();
    } else if(index == 6){
        serviceBlock[index-1].style.display = 'none';
        array[index-1].remove();
    } else {
        alert("Необходимо выбрать услугу");
    }
}

// -----------------------------------