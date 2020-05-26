function createContent (count,arr ){
    var output = '';
    for(let i = 0, n = 1; i < count.length; i++ & n++) {
        output += '<tr class="element">';
        output += '<td class="Num">'+ n +'</td>';
        output += '<td class="Num">'+ object[i] +'</td>';
        output += '<td class="Num">'+ modelUs[i] +'</td>';
        output += '<td class="Num">'+ adress[i] +'</td>';
        output += '<td class="Num">'+ numberVSP[i] +'</td>';
        output += '<td class="Num">'+ iPadress[i] +'</td>';
        output += '<td class="Num">'+ mask[i] +'</td>';
        output += '<td class="Num">'+ shluz[i] +'</td>';
        output += '<td class="Num">'+ oborudovanie[i] +'</td>';
        output += '<td class="Num">'+ comment[i] +'</td>';
        output += '<td class="Num">'+ status[i] +'</td>';
        output += '<td class="Num">'+ shluzStatus[i] +'</td>';
        output += '<td class="Num">'+ lastConnect[i] +'</td>';
        output += '</tr>';
    }
    document.getElementById('logs').innerHTML = output;
}


/функция сравнения элементов массива массива
//параметры: nameArrFor - массив для цикла; arrOne - массив для проверки; number - значение с чем сравнивать; j - номер элемента в XMLHTTPrequest;
function checkArray(nameArrFor,arrOne,number,j) {
    for(let i = 0; i < nameArrFor.length; i++) {
        if(arrOne[i] == number[i].childNodes[j].nextElementSibling.firstChild.nodeValue) {
            console.log("Значение:"+ arrOne[i] + " = " + number[i]);
        } else {
            console.log("Значение не равно: " + arrOne[i] + " != " + number[i]);
            return false
        }
    }
    return true
}

//Проверка на изменения
if (checkArray(getNum,object,getNum,17) == false) {
    createContent(getNum);
    alert("Контент обновлен");
    return false
} else {
    alert("Все элементы равны");
    return false
}


function createContent (count,arr){
    var output = '';
    for(let i = 0, n = 1; i < count.length; i++ & n++) {
        output += '<tr class="element">';
        output += '<td class="Num">'+ n +'</td>';
        output += '<td class="Num">'+ arr[i][i] +'</td>';
        output += '<td class="Num">'+ arr[i][i] +'</td>';
        output += '<td class="Num">'+ arr[i][i] +'</td>';
        output += '<td class="Num">'+ arr[i][i] +'</td>';
        output += '<td class="Num">'+ arr[i][i] +'</td>';
        output += '<td class="Num">'+ arr[i][i] +'</td>';
        output += '<td class="Num">'+ arr[i][i] +'</td>';
        output += '<td class="Num">'+ arr[i][i] +'</td>';
        output += '<td class="Num">'+ arr[i][i] +'</td>';
        output += '<td class="Num">'+ arr[i][i] +'</td>';
        output += '<td class="Num">'+ arr[i][i] +'</td>';
        output += '<td class="Num">'+ arr[i][i] +'</td>';
        output += '</tr>';
    }
    document.getElementById('logs').innerHTML = output;
}
var arrayTable = [];
function getArr() {
    for (let i = 0; i < getNum.length; i++) {
        object.push(getNum[i].childNodes[1].nextElementSibling.firstChild.nodeValue);
        modelUs.push(getNum[i].childNodes[3].nextElementSibling.firstChild.nodeValue);
        adress.push(getNum[i].childNodes[5].nextElementSibling.firstChild.nodeValue);
        numberVSP.push(getNum[i].childNodes[7].nextElementSibling.firstChild.nodeValue);
        iPadress.push(getNum[i].childNodes[9].nextElementSibling.firstChild.nodeValue);
        mask.push(getNum[i].childNodes[11].nextElementSibling.firstChild.nodeValue);
        shluz.push(getNum[i].childNodes[13].nextElementSibling.firstChild.nodeValue);
        oborudovanie.push(getNum[i].childNodes[15].nextElementSibling.firstChild.nodeValue);
        comment.push(getNum[i].childNodes[17].nextElementSibling.firstChild.nodeValue);
        status.push(getNum[i].childNodes[19].nextElementSibling.firstChild.nodeValue);
        shluzStatus.push(getNum[i].childNodes[21].nextElementSibling.firstChild.nodeValue);
        lastConnect.push(getNum[i].childNodes[23].nextElementSibling.firstChild.nodeValue);
    }
    arrayTable.push(object);
    arrayTable.push(modelUs);
    arrayTable.push(adress);
    arrayTable.push(numberVSP);
    arrayTable.push(iPadress);
    arrayTable.push(mask);
    arrayTable.push(shluz);
    arrayTable.push(oborudovanie);
    arrayTable.push(comment);
    arrayTable.push(status);
    arrayTable.push(shluzStatus);
    arrayTable.push(lastConnect);
    return true
}

function myFunction () {
	var input, filter, ul, li, a, i;
	filter = input.value.toUpperCase();
	input = document.getElementById('myInput');
	
	ul = document.getElementById("myUL");
	li = document.getElementsByTagName("li");
	
	for (i = 0; i < li.length; i++) {
		a = li[i].getElementsByTagName("a")[0];
		if (a.innerHTML.toUpperCase() .indexOf(filter) > -1) {
			li[i].style.display = "";
		}
		else {
			li[i].style.display = "none";
		}
	}
}


checkDown.onclick = function () {
    var down = document.getElementsByClassName('DOWNstr');
    if (checkDown.checked) {
        for (let i = 0; i < down.length; i++) {
            down[i].style.display = "none";
        }
    } else  for (let i = 0; i < down.length; i++) {
        down[i].style.display = "table-row";
    }
}
checkUp.onclick = function () {
    var up = document.getElementsByClassName('UPstr');
    if (checkUp.checked) {
        for (let i = 0; i < up.length; i++) {
            up[i].style.display = "none";
        }
    } else  for (let i = 0; i < up.length; i++) {
        up[i].style.display = "table-row";
    }
}


function createContent (){
    var output = '';
    for(let i = 0, n = 1; i < lastConnect.length; i++ & n++) {
        output += '<li class=' + '"' + status[i]+"str sidebar__item" + '"' +'>'
        output += '<div class=' + '"' + n +"id sidebar__head-content" + '"' +'>'
        output += '<div class= "sidebar__wrap_title">'
        output += '<h6 class="sidebar__wrap_title">'+ numberVSP[i] +'</h6>';
        output += '<span class=' + '"' + status[i] + ' label-span status-connect"' +'>'+'</span>';
        output +='</div>';
        output += '<p class="sidebar__text">' + '<b>IP: </b>' + '<span class="sidebar__text_ip">' + iPadress[i] + '</span>' + '</p>';
        output += '<p class="sidebar__text">' + '<b>Адрес: </b>' + '<span class="sidebar__text_adress">' + adress[i] + '</span>' + '</p>';
        output += '<p class="sidebar__text">' + '<b>Тип: </b>' + '<span class="sidebar__text_type">' + object[i] + '</span>' + '</p>';
        output += '<div class= "silent">'
        output += '<h5 class="silent__text">' + numberVSP[i] + " " + object[i] +  '</h5>';
        output += '<p class="silent__text">' + '<b>Объект: </b>' + '<span class="silent__text_obj">' + object[i] + '</span>' + '</p>';
        output += '<p class="silent__text">' + '<b>Модель УС: </b>' + '<span class="silent__text_model">' + modelUs[i] + '</span>' + '</p>';
        output += '<p class="silent__text">' + '<b>Адрес: </b>' + '<span class="silent__text_adress">' + adress[i] + '</span>' + '</p>';
        output += '<p class="silent__text">' + '<b>IP: </b>' + '<span class="silent__text_ip">' + iPadress[i] + '</span>' + '</p>';
        output += '<p class="silent__text">' + '<b>Маска: </b>' + '<span class="silent__text_mask">' + mask[i] + '</span>' + '</p>';
        output += '<p class="silent__text">' + '<b>Шлюз: </b>' + '<span class="silent__text_shluz">' + shluz[i] + '</span>' + '</p>';
        output += '<p class="silent__text">' + '<b>Статус: </b>' + '<span class="silent__text_status">' + status[i] + '</span>' + '</p>';
        output += '<p class="silent__text">' + '<b>Статус шлюза: </b>' + '<span class="silent__text_shluzStatus">' + shluzStatus[i] + '</span>' + '</p>';
        output += '<p class="silent__text">' + '<b>Оборудование: </b>' + '<span class="silent__text_oborudovanie">' + oborudovanie[i] + '</span>' + '</p>';
        output += '<p class="silent__text">' + '<b>Комментарий: </b>' + '<span class="silent__text_comment">' + comment[i] + '</span>' + '</p>';
        output += '<p class="silent__text">' + '<b>Последее соедиение: </b>' + '<span class="silent__text_lastConnect">' + lastConnect[i] + '</span>' + '</p>';
        output += '</div>'
        // output += '<td class="Num">'+ n +'</td>';
        output +='</div>';
        output += '</li>';
    }
    document.getElementById('logs').innerHTML = output;
    return true
}