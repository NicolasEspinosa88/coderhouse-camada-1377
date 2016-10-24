function Pelicula(id , titulo){
	this.id = id;
	this.titulo = titulo;

	this.mostrarTitulo= function(){
		console.log(this.titulo);
	}
}

var imdb = (function(){

	if( JSON.parse(localStorage.getItem('peliculas')) == null){

	var peliculas = [];
	}else{
		var peliculas = JSON.parse(localStorage.getItem('peliculas'));
	}
	var flag=false;
	var idsPeliculas= 0;
		
	var agregarPeliculas = function(laPelicula){
		indexPelicula = idsPeliculas;
		peliAAgregar= new Pelicula(indexPelicula, laPelicula);	

		if(!existePelicula(peliAAgregar)){
			peliculas.push(peliAAgregar);
			console.log(indexPelicula);
			idsPeliculas++;
		}
		datos=JSON.stringify(peliculas);
		localStorage.setItem('peliculas',datos);
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
		console.log(peliculas.length)	
		if(peliculas.length >= id && id != null){
			alert('se elimino la pelicula ' + peliculas[id-1].titulo)	
			peliculas.splice(id-1,1);
		}

		datos=JSON.stringify(peliculas);
		localStorage.setItem('peliculas',datos);
	}

	var mostrarPeliculas= function(){
		for(index in peliculas){
			console.log(peliculas[index])
		}
	}

	var dibujarPeliculas = function(){
		var body = document.getElementsByTagName('body')[0];
		
		var lista = document.createElement('ul');
		lista.setAttribute('id','listaPeliculas');


		for(indexPeli in peliculas){
			var item = document.createElement('li');
			item.setAttribute('id', 'pelicula'+peliculas[indexPeli].id);


			var titulo = document.createElement('h1');
			var elTitulo = document.createTextNode(peliculas[indexPeli].titulo);
			titulo.appendChild(elTitulo);


			var id = document.createElement('p');
			var elId = document.createTextNode(peliculas[indexPeli].id);
			id.appendChild(elId);


			item.appendChild(titulo);
			item.appendChild(id);
			lista.appendChild(item);
		}

		body.appendChild(lista);
	}
	return{
		agregarPeliculas : agregarPeliculas,
		eliminarPeliculas : eliminarPeliculas,
		mostrarPeliculas : mostrarPeliculas,
		dibujarPeliculas : dibujarPeliculas

	}
})()

