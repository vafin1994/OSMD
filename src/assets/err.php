<?php
include("/.InformResurs/0Common/lib/screen.inc");
screen::run(screen::ERROR);
$code=$_SERVER["REDIRECT_STATUS"];
if (empty($code))
    Header("Location: /");
switch ($code) {
    case 100: $text = 'Continue'; break;
    case 101: $text = 'Switching Protocols'; break;
    case 200: $text = 'OK'; break;
    case 201: $text = 'Created'; break;
    case 202: $text = 'Accepted'; break;
    case 203: $text = 'Non-Authoritative Information'; break;
    case 204: $text = 'No Content'; break;
    case 205: $text = 'Reset Content'; break;
    case 206: $text = 'Partial Content'; break;
    case 300: $text = 'Multiple Choices'; break;
    case 301: $text = 'Moved Permanently'; break;
    case 302: $text = 'Moved Temporarily'; break;
    case 303: $text = 'See Other'; break;
    case 304: $text = 'Not Modified'; break;
    case 305: $text = 'Use Proxy'; break;
    case 400: $text = 'Bad Request'; break;
    case 401: $text = 'Не авторизирован'; break;
    case 402: $text = 'Payment Required'; break;
    case 403: $text = 'Доступ запрещен'; break;
    case 404: $text = 'Страница не найдена'; break;
    case 405: $text = 'Method Not Allowed'; break;
    case 406: $text = 'Not Acceptable'; break;
    case 407: $text = 'Proxy Authentication Required'; break;
    case 408: $text = 'Request Time-out'; break;
    case 409: $text = 'Conflict'; break;
    case 410: $text = 'Gone'; break;
    case 411: $text = 'Length Required'; break;
    case 412: $text = 'Precondition Failed'; break;
    case 413: $text = 'Request Entity Too Large'; break;
    case 414: $text = 'Request-URI Too Large'; break;
    case 415: $text = 'Unsupported Media Type'; break;
    case 500: $text = 'Внутренняя ошибка сервера'; break;
    case 501: $text = 'Not Implemented'; break;
    case 502: $text = 'Bad Gateway'; break;
    case 503: $text = 'Service Unavailable'; break;
    case 504: $text = 'Gateway Time-out'; break;
    case 505: $text = 'HTTP Version not supported'; break;
    default:
        exit('Unknown http status code "' . htmlentities($code) . '"');
        break;
}

?>

<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf8">
    <title>Ошибка</title>
</head>
<body>
<h2 align="center">
    Ошибка <?= " ". $code ?><br>
    <?= " ". $text ?> <br>
    <a href="../ ">Вернуться на главную</a>
</h2>
</body>
</html>
