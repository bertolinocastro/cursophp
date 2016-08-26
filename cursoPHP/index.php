<?php

if( isset( $_POST['title'] ) ){
	$title = $_POST['title'];
}else{
	$title = "Página inicial";
}
?>
<html>
<head>
	<title><?php echo $title; ?></title>
	<meta charset="utf-8">
	<script   src="https://code.jquery.com/jquery-3.1.0.js"   integrity="sha256-slogkvB1K3VOkzAI8QITxV3VzpOnkeNVsKvtkYLMjfk="   crossorigin="anonymous"></script>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
	<script src='js/scripts.js'></script>
	<link rel="stylesheet" href="css/style.css">
</head>
<body>

<h4> Caro viajante, siga em suas questões logo a baixo! </h4>

<div class='container-fluid'>

	<div class='row'>
		<div class='col-md-3' id='painel'>
			<ul>

<?php

$diretorioPadrao = __DIR__ . "/curso/";

function procuraPasta( $diretorio = null ){

	if( $diretorio != null ){

		$arquivos = scandir( $diretorio );

		//var_dump($arquivos);

		foreach( $arquivos as $files ){

			
			if( ! in_array( $files , array( "." , ".." ) ) ){	?>

				<li>

				<?php
				if( is_dir(  $diretorio . $files ) ){


					//$arqDir = scandir( __DIR__ . "/curso/" . $files . "/" );
					
					?>
					<button type='button' class='localDir' value='curso/<?php echo $files; ?>'> Diretório: <?php echo $files; ?></button>

					<ul class='diretorioFechado'>

					<?php
						procuraPasta( $diretorio . $files . "/" );
					?>

					</ul>
					

				<?php
				}else{
					
				?>
					<button type='button' class='localArq' value='<?php echo $diretorio . $files ; ?>'> Arquivo: <?php echo $files; ?></button><br>

				<?php
				}
				?>
				</li>
			<?php
			}
			

		}

	}

}

procuraPasta( $diretorioPadrao );

?>
			</ul>

		</div>
			<h6> Caso queira voltar à pasta anterior <a href="#" id='voltarConteudoPag' >clique aqui</a>  </h6>
			<div class='col-md-9' id='conteudoPag'>
			</div>
			
		</div>
	</div><!-- .container-fluid -->
</body>
</html>