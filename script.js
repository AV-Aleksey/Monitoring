var page = 0;
var onpage = 40;
GetContent();
setInterval(GetStatus , 10000);
GetStatus();


//***РАЗДЕЛ 1*** - "AJAX запрос в XML таблицу"----------------------------------------------------------------------
function GetContent () { // запуск ф-ии 
    var request;
    var base = [];
    var pathAlert = document.getElementsByClassName('message-box')[0];
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
        request = new ActiveXObject('Microsoft.XMLHTTP');
    }
    request.open('GET', 'data.csv');
    request.onreadystatechange = function () {
        if ((request.readyState===4) && (request.status===200)) {
            //Загрузка Базы;
            var csv = request.response.split('\r\n');
            for (var i = 0; i < csv.length; i++) {
                csv[i] = csv[i].replace(/"/g, " ");
                csv[i] = csv[i].replace(/\s/g, '');
                base.push(csv[i].split(','));
            }

            //Добавление контента;
            function createContent () {
                try {
                    var output = '';
                    for (let i = 1; i < base.length - 1; i++) {
                        let temp = document.querySelector('#itemTemplate');
                        //для карточки
                        temp.content.querySelector('.sidebar__item').setAttribute('rel',base[i][12]);
                        temp.content.querySelector('.sidebar__title').innerHTML = base[i][6];
                        temp.content.querySelector('.sidebar__text_ip').innerHTML = base[i][7];
                        temp.content.querySelector('.status-connect').setAttribute('rel', base[i][12]);
                        temp.content.querySelector('.sidebar__text_adress').innerHTML = base[i][3] + " " + base[i][4] + " " + base[i][5];
                        temp.content.querySelector('.sidebar__text_type').innerHTML = base[i][2];
                        //для скрытого контента
                        temp.content.querySelector('.silent__text_obj').innerHTML = base[i][6] + " " + base[i][2];
                        temp.content.querySelector('.silent__text_model').innerHTML = base[i][2];
                        temp.content.querySelector('.silent__text_adress').innerHTML = base[i][3] + " " + base[i][4] + " " + base[i][5];
                        temp.content.querySelector('.silent__text_ip').innerHTML = base[i][7];
                        temp.content.querySelector('.silent__text_mask').innerHTML = base[i][8];
                        temp.content.querySelector('.silent__text_shluz').innerHTML = base[i][9];
                        temp.content.querySelector('.silent__text_status').innerHTML = base[i][12];
                        temp.content.querySelector('.silent__text_shluzStatus').innerHTML = base[i][13];
                        temp.content.querySelector('.silent__text_oborudovanie').innerHTML = base[i][10];
                        temp.content.querySelector('.silent__text_comment').innerHTML = base[i][11];
                        temp.content.querySelector('.silent__text_lastConnect').innerHTML = base[i][14];
                        output += temp.innerHTML;
                    }
                    document.getElementById('logs').innerHTML = output;
                    return true;
                }  catch (e) {
                        console.log(e);
                        return false
                    }
                }
            createContent();

            function alertMsg (text, addClass) {
                var messageDom = '<div class =' + '"' + 'message' + " " + addClass + '"' + '>';
                messageDom += '<p class="message__text">' + text + '</p>';
                messageDom += '</div>';
                pathAlert.innerHTML = messageDom;
                setTimeout(function () {
                    document.querySelector('.message-box .message').style.display = "none";
                },3000);
                console.log(text)
            }

            $(".sidebar__item").click(function () {
                var silentDiv = $(this).closest('li').find(".silent").html()
                $(".window-content").html(silentDiv);
            })

        }
    }
    request.send();
}
//
function GetStatus () { // запуск ф-ии
    var request;
    var base = [];
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
        request = new ActiveXObject('Microsoft.XMLHTTP');
    }
    request.open('GET', 'data.csv');
    request.onreadystatechange = function () {
        if ((request.readyState===4) && (request.status===200)) {
			var pathAlert = document.getElementsByClassName('message-box')[0]; //путь до HTML блока для отображения сообщений
            var csv = request.response.split('\r\n');
            for (var i = 0; i < csv.length; i++) {
                csv[i] = csv[i].replace(/"/g, " ");
                csv[i] = csv[i].replace(/\s/g, '');
                base.push(csv[i].split(','));
            }
			checkStatusLink ();

            function checkStatusLink (){
				var span = document.getElementsByClassName('silent__text_shluzStatus');
                var spanIp = document.getElementsByClassName('silent__text_status');
                var li = document.getElementsByClassName('sidebar__item');
                var countShluz = 0
                var countIp = 0
                for(let i = 0, j = 1; i < li.length; i++ & j++) {
                    if(li[i].getAttribute('rel') != base[j][12]) {
                        li[i].removeAttribute('rel');
                        li[i].setAttribute('rel',base[j][12]);
                        spanIp[i].innerText = base[j][12];
                        countIp++;
                        //console.log("СТАТУС УСТРОЙСТВА ИЗМЕНЕН - Карточка №:" + [i] + "изменен на " + base[j][12])
                    } 
                    if(span[i].innerText != base[j][13]) {
                        //console.log("СТАТУС ШЛЮЗА ИЗМЕНЕН - Карточка №" + [i] + " " 
                        //    + span[i].innerText + " " + "изменен на: " + base[j][13]);
                        span[i].innerText = base[j][13];
                        countShluz++
                    } 
                }
                console.log("Изменено статусов ШЛЮЗОВ: " + countShluz);
                console.log("Изменено статусов УСТРОЙСТВ: " + countIp)
            }

			//Вывод на экран статистики статусов UP/DOWN
            var up = $('li[rel="UP"]');
            var down = $('li[rel="DOWN"]');
            var all = document.getElementsByClassName('sidebar__item');
            document.querySelector('span.stat__up').innerHTML =  Number(up.length);
            document.querySelector('span.stat__down').innerHTML =  Number(down.length);
            document.querySelector('span.stat__all').innerHTML =  Number(all.length);

			//Конец функции ****************************************************************************
			function alertMsg (text, addClass) {
				var messageDom = '<div class =' + '"' + 'message' + " " + addClass + '"' + '>';
				messageDom += '<p class="message__text">' + text + '</p>';
				messageDom += '</div>';
				pathAlert.innerHTML = messageDom;
				setTimeout(function () {
					document.querySelector('.message-box .message').style.display = "none";
				},3000)
				console.log(text)
			}
		}
    }
    request.send();
}

//***РАЗДЕЛ 2*** - "Независемые функции"----------------------------------------------------------------------
// 1)функция сравнения элементов массива массива
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

// 2)Реагирование чекбоксов ***
checkDown.onclick = function () {
    let down = $('li[rel="DOWN"]');
	if (checkDown.checked) {
		for (let i = 0; i < down.length; i++) {
			down[i].style.display = "none";
		}
	} else {
        for (let i = 0; i < down.length; i++) {
            down[i].style.display = "block";
        }
    }  
}
checkUp.onclick = function () {
    let up = $('li[rel="UP"]');
	if (checkUp.checked) {
		for (let i = 0; i < up.length; i++) {
			up[i].style.display = "none";
		}
	} else  for (let i = 0; i < up.length; i++) {
		up[i].style.display = "block";
	}
}

// 3)Поиск по объектам ***
function myFunction () {
	var input, filter, li, ttl, i;
	input = document.getElementById('myInput');
	filter = input.value.toUpperCase();
    li = document.getElementsByClassName("sidebar__item")
	for (i = 0; i < li.length; i++) {
		ttl = li[i].querySelector('.sidebar__title');
		if (ttl.innerHTML.toUpperCase() .indexOf(filter) > -1) {
			li[i].style.display = "block";
		}
		else {
			li[i].style.display = "none";
		}
	}
}
$(document).ready(function () {
    $('.offer__btn').click(function() {
        $('#exampleModal_form').arcticmodal();
    });

    $('.create__btn').click(function () {
        var massInput = [];
        var input = $('.create__list input');
        for(let i = 0; i < input.length; i++) {
            massInput.push(input[i].value);
            massInput.join(", ");
        }
        //
        console.log(massInput)
    })
});


    


// p  pp
// ot= (p-1)*pp
// do =(p-1)*pp+pp

//setInterval(nextPage, 1000);
// function nextPage() {
//     page++;
//     let li = document.getElementsByClassName("sidebar__item");
//     for(let i = (page - 1)*onpage; i < li.length && i < (page - 1) * onpage + onpage; i++) {
//         li[i].style.display = "block";
//     }
// }
// document.getElementsByClassName('sidebar')[0].onscroll = function (e) {
//     console.log(this.scrollHeight - this.scrollTop);
//   if(this.scrollHeight - this.scrollTop < 1000) {
//       nextPage();
//   };
// }
