function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;

	while (respuesta== "si") {
		
				contador++;
				numero = prompt("Ingrese un numero: ");
		
				// Validacion
				numero = parseInt (numero);
		
				while(isNaN(numero)){
					numero = prompt ("Ingrese un numero valido");
					numero = parseInt(numero);
				}
		
				//Acumulamos
		
				acumulador = acumulador + numero;

				respuesta = prompt ("Desea ingresar otro numero? SI/No", "si");

	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN