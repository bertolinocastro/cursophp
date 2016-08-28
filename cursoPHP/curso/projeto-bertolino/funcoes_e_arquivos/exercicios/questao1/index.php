<?php

function questao1($val1,$val2){
	echo "<br>Soma é: " . ($val1 + $val2);
	echo "<br>Subtração é: " . ($val1 - $val2);
	echo "<br>Multiplicação é: " . $val1 * $val2;
	echo "<br>Divisão é: " . $val1 / $val2;
}

if(isset($_GET['val1'],$_GET['val2'])){
	questao1($_GET['val1'],$_GET['val2']);
}

?>

<form method="GET" action="">
	<input type="number" name="val1" value="<?php isset($_GET['val1']) ? print $_GET['val1'] : print ''; ?>"><br>
	<input type="number" name="val2" value="<?php isset($_GET['val2']) ? print $_GET['val2'] : print ''; ?>"><br>
	<input type="submit" name="" value="Calcular">
</form>