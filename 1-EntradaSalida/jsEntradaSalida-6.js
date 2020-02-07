/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    //declaramos las variables

    var numeroUnoIngresado;

    var numeroDosingresado;

    var numeroUnoParseado;

    var numeroDosParseado;

    var resultado;

    //Obtener los valores por id

    numeroUnoIngresado = document.getElementById("numeroUno").value;
    numeroDosingresado = document.getElementById("numeroDos").value;

    //Parseo de datos
    
    numeroUnoParseado= parseInt(numeroUnoIngresado);
    numeroDosParseado= parseInt(numeroDosingresado);

    //Operacion
    resultado = numeroUnoParseado + numeroDosParseado;

    //Mostrar resultado
    alert("El resultado es "+resultado);
}

