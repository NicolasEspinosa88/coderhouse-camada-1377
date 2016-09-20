function Noticia (id, titulo, descripcion, imagen){
	this.id = id;
	this.titulo = titulo;
	this.descripcion = descripcion;
	this.imagen = imagen;
}


var diario = (function(){
	var noticias = [];
	var agregarNoticiasPrivado = function(noticia){
		noticias.push(noticia);
	}
	var mostrarNoticiasPrivado = function(){
		for(noticia in noticias){
			console.log(noticias[noticia])
		}
	}
	return {
		agregarNoticiasPublico : agregarNoticiasPrivado,
		mostrarNoticiaPublico : mostrarNoticiasPrivado
	}
})()