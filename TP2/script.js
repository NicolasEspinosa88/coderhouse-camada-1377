var dias = ['lunes', 'martes','miercoles','jueves','viernes','sabado','domingo'];
var esUnDia=false;
var diaIngresado = prompt('ingrese un dia de la semana').toLowerCase();

for(dia in dias){

	if(diaIngresado === dias[dia]){
		esUnDia=true;
		if(esHabil(diaIngresado)){
			alert('el dia es habil');
		}else{
			alert('el dia no es habil');
		}
		break;
	}
}
if(!esUnDia)
	alert('el dia ingresado es incorrecto');

function esHabil(dia){
	return !(dia === 'sabado' || dia ==='domingo');
}