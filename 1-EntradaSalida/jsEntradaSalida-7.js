/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
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
        alert("La suma es "+resultado);
    }


function restar()
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
        resultado = numeroUnoParseado - numeroDosParseado;
       
    
        //Mostrar resultado
        alert("La resta es "+resultado);	
}

function multiplicar()
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
        resultado = numeroUnoParseado * numeroDosParseado;
       
    
        //Mostrar resultado
        alert("La Multiplicacion es "+resultado);
}

function dividir()
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
        resultado = numeroUnoParseado / numeroDosParseado;
        
    
        //Mostrar resultado
        alert("La division es "+resultado);

}

