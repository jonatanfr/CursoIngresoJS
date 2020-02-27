function mostrar()

    var nota;
    var sexo;
    var contador=0;
    var sexoNotaMasAlta;
    var sexoNotaMasBaja;
    var acumuladorNota=0
    var notaMasBaja;
    var contadorVarones;
    
    

    while (contador < 5)
    {
        contador ++;

        do 
        {
            nota = prompt("ingrese nota"),
            nota = parseInt(nota);
        } while(isNaN(nota) || nota < 0 || nota > 10);

        do
        {
                sexo = prompt("ingrese un sexo (F o M");

        } while(sexo != "f" && sexo!= "m");

        //Punto A

        acumuladorNota +=nota;

        //Punto B
        if (contador ==1)
        {
            notaMasBaja = nota;

        }
        else
        {
            if(nota < notaMasBaja)
            {
                notaMasBaja = nota;

                notaMasBaja = sexoNotaMasBaja;
            }
        }
        //Punto C
        if(nota >=6 && sexo == "m")
        {
            contadorVarones++;
        }
    }

    //Punto A

{


}
