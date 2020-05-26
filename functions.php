
<?php
    //В этом скрипте выполняется получение данных из таблицы SQL с последующей конвертацией их в JSON формат
    $link = mysqli_connect('localhost','user','12345','checkT'); //В ДАННЫЕ ПОЛЯ ВПИШИТЕ 1)Имя хоста 2)имя пользователя БД 3)Пароль от БД 4)Имя базы данных
    
    if(mysqli_connect_errno()) {
        echo 'Ошибка в подключении к базе данных ('.mysqli_connect_errno().'): '.mysqli_connect_error();
        exit();
    }
    function get_content($one) {
        $sql = "SELECT * FROM `get_info`"; //В данной строке за место get_info название своей SQL таблицы
        $result = mysqli_query($one, $sql); //сохранение результата запроса в переменную
        $arr = mysqli_fetch_all($result, MYSQLI_ASSOC); //преобразование результата к массиву
        $data = array_pop($arr);//получение последнего массива
        return $data;
    }
    $data = get_content($link); //Создание глобальной переменной data с сохранением в нее результата функции с параметром link
    echo json_encode($data); //Преобразование полученных данных в формат JSON


