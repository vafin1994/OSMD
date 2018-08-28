<?php
$dataArr = json_decode($HTTP_RAW_POST_DATA, true);
$body = "<h2>Email: ". htmlspecialchars(trim($_POST['email']))."</h2>";
($_POST['name'] != '' && $_POST['name'] != null)? $body .= "<h2>Имя: ". htmlspecialchars(trim($_POST['name']))."</h2>":$body .= "" ;
($_POST['theme'] != '' && $_POST['theme'] != null)? $body .= "<h2>Тема: ". htmlspecialchars(trim($_POST['name']))."</h2>":$body .= "" ;
($_POST['phone'] != '' && $_POST['phone'] != null)? $body .= "<h2>Номер телефона: ". htmlspecialchars(trim($_POST['name']))."</h2>":$body .= "" ;
($_POST['message'] != '' && $_POST['message'] != null)? $body .= "<h2>Текст сообщения: ". htmlspecialchars(trim($_POST['name']))."</h2>":$body .= "" ;
mail("xoz.od.ua@gmail.com",
    "Письмо с сайта xoz.od.ua",
    $body,
    "From: xoz.od.ua@gmail.com")
;
?>