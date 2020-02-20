function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';

	respuesta = prompt ("Ingrese numeros o Ingrese NO para terminar");
	while(respuesta.toLocaleUpperCase() !="NO") {

		if (!isNaN(respuesta)) {

			respuesta = parseInt(respuesta);
			if (respuesta <= 0) {

			negativo = negativo * respuesta;

			} else {

				positivo = positivo + respuesta;
			}
		}

		acumulador = acumulador + numero;

		respuesta = prompt ("Desea ingresar otro numero? Si/NO", "SI");

	}

	


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN