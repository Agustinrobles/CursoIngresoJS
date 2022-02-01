/*
Robles Agustin Leonardo DIV E
E/S ej6
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
//defino las variables
var numeroUno;
var numeroDos;
var resultado;

//tomo los datos por "ID"

 numeroUno = document.getElementById("txtIdNumeroUno").value;
 numeroDos = document.getElementById("txtIdNumeroDos").value;
 
 
 //transformo la variable de texto a numero

numeroUno = parseInt(numeroUno);
numeroDos = parseInt(numeroDos);

resultado = numeroUno + numeroDos;	


//muestra el resultado de la suma

    //document.write(resultado)    


    alert("El resultado de la suma es: " + resultado);

}

