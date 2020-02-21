function mostrar()
{
	//variables

	var numero;
	var contador=0;
	var SumaPositivos=0;
	var SumaNegativos=0;
	var PromedioPositivo=0;
	var PromedioNegativo=0;
	var DiferenciaPyN=0;
	var respuesta=true;
	
	while(respuesta)
	{
		numero=prompt("Ingrese un numero");

		while (isNaN(numero));
		{
			numero = prompt ("Error! Numero invalido");

		}
			numero = parseInt(numero);

			//Calculos
		
			if (numero > 0) 
			{
				// Positivos
				//punto2
				SumaPositivos += numero;

			}

		respuesta=confirm("¿Desea continuar?");
	}




}//FIN DE LA FUNCIÓN