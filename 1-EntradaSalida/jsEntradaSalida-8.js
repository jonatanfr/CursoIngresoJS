/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{   
    var numeroUno;

    var numeroDos;

    var dividendo;
    
    var divisor;

    var resto;

    //ingresar datos id

    numeroUno= document.getElementById("numeroDividendo").value;
    numeroDos= document.getElementById("numeroDivisor").value;

    //parselar
    dividendo=parseInt(numeroUno);
    divisor=parseInt(numeroDos);

    //dividir
    resto=dividendo%divisor;

    //alert 
    
    alert ("El Resto es "+resto);

	
}
