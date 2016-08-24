<?php 


echo $_REQUEST['data'] . "\n<br> ";

$arquivoAProcessar = $_REQUEST['data'];

$conteudoArquivo = file_get_contents( $arquivoAProcessar );

echo $conteudoArquivo;



?>