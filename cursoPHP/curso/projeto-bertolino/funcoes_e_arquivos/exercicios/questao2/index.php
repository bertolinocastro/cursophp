<?php

( () => function(){

	$data = $_GET['data'];

	$data = strtotime($data);

	echo date( "l" ,$data);
} ) ()

?>
<form>
	<input type="date" name="data">
	<input type="submit" name="" value="MOSTRAR DIA">
</form>

function nome(param){
	//
}

function abc(num, call){
	num = num * 50;
	return call(num);
}

abc(10, function(u){
	return u*2;
});

abc(10, (u) => { u*2; ghg hvbhb hbhb } );

(function(){
	//
})();