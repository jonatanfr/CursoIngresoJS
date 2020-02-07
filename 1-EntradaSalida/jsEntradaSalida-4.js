/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{		
	// declare variable		
	var dato;
// obtengo en valor ingresado y se lo asigno a la variable
	dato = prompt("escriba su nombre");

	document.getElementById("elNombre").value = dato;

	// todo esto es una variable entonces para mostrarla
}

