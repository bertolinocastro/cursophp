<?php 

//var_dump($_SERVER);

//SABER O QUE ESTÁ SENDO ENVIADO VIA POST
echo "Post: " ;
var_dump($_POST);
echo "Get: ";
var_dump($_GET);

//REQUEST
echo "Arquivo: " . $_REQUEST['data'] . "\n<br> ";

$arquivoAProcessar = $_REQUEST['data'];

//DIRETORIO REQUEST
echo "Diretório: " . dirname($arquivoAProcessar);

echo "<br>";
echo "<input type='hidden' id='diretorioConteudo' value='" . dirname($arquivoAProcessar) . "'>";

//INPUT
$urlDir = str_replace( $_SERVER['DOCUMENT_ROOT'] , $_SERVER['SERVER_NAME'] , $arquivoAProcessar ); 

echo "Url: " . $urlDir;

echo "<input type='hidden' id='urlConteudo' value='" . dirname($urlDir) . "'>";


//CONTEUDO 
//$conteudoArquivo = file_get_contents( $arquivoAProcessar );

//echo $conteudoArquivo;

include_once $arquivoAProcessar;


?>