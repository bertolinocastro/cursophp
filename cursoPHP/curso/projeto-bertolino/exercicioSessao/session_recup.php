<?php 
session_start();
if (!isset($_SESSION['nome_usr'])) {
	header('index.php');
}


?>
<a href="./session_finalizar.php">DESTRUIR</a>