/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
		//alert(numeroSecreto );
  var min = 1;
  var max = 101;

    numeroSecreto = Math.floor (Math.random() * (max - min) + 1);
    alert(numeroSecreto);
    
}

function verificar()
{
    var numeroUsuario;
      
      contadorIntentos = contadorIntentos + 1

      numeroUsuario = document.getElementById("numero");

      if (numeroUsuario == numeroSecreto) (

        alert("Usted es el ganador!! y en solo X intentos");

      ) else if (numeroUsuario > numeroSecreto) (
        alert("Se paso");
        else (
          alert("falta");
        )
      )
      )
	
	
}