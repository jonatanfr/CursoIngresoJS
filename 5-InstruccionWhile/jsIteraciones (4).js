function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");



	while ( numero < 0 || numero > 9 || isNaN(numero)) {

		numero = prompt("Error.Reingrese un numero");
		
		numero = parseInt(numero);
	}

	numero = document.getElementById("numero").value;








}//FIN DE LA FUNCIÓN