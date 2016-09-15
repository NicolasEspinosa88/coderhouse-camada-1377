var arrayPeliculas = [];
var contadorPeliculas= 1;


function pelicula(titulo){
	this.id = contadorPeliculas;
	this.titulo = titulo;
	contadorPeliculas++;

	this.getTitulo = function(){
		return this.titulo;
	}
}

function mostrarPeliculas(){

	for(peli in arrayPeliculas){
		console.log(arrayPeliculas[peli]);
	}

}

function agregarPelicula(laPelicula){
	
	var peli = new pelicula(laPelicula)

	if(!peliculaRepetida(laPelicula))
		arrayPeliculas.push(peli);
	else{
		alert('la pelicula '+ laPelicula+' ya esta en el array');
	}

}

function peliculaRepetida(pelicula){
	
	for(peli in arrayPeliculas){
		if(pelicula === arrayPeliculas[peli].getTitulo()){
			return true;
		}
	}
	return false;
}

function ordenarArrayPorId(){
	arrayPeliculas.sort(function(a,b){
		return (a.id - b.id);
	})
}


function ordenarArrayPorNombre(){
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


function eliminarPelicula(id){
	for(peli in arrayPeliculas){
		if(arrayPeliculas[peli].id === id){
			alert('se ha eliminado la pelicula '+ arrayPeliculas[peli].titulo);
			arrayPeliculas.splice(peli,1);
			break;
		}
	}
	alert('la pelicula no esta en la lista');
}


agregarPelicula('terminator');

