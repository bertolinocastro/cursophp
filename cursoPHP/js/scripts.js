$(document).ready(function(){
	var link;
	var hrefAnc;
	var urlCont;
	var dirCont;
	var indiceVoltar = 0;
	var anchorHref;
	var methodForm;
	var hrefForm;
	var dadosAjax = {};
	var voltaAtual = 0;

	$.each($('.localArq'), function(){
		
		$(this).click(function(){
			//console.log("teste");
			link = $(this).data("link");
			$('#conteudoPag').load(
				"buscaConteudo.php",
				{ data : link}, 
				function(response, status, xhr){
					//console.log(response, status, xhr);
					$('#conteudoPag .container').removeClass('container');

					conteudoVoltarPag( link );

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

	function conteudoVoltarPag( hrefVoltar , dadosAVoltar ){
		console.log( hrefVoltar );
		console.log( dadosAVoltar );
		//console.log( String(indiceVoltar) );

		//console.log( $("#voltarConteudoPag").data() );

		var size = 0, key;
		for (key in $("#voltarConteudoPag").data() ) {
			if ($("#voltarConteudoPag").data().hasOwnProperty(key)) size++;
		}

		//console.log(size);

		if( $("#voltarConteudoPag").data()[size-1] == hrefVoltar ){
			//console.log( "olha só" , $("#voltarConteudoPag").data()[size-1] );
		}else{
			$("#voltarConteudoPag").data( String(indiceVoltar) , hrefVoltar);
			if( dadosAVoltar != undefined ) $("#voltarConteudoPag").data( String( "request" + indiceVoltar ) , dadosAVoltar );
			indiceVoltar++;
		}

		console.log( $("#voltarConteudoPag").data() );

		voltaAtual = 0;

		//$("#voltarConteudoPag").data('voltarConteudoPag',hrefVoltar);
		// if( $("#voltarConteudoPag").data('voltarConteudoPag') == undefined ){
		// 	$("#voltarConteudoPag").data('voltarConteudoPag',hrefVoltar);
		// }
	}

	$("#voltarConteudoPag").click(function(){

		var size = 0, key;
		for (key in $("#voltarConteudoPag").data() ) {
			if ($("#voltarConteudoPag").data().hasOwnProperty(key)) size++;
		}

		var dadosVoltarPag;

		if( size > 1 && ( size - voltaAtual - 1 ) > 0 ){
			dadosVoltarPag = ( $("#voltarConteudoPag").data( String( "request" + ( size - voltaAtual - 1 ) ) ) != undefined ) ? $("#voltarConteudoPag").data( String( "request" + ( size - voltaAtual - 2 ) ) ) : {} ;
			dadosVoltarPag = $.extend( dadosVoltarPag , { 'data' : $("#voltarConteudoPag").data( String( size - voltaAtual - 2 ) ) } );
		}else{
			return false;
		}

		console.log( dadosVoltarPag );
		console.log( "request: " , $("#voltarConteudoPag").data( String( "request" + ( size - voltaAtual - 2 ) ) ) );
		console.log( { 'data' : $("#voltarConteudoPag").data( String( size - voltaAtual - 2 ) ) } );

		

		$('#conteudoPag').load(
			"buscaConteudo.php",
			dadosVoltarPag, 
			function(response, status, xhr){
				//console.log(response, status, xhr);
				$('#conteudoPag .container').removeClass('container');

				if( $("#conteudoPag a").length > 0 ){
					corrigeAnchor();
				}
				if( $("#conteudoPag form").length > 0 ){
					corrigeForm();
				}

				//console.log("corrigiu");
			}
		);
		voltaAtual++;

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

						conteudoVoltarPag( dirCont + anchorHref );

						if( $("#conteudoPag a").length > 0 ){
							corrigeAnchor();
						}
						if( $("#conteudoPag form").length > 0 ){
							corrigeForm();
						}

				}
			);
		});

		//console.log("corrigido");
	}

	function corrigeForm(){
		$.each($("#conteudoPag form"), function(){


			$(this).submit(function(e){
				e.preventDefault();

				methodForm = $(this).attr("method").toUpperCase();
				hrefForm = $(this).attr("action");

				//console.log( "HREF FORM" + hrefForm , "MÈTHOD: ", methodForm);

				//console.log($(this).serializeArray());


				hrefForm = ( hrefForm == "" ) ? link : hrefForm.replace( /.\/|..\/|\/\// , '/' ) ;

				//console.log( "HREF FORM: ", hrefForm );

				dadosAjax = $(this).serializeArray()

				var dateAjax = {};

				for( var key in dadosAjax ){
					if ( ! dadosAjax.hasOwnProperty( key ) ) continue;
					
					var obj = dadosAjax[key];

					//console.log(obj);

					//console.log( obj['name'] + " = " + obj['value'] );

					dateAjax[obj['name']] = obj['value'];

					//$.extend( dateAjax , texte );

					//console.log( dateAjax );

					// for( var prop in obj ){
					// 	if ( ! obj.hasOwnProperty( prop )) continue;

					// 	console.log( prop + " = " + obj[prop] );

					// 	//( prop == "name" ) ? dateAjax
					// }
				}

				var dadoBackPage = dateAjax;

				console.log( dadoBackPage );

				dateAjax = $.extend( dateAjax , { 'data' : hrefForm } );

				//console.log( dateAjax );

				$.ajax({
					type: methodForm,
					url: "buscaConteudo.php",
					data: dateAjax,
					success: function(data){
						//alert("FUNCIONOU PORRA");
						//console.log(data);
						$("#conteudoPag").html(data);

						console.log( dadoBackPage );

						conteudoVoltarPag( hrefForm , dadoBackPage );

						if( $("#conteudoPag a").length > 0 ){
							corrigeAnchor();
						}
						if( $("#conteudoPag form").length > 0 ){
							corrigeForm();
						}

					},
					error: function() {
						alert('Erro ao submeter formulário!');
					}
				});

			});



			// CÓDIGO TENTATIVA PARA CAPTURAR OS POKE, DIGO, CAPTURAR OS VALORES DOS INPUTS E ENVIAR VIA AJAX, PORÉM FOI ANTES DE VER A DOCUMENTAÇÂO DO SERIALIZE();

			// inputsForm = $("#conteudoPag form input");
			// console.log(inputsForm , "tamanho: " , inputsForm.length);


			// for (var i = 0 ; i < inputsForm.length ; i++ ) {
			// 	prop = $(inputsForm).eq(i).attr("name");
			// 	value = $(inputsForm).eq(i).val();
			// 	console.log( "Propriedade",prop ,"Valor", value );
			// 	//objeto = { prop : value };
			// 	objeto[prop] = value;
			// 	$.extend(inputsFormObj, objeto);
			// }

			// console.log(inputsFormObj, typeof inputsFormObj );




			// $.extend(dadosAjax , inputsFormObj);

			// console.log(dadosAjax);

			// $.each($("input[type='submit'] , button[type='submit']") , function(){
			// 	console.log(this);
			// 	$(this).click(function(){
			// 		console.log("clicado");
			// 		switch( methodForm.toUpperCase() ){
		 // 				case "POST":
		 // 					console.log("post");
		 // 					$("#conteudoPag").post(
		 // 						"buscaConteudo.php",
		 // 						dadosAjax,
		 // 						function(response, status, xhr){

		 // 						}

		 // 					);
		 // 					break;
		 // 				case "GET":
		 // 					console.log("get");
		 // 					$.get(
		 // 						"buscaConteudo.php",
		 // 						dadosAjax,
		 // 						function( data){
		 // 							$("#conteudoPag").innerHTML();
		 // 						}
		 // 					);
		 // 					break;
			// 		}
			// 	});
			// });
		});
	}


	$(".localDir").click(function(){
		$(this).siblings("ul").toggleClass("diretorioFechado diretorioAberto");
		//console.log("oi");
	});


})