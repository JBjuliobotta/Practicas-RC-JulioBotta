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











