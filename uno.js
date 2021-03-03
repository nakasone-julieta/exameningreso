/* Enunciado:

** Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
** de cada una debo obtener los siguientes datos:
** el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
** el precio (validar entre 100 y 300),
** la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
** el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
** Se debe Informar al usuario lo siguiente:
** a) El promedio de cantidad por tipo de producto
** b) El tipo de inflamable con más cantidad de unidades en total de la compra
** c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
** d) la marca y tipo del más caro de los productos
*/

function mostrar()
{
	var tipoProducto; 
	var precioProducto; 
	var precioProductoParseado;
	var unidadesProductoCompradas;
	var unidadesProductoCompradasParseado; 
	var tipoInflamable; 
	var marcaProducto; 
			
	//a)
	var alcoholAcumulador=0;
	var iacAcumulador=0;
	var quatAcumulador=0;
	//b)
	var flagInflamable=true;
	var maxUnidadInflamable; 
	var tipoMaxUnidadInflamable;
	//c)
	var iacUnidadesContador=0;
	//d)
	var maxPrecioProducto;
	var flagMaxPrecioProducto=true;
	var maxMarcaProducto;
	var maxTipoProducto;	

	for (i=0; i<2; i++)
	{
		tipoProducto = prompt("ingrese el tipo de producto comprado").toLowerCase();
		while(tipoProducto != "alcohol" && tipoProducto != "iac" && tipoProducto != "quat")
		{
			tipoProducto = prompt("ERROR. ingrese un dato válido: alcohol, iac, quat").toLowerCase();
		}

		precioProducto = prompt("ingrese el precio");
		precioProductoParseado = parseInt (precioProducto);
		while(isNaN(precioProductoParseado) || precioProductoParseado <100 || precioProductoParseado >300)
		{
			precioProducto = prompt("ERROR. ingrese un precio entre 100 y 300");
			precioProductoParseado = parseInt (precioProducto);
		}

		unidadesProductoCompradas = prompt("ingrese cantidad de unidades");
		unidadesProductoCompradasParseado = parseInt (unidadesProductoCompradas);
		while(isNaN(unidadesProductoCompradasParseado) || unidadesProductoCompradasParseado <0 || unidadesProductoCompradasParseado >1000)
		{
			unidadesProductoCompradas = prompt("ERROR. ingrese dato válido de 0 a 1000");
			unidadesProductoCompradasParseado = parseInt (unidadesProductoCompradas);
		}

		tipoInflamable = prompt ("ingrese el tipo de inflamable del producto").toLowerCase();
		while(tipoInflamable != "ignífugo" && tipoInflamable != "combustible" && tipoInflamable != "explosivo")
		{
			tipoInflamable = prompt ("ERROR. ingrese un dato válido: ignífugo, combustible, explosivo").toLowerCase();
		}

		marcaProducto = prompt ("ingrese la marca del producto").toLowerCase();
		while(marcaProducto == " ")
		{
			marcaProducto = prompt ("ERROR. ingrese un dato válido").toLowerCase();
		}
		
		//a) El promedio de cantidad por tipo de producto
		switch (tipoProducto)
		{
			case "alcohol":
				alcoholAcumulador = alcoholAcumulador + unidadesProductoCompradasParseado;
				break;

			case "iac":
				iacAcumulador = iacAcumulador + unidadesProductoCompradasParseado;
				break;

			case "quat":
				quatAcumulador = quatAcumulador + unidadesProductoCompradasParseado;			
				break;
		}

		//b) El tipo de inflamable con más cantidad de unidades en total de la compra
		if (flagInflamable==true || unidadesProductoCompradasParseado > maxUnidadInflamable)
		{
			maxUnidadInflamable = unidadesProductoCompradasParseado;
			tipoMaxUnidadInflamable = tipoInflamable;
			flagInflamable = false; 
		}

		//c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
		if (tipoProducto== "iac")
		{
			if (precioProductoParseado <= 200)
			{
				iacUnidadesContador = iacUnidadesContador + unidadesProductoCompradas;
			}
		}

		//d) la marca y tipo del más caro de los productos
		if (flagMaxPrecioProducto == true || precioProductoParseado > maxPrecioProducto)
		{
			maxPrecioProducto = precioProductoParseado;
			maxMarcaProducto = marcaProducto;
			maxTipoProducto = tipoProducto;

			flagMaxPrecioProducto = false;
		}

	} //termina la iteación
	//a)
	if (tipoProducto == "alcohol" && unidadesProductoCompradasParseado > 0)
	{
		document.write ("el promedio de la cantidad por alcohol es de " + alcoholAcumulador/i);
	}else
		{
			document.write ("no se cargaron datos para alcohol");
		}
	
	if (tipoProducto == "iac" && unidadesProductoCompradasParseado > 0)
	{
		document.write ("el promedio de la cantidad por iac es de " + iacAcumulador/i);
	}else
		{
			document.write ("no se cargaron datos para iac");
		}
	if (tipoProducto == "quat" && unidadesProductoCompradasParseado > 0)
	{
		document.write ("el promedio de la cantidad por quat es de " + quatAcumulador/i);
	}else
		{
			document.write ("no se cargaron datos para quat");
		}
	//b)
	document.write("El tipo de inflamable con más cantidad de unidades en total de la compra es "+ tipoMaxUnidadInflamable+"<br>");
	//c)
	document.write("se compraron "+ iacUnidadesContador + "de iac con precio menor a 200 <br>");
	//d)
	document.write ("la marca y tipo del más caro de los productos son: marca "+maxMarcaProducto+ " y tipo de producto "+ maxTipoProducto);
}
