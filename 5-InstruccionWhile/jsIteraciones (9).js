function mostrar()
{
	// declaracion de variables
	var contador=0;
	var minima=0;
	var maximo=0;
	var respuesta= true;
	var primeraIteracion= true;
	

	while(respuesta)
	{
		var numero = prompt ("ingrese un numero");
		
		
		while (isNaN(numero))
		{
			numero = prompt("error");
			
			
		}
		 numero = parseInt(numero);

		if (primeraIteracion)
		{	
			primeraIteracion = false;

			minimo = numero;
			maximo = numero;

		} 
		else
		{
			// A partir de la 2 iteracion

			if (numero > maximo) 
			{
				maximo = numero;

			}
			if (numero < minimo)
			{
				minimo = numero;
			}
		}

		respuesta = confirm("¿Desea continuar?");
	}

	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;



}//FIN DE LA FUNCIÓN