/*
Enunciado:
Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas, de cada persona debemos optener los siguientes datos:
Nombre,
estado civil ("soltero", "casado" o "viudo"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con estado "viudo" de mas de 60 años.
b) el nombre y edad de la mujer soltera mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% del pasaje que tiene mas de. 60 años , el precio final tiene un descuento del 25%, que solo mostramos si corresponde.
*/
function mostrar()
{
	var nombre;
	var estadoCivil;
	var edad; 
	var edadParseado;
	var temperatura;
	var temperaturaParseado; 
	var sexo;
	var continuar;
	var contadorViudo;
	var flagMujerSolteraJoven=true;
	var nombreMujerSolteraJoven;
	var edadMujerSolteraJoven;
	var contadorPasajeros=0;
	var i=0;
	var contadorMayor60=0;
	var descuento;

	do{
		nombre = prompt ("ingrese nombre").toLowerCase;
		while(nombre == " ")
		{
			nombre = prompt ("ERROR. ingrese nombre valido").toLowerCase;
		}

		estadoCivil = prompt ("ingrese estado Civil").toLowerCase;
		while(estadoCivil!= "soltero" && estadoCivil!= "casado" && estadoCivil!= "viudo")
		{
			estadoCivil = prompt ("ERROR ingrese un dato valido (soltero, casado o viudo)").toLowerCase;
		}

		edad =  prompt ("ingrese la edad");
		edadParseado = parseInt(edad);
		while(isNaN(edadParseado)|| edadParseado<17 || edadParseado>100)
		{
			edadParseado = prompt ("ERROR un dato valido entre 17 y 100 años");
			edadParseado = parseInt(edad);
		}

		temperatura =  prompt ("ingrese la temperatura");
		temperaturaParseado = parseInt(temperatura);
		while(isNaN(temperaturaParseado)|| temperaturaParseado<32 || temperaturaParseado>40)
		{
			temperatura =  prompt ("ERROR un dato valido entre 33 y 39 °C");
			temperaturaParseado = parseInt(temperatura);
			
		}

		sexo = prompt ("ingrese el sexo").toLowerCase;
		while(sexo!= "femenino" && sexo!="masculino" && sexo !="no binario") 
		{
			nombre = prompt ("ERROR. ingrese nombre valido").toLowerCase;
		}
		contadorPasajeros= contadorPasajeros + 600; //cuento el pasaje
		i++;//cuento las iteraciones
		

		//a) La cantidad de personas con estado "viudo" de mas de 60 años.
		if (estadoCivil == "viudo" && edadParseado > 60)
		{
			contadorViudo ++;
		}

		//b) el nombre y edad de la mujer soltera mas joven.
		if (sexo == "femenino" && estadoCivil == "soltero")
		{	
			if (flagMujerSolteraJoven==true || edadParseado < edadMujerSolteraJoven )
			{
				edadMujerSolteraJoven=edad;
				nombreMujerSolteraJoven=nombre;
			}

		}
		
		//c) cuanto sale el viaje total sin descuento.

		//d) si hay mas del 50% del pasaje que tiene mas de. 60 años ,
		// el precio final tiene un descuento del 25%, que solo mostramos si corresponde.
		if (edad > 60)
		{
			contadorMayor60++;
		}
		
		if (i/contadorMayor60 > contadorMayor60/2)
		{
			descuento = 0.75;
		}
	
	continuar = confirm("desea ingresar otro usuario?");

	}while(continuar = true) //termina de iterar

	//a
	if (contadorViudo > 0)
	{
		document.write("La cantidad de personas con estado viudo de mas de 60 años es "+contadorViudo +"<br>");
	}
	else {
		document.write("No han sido ingresadas personas con estado viudo de mas de 60 años <br>");
	}

	//b) el nombre y edad de la mujer soltera mas joven.
	if (sexo == "femenino" && estadoCivil == "soltero")
	{
		document.write("el nombre y edad de la mujer soltera mas joven son: edad "+edadMujerSolteraJoven + " nombre " +nombreMujerSolteraJoven+"<br>");
	}

	//c)
	document.write("el total del pasaje es $"+ contadorPasajeros+"<br>");

	//d
	document.write("hay más del 50% del pasaje que tiene mas de 60 años, entonces el descuento es de "+contadorPasajeros*descuento);


}
