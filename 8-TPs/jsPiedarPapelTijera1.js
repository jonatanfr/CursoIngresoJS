/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var eleccionUsuario;
var piedra;
var papel;
var tijera;
var piedra1;
var papel1;
var tijera1;

function comenzar()
{
    alert("Comenzamos!");
    eleccionMaquina= Math.floor(Math.random()*3 +1);
    console.log(eleccionMaquina);

}//FIN DE LA FUNCIÓN
function piedra()
{
    if(eleccionMaquina==1)
    {
        eleccionMaquina=piedra;
    }
    else
    {
        if(eleccionMaquina == 2)
        {
            eleccionMaquina=papel;
        }
        else
        {
            eleccionMaquina=tijera;
        }
    }
	

}//FIN DE LA FUNCIÓN
function papel()
{
     switch(eleccionMaquina)
    {
    case 1:
        eleccionMaquina=piedra;
        break;
    case 2:
        eleccionMaquina=papel;
    case 3:
        eleccionMaquina=tijera;
    }


}//FIN DE LA FUNCIÓN
function piedra()
{
    piedra1=document.getElementById("piedra").value;
    if(eleccionUsuario==piedra1 && eleccionMaquina==piedra)
    {
        alert("es un empate");
    }
    else
    {
        if(eleccionUsuario==piedra1 && eleccionMaquina==papel)
        {
            alert("perdiste");
        }
        else
        {
            alert("Ganaste!");
        }
    }
}
function tijera()
{
    
	

}//FIN DE LA FUNCIÓN

function papel()
{
    papel1=document.getElementById("papel1").value;

}//FIN DE LA FUNCION
if(eleccionUsuario==papel1 && eleccionMaquina==papel)
{
    alert("es un empate");

}
else
{
    if(eleccionUsuario==papel1 && eleccionMaquina==tijera)
    {
        alert("perdiste");
    }
    else
    {
        alert("Ganaste!");
    }

}//FIN DE LA FUNCION
function tijera()
{
    tijera1=document.getElementById("Tijera").value;
    if(eleccionUsuario==tijera1 && eleccionMaquina==papel)
    {
        alert("Ganaste!");
    }
    else
    {
        if(eleccionUsuario==tijera1 && eleccionMaquina==piedra)
        {
            alert("perdiste");
        }
        else
        {
            alert("es un empate");
        }
    }
}//FIN DE LA FUNCION