/*Enunciado:

Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
nombre
Tipo curasada("libre";"presencial";"remota")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no sea masculino
b) El nombre del mas joven de los alumnos entre los que la dan libre
d) El promedio de nota por sexo
f) La edad y nombre del que cursa mas materias que no sean en forma remota
*/
function mostrar()
{
  var nombre; 
  var cursada;
  var cantidadMaterias;
  var cantidadMateriasParseado;
  var sexo;
  var notaPromedio;
  var notaPromedioParseado;
  var edad;
  var edadParseado;
 
  //a)
  var mejorPromedioNoMasculino;
  var nombreMejorPromedioNoMasculino;
  var flagMejorPromedioNoMasculino=true;
  //b)
  var nombreMasJovenLibre;
  var edadNombreMasJovenLibre;
  var flagNombreMasJovenLibre=true
  //d)
  var contadorNotaFemenino=0;
   var acumuladorContadorNotaFemenino=0;
  var contadorNotaMasculino=0;
  var acumuladorNotaMasculino=0;
  var contadorNotaNoBinario=0;
  var acumuladorNotaNoBinario=0;
  //f)
  var maximoMaterias;
  var maximoEdad;
  var maximoNombre;
  var flagMasMaterias=true;
    //*****subir las variables declaradas *///
  
  do 
  {
    nombre = prompt ("ingrese el nombre").toLowerCase();
    while (nombre == " ")   
    {
      nombre = prompt ("ingrese el nombre").toLowerCase();
    }

    cursada = prompt ("ingrese el tipo de cursada").toLowerCase();
    while (cursada != "libre" && cursada != "presencial" && cursada != "remota")   
    {
      cursada = prompt ("ERROR. ingrese un dato válido (libre;presencial;remota)").toLowerCase();
    }
    
    flagMasMaterias=true = prompt ("ingrese la cantidad de materias");
    cantidadMateriasParseado = parseInt(cantidadMaterias);
    while (isNaN(cantidadMateriasParseado) || cantidadMateriasParseado <0 || cantidadMateriasParseado >8)
    {
      cantidadMaterias = prompt ("ERROR. ingrese un dato válido de 0 a 8 materias");
      cantidadMateriasParseado = parseInt(cantidadMaterias);
    }
    
    sexo = prompt ("ingrese el tipo de cursada").toLowerCase();
    while (sexo!= "femenino" && sexo!="masculino" && sexo !="no binario")   
    {
      sexo = prompt ("ERROR. ingrese un dato válido ( femenino , masculino , no binario)").toLowerCase();
    }
    
    notaPromedio = prompt ("ingrese el promedio de notas");
    notaPromedioParseado = parseInt(notaPromedioParseado);
    while (isNaN(notaPromedioParseado) || notaPromedioParseado <0 || notaPromedioParseado >10)
    {
      notaPromedio = prompt ("ERROR. ingrese un dato válido de 0 a 10");
      notaPromedioParseado = parseInt(notaPromedioParseado);
    }

    edad = prompt ("ingrese la edad");
    edadParseado = parseInt(notaPromedioParseado);
    while (isNaN(edadParseado) || edadParseado <18 || edadParseado >100)
    {
      edad = prompt ("ERROR. ingrese un dato válido de 0 a 100");
      edadParseado = parseInt(notaPromedioParseado);
    }


 
    continuar = confirm ("desea cargar otro alumno?");

    

    //a) El nombre del mejor promedio que no sea masculino
    if (sexo != "masculino")
    {
      if(flagMejorPromedioNoMasculino==true || notaPromedioParseado>mejorPromedioNoMasculino)
      {
        mejorPromedioNoMasculino= notaPromedioParseado;
        nombreMejorPromedioNoMasculino = nombre;
        flagMejorPromedioNoMasculino = false; 
      }
    }

    //b) El nombre del mas joven de los alumnos entre los que la dan libre
    if (cursada == "libre")
    {
      if(flagNombreMasJovenLibre==true || edadParseado < edadNombreMasJovenLibre)
      {
        edadNombreMasJovenLibre= edadParseado;
        nombreMasJovenLibre = nombre;
        flagNombreMasJovenLibre = false; 
      }
    }

    //d) El promedio de nota por sexo
    switch (sexo)
    {
      case "femenino":
        contadorNotaFemenino ++;
        acumuladorContadorNotaFemenino = acumuladorContadorNotaFemenino + NotaPromedio;
      break;
      case "masculino":
        contadorNotaMasculino ++;
        acumuladorNotaMasculino = acumuladorNotaMasculino + NotaPromedio;
      break;
      case "no binario":
        contadorNotaNoBinario ++;
        acumuladorNotaNoBinario = acumuladorNotaNoBinario + NotaPromedio;
      break;
    }
    
    //f) La edad y nombre del que cursa mas materias que no sean en forma remota
    if (cursada!= "remota")
    {
      if(flagMasMaterias=true || cantidadMaterias > maximoMaterias)
      {
        maximoMaterias=cantidadMaterias;
        maximoEdad = edad;
        maximoNombre = nombre;

        flagMasMaterias=false;
      }
    }
   
  } while (continuar == true); //termina de iterar

  //:::::::::::RESPUESTAS::::::::::://
  //a)
  document.write ("El nombre del mejor promedio que no sea masculino" + nombreMejorPromedioNoMasculino + "<br>");
  //b)
  document.write ("El nombre del mas joven de los alumnos entre los que la dan libre es " + nombreMasJovenLibre +"<br>");
  
  //d)
  if (sexo == "femenino")
  {
    document.write ("El promedio de nota para femenino es "+ acumuladorContadorNotaFemenino/contadorNotaFemenino+"<br>");
  }
  else if 
  (sexo == "masculino")
  {
    document.write ("El promedio de nota para masculino es "+ acumuladorNotaMasculino/contadorNotaMasculino+"<br>");
  }
  else if (sexo == "no binario")
  {
    document.write ("El promedio de nota para no binario es "+ acumuladorNotaNoBinario/contadorNotaNoBinario+"<br>");
  }
  //f)
  document.write ("La edad y nombre del que cursa mas materias que no sean en forma remota: edad " + maximoEdad + " nombre " + maximoNombre)
   
    
}    