/*
Robles Agustin Leonardo DIV E
E/S ej10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//declaro las variables

	var importe;
	var resultado;
	var descuento;


	//traemos los valores por id
	importe = document.getElementById("txtIdImporte").value;
	//resultado = document.getElementById("txtIdResultado").value;


	//parsear el valor
	importe = parseFloat(importe);

	//mostrar el resultado	
	descuento = 25/100 * importe;
	resultado = importe - descuento;

	document.getElementById("txtIdResultado").value = resultado;









	//txtIdImporte
	//txtIdResultado

}
