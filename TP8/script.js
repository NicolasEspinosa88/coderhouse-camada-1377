var imdb = (function(){

	if( JSON.parse(localStorage.getItem('peliculas')) == null){
		var peliculas = [];
		var idsPeliculas= 1;
		
	}else{
	
		var peliculas = JSON.parse(localStorage.getItem('peliculas'));
		var idsPeliculas= peliculas.length;
	}

	var agregarPeliculas = function(imagen,titulo,descripcion){
		peliAAgregar= new Pelicula(idsPeliculas,imagen, titulo, descripcion);	

		if(!existePelicula(peliAAgregar)){
			peliculas.push(peliAAgregar);
			idsPeliculas++;
			datos=JSON.stringify(peliculas);
			localStorage.setItem('peliculas',datos);
		}
	}

	var existePelicula= function(pelicula){
		
		for(index in peliculas){
			if(peliculas[index].titulo === pelicula.titulo){
				alert('la pelicula ya esta en el array');
				return true;
			}
		}
		return false;
	}

	var eliminarPeliculas = function(id){
		var posicion = id;
		if(peliculas.length >= id && id != null){
			peliculas.splice(posicion,1);
		}

		datos=JSON.stringify(peliculas);
		localStorage.setItem('peliculas',datos);
		vincularFormulario();
	}

	var ordenador= function(filtro, ascendente){
		
		var resultado;
		return function(atributoA, atributoB){
			if(atributoA[filtro] > atributoB[filtro])
				resultado=1;
			if(atributoA[filtro] === atributoB[filtro])
				resultado= 0;
			if(atributoA[filtro] < atributoB[filtro])
				resultado= -1;

			if(!ascendente)
				resultado*= -1;
			
			return resultado;
		}

	}


	var mostrarPeliculas= function(){
		for(index in peliculas){
			console.log(peliculas[index]);
		}
	}

	var ordenarPorId= function(){
		peliculas.sort(ordenador('id',true));
		iniciar();

	}

	var ordenarPorTitulo= function(){
		peliculas.sort(ordenador('titulo',true));
		iniciar();
	}


	var dibujarPeliculas = function(){
		$('#peliculas-container').empty();
		for(indexPeli in peliculas){

			var article= $('<article/>').attr('class','card')
						.appendTo('#peliculas-container');


			$('<img/>').attr('class','card__imagen')
					.attr('src',peliculas[indexPeli].imagen)
					.appendTo(article);

			$('<h3/>')	.attr('class','card__titulo')
					.html(peliculas[indexPeli].titulo)
					.appendTo(article);

			$('<p/>')	.attr('class','card__descripcion')
					.html(peliculas[indexPeli].descripcion)
					.appendTo(article);

			$('<button/>')	.attr('class', 'card__boton')
						.attr('name', 'btnEliminar')
						.attr('codigo', indexPeli)
						.html('Eliminar pelicula')
						.appendTo(article);

		}

	}

	var vincularFormulario = function(){
		dibujarPeliculas();
		var btnAgregar = $('#btnAgregar');
		var btnMostrarPelis = $('#btnMostrarPeli');
		var btnOrdenarPorId = $('#btnOrdenarPorId');
		var btnOrdenarPorTitulo = $('#btnOrdenarPorTitulo');

		btnMostrarPelis.click(dibujarPeliculas());

		btnOrdenarPorId.on("click", ordenarPorId);
		btnOrdenarPorTitulo.on("click", ordenarPorTitulo)

		var botonesEliminar = $('button[name=btnEliminar]');
		if(botonesEliminar != null){

			for(index in botonesEliminar){
				botonesEliminar[index].onclick = function(){
					eliminarPeliculas(this.getAttribute('codigo'));
				}
			}
		}

		if(btnAgregar.val() != null){

			btnAgregar.click(function(){
				var titulo = $('#titulo').val();
				var descripcion = $('#descripcion').val();
				var imagen = $('#imagen').val();
				agregarPeliculas(imagen,titulo,descripcion)();
			})	
		}


	}

	var iniciar = function(){
		vincularFormulario();
	}
	return{
		iniciar : iniciar,
		mostrarPeliculas : mostrarPeliculas,
		ordenarPorId : ordenarPorId,
		ordenarPorTitulo : ordenarPorTitulo
		
	}
})()

function Pelicula(id , imagen, titulo,descripcion){
	this.id = id;
	this.imagen= imagen;
	this.titulo = titulo;
	this.descripcion= descripcion;
	this.mostrarTitulo= function(){
		console.log(this.titulo);
	}
}


$(document).ready(function() {
    imdb.iniciar();
});
