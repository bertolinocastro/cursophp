<?php


$arq = fopen("oi.txt", "w");

fwrite($arq, "line 1\r\n");
fwrite($arq, "line 2");

$conteudo =  file_get_contents("oi.txt");

fclose($arq);

$olha = str_replace("\n", "<br />", $conteudo);

$conteudo = nl2br($conteudo);

echo $conteudo;

echo $olha;