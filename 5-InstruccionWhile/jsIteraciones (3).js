function mostrar()
{

var clave = prompt("ingrese el número clave.");
var contador = 0
// Me fijo si el dato es valido

while (clave != "utn750") {

    // Le agregamos un contador para que a la tercera vez que ingresamos
    // de forma incorrecta salgamos.
    contador++;

    if (contador == 3){
            break;
    }

    // si estoy aca es porque el dato no es valido
    // informo y pido nuevamente

    alert("La clave es incorrecta");

    clave = prompt ("Clave incorrecta.Ingrese clave nuevamente");

    
}

    // Si llego a este punto es porque la clave ingresada es correcta
    if (contador == 3) {
        alert("Intentos maximos ingresados");
    } else {
        alert("Bienvenido");
    }
}//FIN DE LA FUNCIÓN
