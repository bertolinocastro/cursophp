<?php 

session_start();

if (isset($_GET)) {
	$_SESSION['nome_usr'] = $_GET['nome_usr'];
}


?>

<h4>Olá, <?php echo $_SESSION['nome_usr']; ?> !</h4>
<a href="./session_recup.php">PROX</a>