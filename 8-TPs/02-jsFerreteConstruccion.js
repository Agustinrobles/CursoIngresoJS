/*
Robles Agustin Leonardo DIV E
F/C tp2
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	
	var largoTerreno;
	var anchoTerreno;
	var perimetro;
	var alambre;

	largoTerreno = document.getElementById("txtIdLargo").value;
	anchoTerreno = document.getElementById("txtIdAncho").value;

	largoTerreno = parseInt(largoTerreno);
	anchoTerreno = parseInt(anchoTerreno);

	perimetro = largoTerreno *2 + anchoTerreno *2;

	alambre = perimetro *3;


	alert("Se necesita comprar " + alambre + "metros de alambre")


}
function Circulo () 
{
	
	var radioTerreno;
	var perimetroTerreno;
	var alambre;
	var pi;
	
	pi = 3.14;
	radioTerreno = document.getElementById("txtIdRadio").value;
	radioTerreno = parseFloat(radioTerreno);

	pi = parseFloat(pi);

	perimetroTerreno = radioTerreno * 2 * pi;

	alambre = perimetroTerreno * 3;


	alert("La cantidad de alambre es: " + alambre); 
 	

}
function Materiales () 
{
	
	var largoDelterreno;
	var anchoDelterreno;
	var areaDelterreno;
	var bolsaDecemento;
	var bolsaDecal;

	largoDelterreno = document.getElementById("txtIdLargo").value;
	anchoDelterreno = document.getElementById("txtIdAncho").value;

	largoDelterreno = parseFloat(largoDelterreno);
	anchoDelterreno = parseFloat(anchoDelterreno);


	areaDelterreno = largoDelterreno * anchoDelterreno;
	bolsaDecemento = areaDelterreno * 2;
	bolsaDecal = areaDelterreno * 3;

	alert("La cantidad de cemento que hay que comprar son: " + bolsaDecemento);
	alert ("Y la cantidad de cal que hay que compara son: " + bolsaDecal);	
}