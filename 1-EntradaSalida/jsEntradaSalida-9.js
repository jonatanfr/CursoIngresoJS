/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

        var resultado;

        var aumento;

        var porsentaje;

        var importe;


        porcentaje = 10/100;


        importe = document.getElementById("sueldo").value;
        importe= parseInt(importe);

        aumento= importe * porcentaje;
        resultado= importe + aumento;
       
        document.getElementById("resultado").value = resultado;









	
}
