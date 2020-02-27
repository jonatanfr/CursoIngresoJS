function mostrar()
{
    var respuesta;
    var numero;
    var letra;

    do 
    {    //tomar y validar datos
        do
        {
            numero = prompt("Ingrese un numero");
            numero = parseInt(numero);

        }while(isNaN(numero));

        do
        {
            letra = prompt("Ingrese una letra");

        }while(!isNaN(letra));

        //punto A

        



        respuesta = confirm("Desea continuar");

    } while(respuesta);
}
