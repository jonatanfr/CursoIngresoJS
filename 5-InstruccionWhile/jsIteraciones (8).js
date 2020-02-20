function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta= true;

	
	while (respuesta) 
	{
		numero = prompt ("Ingrese numeros o Ingrese NO para terminar");

		while (isNaN(numero))
		{
			
			numero = prompt ("Ingrese un numero valido");
			numero = parseInt(numero);

		}  

			// Operaciones

			if (numero >= 0) 
			{

				positivo += numero;
			
			// positivo = positivo + numero;

			} 
			else 
			{
				negativo *= numero;
				contador ++;
			}
			respuesta = confirm ( "¿Desea continuar?");


			if (contador == 0)
			{
				negativo = 0
			}

	}

	


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN