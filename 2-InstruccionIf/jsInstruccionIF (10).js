function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var nota;
	var maximo,
	var minimo;

	maximo = 10;
	minimo = 1;

	nota= Math.random(10 * Math.random());

	console.log(nota);

	if (nota>= 9){
		alert("Excelente. Nota:" + nota);
		
	}
	 else if{( nota >= 4 && nota<9){
		alert("aprobo");

	}
	else{
		alert("vamos, la proxima se puede");

	}


}
	



}//FIN DE LA FUNCIÓN