/*
Robles Agustin Leonardo DIV E
F/F tp3
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{	
	//declaro variables 
	var temperatura;
	var fahrenheit;
	var centigrados;
	
	//tomo los datos por id
	temperatura = document.getElementById("txtIdTemperatura").value;
	
	//transformo texto en numero
	temperatura = parseFloat(temperatura);
	
	//cuenta
	centigrados = (temperatura - 32) * 5/9;

	//muestro mensaje por alert

	alert(temperatura + " Fahrenheit son " + centigrados);


}

function CentigradosFahrenheit () 
{
	//declaro variables 
	var temperatura;
	var fahrenheit;
	var centigrados;
	
	//tomo los datos por id
	temperatura = document.getElementById("txtIdTemperatura").value;
	
	//transformo texto en numero
	temperatura = parseFloat(temperatura);
	
	//cuenta
	fahrenheit = (temperatura * 9/5) + 32;

	//muestro mensaje por alert

	alert(temperatura + " centigrados son " + fahrenheit);
}
