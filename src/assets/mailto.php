<?php
$dataArr = json_decode($HTTP_RAW_POST_DATA, true);
$body = "Email: ". htmlspecialchars(trim($dataArr['email']))."\n";
($dataArr['name'] != '' && $dataArr['name'] != null)? $body .= "Имя: ". htmlspecialchars(trim($dataArr['name']))."\n":$body .= "" ;
($dataArr['theme'] != '' && $dataArr['theme'] != null)? $body .= "Тема: ". htmlspecialchars(trim($dataArr['theme']))."\n":$body .= "" ;
($dataArr['phone'] != '' && $dataArr['phone'] != null)? $body .= "Номер телефона: ". htmlspecialchars(trim($dataArr['phone']))."\n":$body .= "" ;
($dataArr['message'] != '' && $dataArr['message'] != null)? $body .= "Текст сообщения: ". htmlspecialchars(trim($dataArr['message']))."\n":$body .= "" ;
mail("uk.xoz17@ukr.net",
    "Письмо с сайта xoz.od.ua",
    $body,
    "From: xoz.od.ua@gmail.com")
;
?>