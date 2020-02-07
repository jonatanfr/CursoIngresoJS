/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    var nombre;
    
    var edad;

    var texto;
 
    // primero declaramos las variables involucradas que necesitamos

    nombre = document.getElementById("elNombre").value;

    edad = document.getElementById("laEdad").value;

    // luego tomamos las dos variables a las que le vamos a ingresar datos
    // utilizando los id de cada uno

    console.log(nombre);
    console.log(edad);

    // agregamos console para cada una de las variables donde vamos a ingresar datos
    // y asi asegurarnos de esas variables

    texto = "Usted se llama " + nombre + " y tiene " + edad + " años ";
    
    // ingresamos la variable texto y la frase que tenemos que poner y concatenamos
    // concatenamos con el signo + dejando espacio y separando las variables que queremos que se tome lo que ingresamos nosotros
    alert(texto);

    
}

