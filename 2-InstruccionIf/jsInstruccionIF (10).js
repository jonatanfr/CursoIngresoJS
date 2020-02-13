function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var nota;
	var maximo,
	var minimo;

	maximo = 10;
	minimo = 1;

	nota= Math.floor(Math.random() * ((maximo + 1) - minimo) + minimo);

	if (nota>= 9){
		alert("Excelente. Nota:" + nota);
		
	}

}//FIN DE LA FUNCIÓN