<?php

if( isset( $_POST['title'] ) ){
	$title = $_POST['title'];
}else{
	$title = "Página inicial";
}

print <<< HEREDOC

<html>
<head>
	<title> $title </title>
	<script   src="https://code.jquery.com/jquery-3.1.0.js"   integrity="sha256-slogkvB1K3VOkzAI8QITxV3VzpOnkeNVsKvtkYLMjfk="   crossorigin="anonymous"></script>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
	<script src='js/scripts.js'></script>
</head>
<body>


<h6> Caso queira voltar à pasta anterior <a href="..">clique aqui</a>  </h6>
<h4> Caro viajante, siga em suas questões logo a baixo! </h4>


HEREDOC;

$arquivos = scandir( __DIR__ . "\\curso\\" );
var_dump( $arquivos );
echo "<ul>";

$diretorioPadrao = __DIR__ . "\\curso\\";

function procuraPasta( $diretorio = null ){

	if( $diretorio != null ){

		$arquivos = scandir( $diretorio );

		//var_dump($arquivos);

		foreach( $arquivos as $files ){

			
			if( ! in_array( $files , array( "." , ".." ) ) ){
				echo "<li>";
				if( is_dir(  $diretorio . $files ) ){


					//$arqDir = scandir( __DIR__ . "/curso/" . $files . "/" );
					
					echo  "<button type='button' class='localDir' value='curso\\".$files."'> Diretório: " . $files . "</button>";

					echo "<ul>";
						procuraPasta( $diretorio . $files . "\\" );
					echo "</ul>";
					


				}else{
					

					echo  "<button type='button' class='localArq' value='" . $diretorio .$files."'> Arquivo: " . $files . "</button>\n<br>";


				}
				echo "</li>";
			}
			

		}

	}

}

procuraPasta( $diretorioPadrao );


echo "</ul>";


print <<<HEREDOC
<div class='container-fluid'>

	<div class='row' >

		<div class='col-md-12' id='conteudo'>
		</div>

	</div>


</div>
HEREDOC;

print <<< HEREDOC
</body>
</html>
HEREDOC;

?>