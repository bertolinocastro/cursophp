$(document).ready(function(){
	var link;
	var hrefAnc;
	var urlCont;
	var dirCont;
	$.each($('.localArq'), function(){
		
		$(this).click(function(){
			//console.log("teste");
			link = $(this).val();
			$('#conteudoPag').load(
				"buscaConteudo.php",
				{ data : link}, 
				function(response, status, xhr){
					//console.log(response, status, xhr);
					$('#conteudoPag .container').removeClass('container');

					if( $("#conteudoPag a").length > 0 ){
						corrigeAnchor();
					}

					//console.log("corrigiu");
				}
			);
		});

	});

	function corrigeAnchor(){
		urlCont = $("#conteudoPag input#urlConteudo").val();
		dirCont = $("#conteudoPag input#diretorioConteudo").val();
		hrefAnc = $("#conteudoPag a").attr("href");
		hrefAnc = hrefAnc.replace( /.\/|..\/|\/\// , '/' );
		//console.log(urlCont + hrefAnc);
		//console.log(dirCont + hrefAnc);
		$("#conteudoPag a").attr("href","#");

		$("#conteudoPag a").click(function(){
			$("#conteudoPag").load(
				"buscaConteudo.php",
				{ data :  dirCont + hrefAnc },
				function(response, status, xhr){
					$('#conteudoPag .container').removeClass('container');

					if( $("#conteudoPag a").length > 0 ){
						corrigeAnchor();
					}

				}
			);
		});

		//console.log("corrigido");
	}




})