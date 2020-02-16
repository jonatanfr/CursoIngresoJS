/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var cantidadAlambre;

    largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    cantidadAlambre = largo * ancho;

    alert ("La cantidad de alambre a comprar es: " + cantidadAlambre + " metros cuadrados ");



}
function Circulo () 
{

    var radio;

    radio = document.getElementById("Radio").value;

    radio=parseInt(radio);

    cantidadAlambre = 3.14 * (radio * radio);

    alert ("La cantidad de alambre a comprar es: " + cantidadAlambre + " metros cuadrados ");

	
}
function Materiales () 
{
    
    
var largo;
var ancho;
var cantidadBolsas;
var cemento;
var cal;

largo = document.getElementById("Largo").value;
ancho = document.getElementById("Ancho").value;

largo = parseInt(largo);
ancho = parseInt(ancho);

cantidadBolsas = largo * ancho;
cemento = cantidadBolsas * 2;
cal = cantidadBolsas * 3;

alert ("Para el contrapiso se necesita: " + cemento + " bolsas de cemento y " + cal + " bolsas de cal ");

}