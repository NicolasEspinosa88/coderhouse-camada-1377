function CrearAuto(color,modelo,patente,marca){
	this.color= color;
	this.modelo = modelo;
	this.patente = patente;
	this.marca = marca;
	this.prendido = false;
	this.velocidad = 0;
	this.velocidadMaxima = 200;

	this.encender = function(){
		if(this.prendido == true){
			alert('el auto ya estaba prendido');
		}else{
			this.prendido = true;
			alert('el auto arranco')
			
		}
	}

	this.apagar = function(){
		if(this.prendido===true){
			this.prendido = false;
			alert('el auto se apago');
		}else{
			alert('el auto ya estaba apagado');
		}
	}


	this.acelerar= function(velocidadAceleracion){
		if(this.prendido){
			var nuevaVelocidad = this.velocidad + velocidadAceleracion;
			
			if( nuevaVelocidad > this.velocidadMaxima){
				alert('la velocidad no puede ser mayor a '+velocidadMaxima );
			}else{
				this.velocidad += velocidadAceleracion;
				alert('el auto acelero '+ velocidadAceleracion);
			}
			
		}else{
			alert('el auto esta apagado');
		}
	}

	this.mostrarVelocidadActual = function(){
		
		alert('la velocidad actual es ' + this.velocidad);
	}

	this.frenar = function(velocidadFrenado){
		if(this.prendido){
			var nuevaVelocidad = this.velocidad -= velocidadFrenado;
			
			if(nuevaVelocidad < 0){
				alert('no se puede disminuir mas que la velocidad actual');
			}else{
				this.velocidad -= velocidadAceleracion;
				alert('el auto freno ' + velocidadFrenado);
			}
			
		}else{
			alert('el auto esta apagado');
		}
	}
}

var auto = new CrearAuto('rojo','uno','abc123','fiat');