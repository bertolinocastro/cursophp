$(document).ready(function(){
	var link;
	var hrefAnc;
	var urlCont;
	var dirCont;
	var anchorHref;
	var methodForm;
	var hrefForm;
	var inputsForm;
	var inputsFormObj = {};
	var prop, value;
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

					$("#voltarConteudoPag").click(function(){

					});

					if( $("#conteudoPag a").length > 0 ){
						corrigeAnchor();
					}
					if( $("#conteudoPag form").length > 0 ){
						corrigeForm();
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

		$.each($("#conteudoPag a"),function(){
			hrefAnc = $(this).attr("href");
			hrefAnc = hrefAnc.replace( /.\/|..\/|\/\// , '/' );
			$(this).data('anchor-href',hrefAnc);
		});

		//hrefAnc = hrefAnc.replace( /.\/|..\/|\/\// , '/' );
		//console.log(urlCont + hrefAnc);
		//console.log(dirCont + hrefAnc);
		$("#conteudoPag a").attr("href","#");

		$("#conteudoPag a").click(function(){
			anchorHref = $(this).data('anchor-href');
			$("#conteudoPag").load(
				"buscaConteudo.php",
				{ data :  dirCont + anchorHref },
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

	function corrigeForm(){
		$.each($("#conteudoPag form"), function(){
			methodForm = $(this).attr("method");
			hrefForm = $(this).attr("action");
			console.log( "HREF FORM" + hrefForm);

			inputsForm = $("#conteudoPag form input");
			console.log(inputsForm);

			for (var i = 0 ; i < inputsForm.length ; i++ ) {
				prop = $(inputsForm).eq(i).attr("name");
				value = $(inputsForm).eq(i).val();
				$.extend(inputsFormObj,{ prop : value });
			}

			console.log(inputsFormObj);

			switch( methodForm.toUpperCase() ){
 				case "POST":
 					$("#conteudoPag").post(
 						"buscaConteudo.php",
 						{	data : hrefForm,
 							
 						}
 					);
 					break;
 				case "GET":
			}
		});
	}


	$(".localDir").click(function(){
		$(this).siblings("ul").toggleClass("diretorioFechado diretorioAberto");
		console.log("oi");
	});


})