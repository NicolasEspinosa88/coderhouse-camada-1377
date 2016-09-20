function Pelicula(titulo , id){
	this.id = id;
	this.titulo = titulo;

	this.getTitulo = function(){
		return this.titulo;
	}

	this.getId = function(){
		return this.id;
	}
}


function Videoteca(){

	var arrayPeliculas = [];
	var contadorPeliculas= 1;



	this.mostrarPeliculas= function(){
		for(peli in arrayPeliculas){
			console.log(arrayPeliculas[peli]);
		}
	}

	this.agregarPelicula = function(laPelicula){		
		if(!this.peliculaRepetida(laPelicula)){
			var peli = new Pelicula(laPelicula, contadorPeliculas);
			arrayPeliculas.push(peli);
			contadorPeliculas++;
		}
		else{
			alert('la pelicula '+ laPelicula+' ya esta en el array');
		}

	}

	this.peliculaRepetida=function(pelicula){
		
		for(peli in arrayPeliculas){
			if(pelicula === arrayPeliculas[peli].getTitulo()){
				return true;
			}
		}
		return false;
	}

	this.ordenarArrayPorId=function(){
		arrayPeliculas.sort(function(a,b){
			return (a.id - b.id);
		})
	}


	this.ordenarArrayPorNombre=function(){
		arrayPeliculas.sort(function(a,b){
			if (a.titulo > b.titulo) {
				return 1;
	  		}
			if (a.titulo < b.titulo) {
				return -1;
			}
				return 0;
			});
	}


	this.eliminarPeliculaPorId=function(id){
		for(peli in arrayPeliculas){
			if(arrayPeliculas[peli].id === id){
				alert('se ha eliminado la pelicula '+ arrayPeliculas[peli].titulo);
				arrayPeliculas.splice(peli,1);
				break;
			}
		}
		alert('la pelicula no esta en la lista');
	}
	
}

var miVideoteca = new Videoteca();

miVideoteca.agregarPelicula('terminator');

