/*
Robles Agustin Leonardo DIV E
F/F tp1 

1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precio1;
	var precio2;
	var precio3;
	var suma;

	precio1 = document.getElementById("txtIdPrecioUno").value;
	precio2 = document.getElementById("txtIdPrecioDos").value;
	precio3 = document.getElementById("txtIdPrecioTres").value;

	precio1 = parseFloat(precio1);
	precio2 = parseFloat(precio2);
	precio3 = parseFloat(precio3);



	suma = precio1 + precio2 + precio3;

	alert("La suma es $ " + suma);


}
function Promedio () 
{
	var precio1;
	var precio2;
	var precio3;
	var suma;


	precio1 = (document.getElementById("txtIdPrecioUno").value);
	precio2 = (document.getElementById("txtIdPrecioDos").value);
	precio3 = (document.getElementById("txtIdPrecioTres").value);


	precio1 = parseFloat(precio1);
	precio2 = parseFloat(precio2);
	precio3 = parseFloat(precio3);


	suma = precio1 + precio2 + precio3;

	alert("El promedio es $ " + suma / 3);



}
function PrecioFinal () 
{
	var precio1;
	var precio2;
	var precio3;
	var suma;
	var iva;
	var importeFinal; 

	precio1 = document.getElementById("txtIdPrecioUno").value;
	precio2 = document.getElementById("txtIdPrecioDos").value;
	precio3 = document.getElementById("txtIdPrecioTres").value;

	precio1 = parseFloat(precio1);
	precio2 = parseFloat(precio2);
	precio3 = parseFloat(precio3);

	suma = precio1 + precio2 + precio3;
	
	iva = suma * 21 / 100;

	importeFinal = suma + iva;
	

	alert("El precio final mas iva incluido es $ " + importeFinal);

}