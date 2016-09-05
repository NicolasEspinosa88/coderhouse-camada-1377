var num1=parseInt(prompt('ingrese primer numero'));
var num2=parseInt(prompt('ingrese segundo numero'));



var suma  = num1 + num2;
alert('la suma es igual a ' + suma);


var resta = num1 - num2;
alert('la resta es igual a ' + resta);


var multiplicacion = num1 * num2;
alert('la multiplicacion es igual a ' + multiplicacion);

if(num2 !== 0){
	var division = num1 / num2;
	alert('la division es igual a ' + division);
}else{
	alert('no se puede dividir por 0');
}