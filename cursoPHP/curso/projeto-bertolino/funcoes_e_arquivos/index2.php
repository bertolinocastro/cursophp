<?php

function percorre($quilometros){
	global $total;
	$total += $quilometros;
	echo "Percorreu mais $quilometros do total de $total <br /> \n";
}

percorre(100);
percorre(200);
percorre(50);

echo "------------------------<br>";

function porvalor($variavel,$valor = 70){
	$variavel += $valor;
}

$a = 10;
porvalor($a,30,15);
echo $a;

echo "------------------------<br>";

function porreferencia(&$variavel = 100  ,&$valor = 70){
	$variavel += $valor;
	echo $variavel;
}

//$a = 10;
porreferencia();
//echo $a;