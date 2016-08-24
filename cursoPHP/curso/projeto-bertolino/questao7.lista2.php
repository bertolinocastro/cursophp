<?php 
session_start( );
require_once( '../../kint-master/Kint.class.php' );

d( $_SESSION );


?>

<!DOCTYPE html>
<html>
<head>


<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

	<title>BERTOLA</title>

</head>
<body>

<div class='container'>
<div class="row">
<div class="col-md-12">
<pre>
<?php 
if( isset( $_GET['nome'] , $_GET['telefone'] , $_GET['cpf'] , $_GET['animal'] ) ):
?>

NOME: <?php echo $_GET['nome'] ; ?><br>
TELEFONE: <?php echo str_replace( array( "+" , "," , "." , "(" , ")" , "-" ) , "" , $_GET['telefone'] ) ; ?><br>
CPF: <?php echo str_replace( array( "+" , "," , "." , "(" , ")" , "-" ) , "" , $_GET['cpf'] ) ; ?><br>
1º ANIMAL: <?php echo $_GET['nome'] ; ?><br>


<?php
endif;
?>
</pre>
 </div>
</div>
<?php if( ! isset( $_GET['nome'] , $_GET['telefone'] , $_GET['cpf'] , $_GET['animal'] ) ): ?>
<div class="row">
	<div class="col-md-12">
		<form id='formulario' action='' method='get' >
			
			NOME: <input type="text" name="nome"><br>
			TELEFONE: <input type="text" name="telefone"><br>
			CPF: <input type="text" name="cpf"><br>
			SEU PRIMEIRO ANIMAL: <input type="text" name="animal"><br>
			<input type="submit" name="uga">

		</form>
	</div>
</div>
<?php endif; ?>
</div>

<?php  

$x = "1213.2412543155++-+-";

$x = (double) $x;

echo $x   ;?>
</body>
</html>