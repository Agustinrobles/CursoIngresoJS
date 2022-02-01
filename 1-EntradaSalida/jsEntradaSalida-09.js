/*
Robles Agustin Leonardo DIV E
E/S ej9
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldo;
	var resultado;
	var aumento;



	//traemos los valores por id

	sueldo = document.getElementById("txtIdSueldo").value;
	//resultado = document.getElementById("txtIdResultado").value;



	//parsear el valor 
	sueldo = parseFloat(sueldo);

	//resultado = sueldo + sueldo * (10/100);
	//resultado = sueldo * 1.1;



	// aumento = 10/100;
	// sueldo + (sueldo * aumento);



	aumento = sueldo * 0.1;
	resultado = sueldo + aumento;

	//alert("El sueldo es: " + sueldo);
	//alert("El aumento es de: " + aumento);
	//alert("Y el sueldo con aumento es de: " + resultado);
	
	//mostrar el resultado
	document.getElementById("txtIdResultado").value = resultado;



























}
