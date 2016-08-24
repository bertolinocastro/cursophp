$(document).ready(function(){

	$.each($('.localArq'), function(){
		
		$(this).click(function(){
			console.log("teste");
			var link = $(this).val();
			$('#conteudo').load(
				"buscaConteudo.php",
				{ data : link}, 
				function(response, status, xhr){
					console.log(response, status, xhr);
				}
			);
		});

	});



})