var dias = ['lunes', 'martes','miercoles','jueves','viernes','sabado','domingo'];

var diaIngresado = prompt('ingrese un dia');
for (dia of dias) {
	console.log(dia);

	if(diaIngresado === dia){

		if(esHabil(diaIngresado)){
			alert('el dia es habil');
		}else{
			alert('el dia no es habil');
		}
		break;
	}
};

function esHabil(dia){
	
	if(dia === 'sabado' || dia ==='domingo'){
		return false;
	}else{
		return true;
	}
}