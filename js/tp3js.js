/*1- Crear un array llamado meses y que almacene el nombre de los doce meses del año.
 Mostrar por pantalla en forma de lista los doce nombres del arreglo.

 let meses=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

document.write('Lista <br>');
 for(i=0;i<meses.length;i++) {
    document.write('<br>', meses[i]);
 } */

 /*2-  Crear un script que solicite al usuario mediante un prompt el nombre de
 ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se
 debe mostrar el arreglo generado, luego realizar las siguientes acciones:
-Mostrar la longitud del arreglo.
-Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
-Añade en última posición la ciudad de París.
-Escribe por pantalla el elemento que ocupa la segunda posición.
-Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

let ciudadesList=[];

do {
    ciudad=prompt('ingrese una ciudad');
    ciudadesList.push(ciudad);
} while (confirm('desea continuar?'));
console.log(ciudadesList);
document.write('la longitud del arreglo es ', ciudadesList.length);
document.write('<br> el primer elemento es ', ciudadesList[0]);
document.write('<br> el tercer elemento es ', ciudadesList[2]);
document.write('<br> el ultimo elemento es ', ciudadesList[ciudadesList.length - 1]);
ciudadesList.push('paris');
document.write('<br> el nuevo ultimo elemento es ', ciudadesList[ciudadesList.length - 1]);
ciudadesList.splice(1,0,'barcelona');
document.write('<br> el nuevo segundo elemento es ', ciudadesList[1]);
console.log(ciudadesList);*/


/*4- Escribir el código de una función a la que se pasa como parámetro un número
entero y devuelve como resultado una cadena de texto que indica si el número es
par o impar. Mostrar por pantalla el resultado devuelto por la función.


function numeroPar(numero) {
  if (numero % 2 == 0) {
    return 'El número es par'
  } else {
    return 'El número es impar'
  }

}*/

/*5- Definir una función que muestre información sobre una cadena de texto que se
le pasa como argumento. A partir de la cadena que se le pasa, la función
determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o
por una mezcla de ambas.

let cadena=prompt('Ingrese una cadena de texto');

function info() {
 
    let resultado = "La cadena \""+cadena+"\" ";
   
    // Comprobar mayúsculas y minúsculas
    if(cadena == cadena.toUpperCase()) {
       resultado += " está formada sólo por mayúsculas";
    }
    else if(cadena == cadena.toLowerCase()) {
        resultado += " está formada sólo por minúsculas";
    }
    else {
      resultado += " está formada por mayúsculas y minúsculas";
    }
   
    return resultado;
  }*/

/*6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo,
luego crear una función para calcular su perímetro y mostrarlo por pantalla.

let ladoA=parseInt(prompt('Ingrese un lado del rectángulo'));
let ladoB=parseInt(prompt('Ingrese el otro lado del rectángulo'));

const perimetro=function () {
    let resultadoPerimeto = 2*(ladoA + ladoB);
    return  resultadoPerimeto;
}*/

/*7- Escriba un script que muestre la tabla de multiplicar de un número ingresado
por pantalla, la creación de la tabla debe ser realizada con una función y mostrar
solo los resultados del 1 al 10 del número elegido por el usuario.*/

let number=prompt('Ingrese un valor numérico');

const tabla=function () {
    let tablaMultiplicar=[];
    return tablaMultiplicar=[number*1, number*2, number*3, number*4, number*5, number*6, number*7, number*8, number*9, number*10] ;
}





