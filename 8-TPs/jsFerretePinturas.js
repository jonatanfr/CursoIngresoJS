/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    
    var Fahrenheit;
    var centígrados;
    var temperatura;
    var Fahrenheitcentigrados;

    temperatura = document.getElementById("Temperatura").value;

    temperatura = parseInt(temperatura);

    Fahrenheit = 32;
    Fahrenheitcentigrados = (temperatura - Fahrenheit) * 5/9;

    alert (" La temperatura es " + Fahrenheitcentigrados + " grados centigrados" );

    
}

function CentigradosFahrenheit () 
{
    
    var Fahrenheit;
    var centígrados;
    var CentigradosFahrenheit;

    temperatura = document.getElementById("Temperatura").value;

    temperatura = parseInt(temperatura);

    Fahrenheit = 32;

    CentigradosFahrenheit = (temperatura * (9/5)) +  Fahrenheit;

    alert (" La temperatura es " + CentigradosFahrenheit + " grados fahrenheit")
}
