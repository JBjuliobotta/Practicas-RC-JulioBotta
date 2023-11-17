/* ejercicio 1
let num;
num=parseInt(prompt('Ingrese un numero'));

if (num % 2 === 0) {
    document.write(num, ' es un numero par');
} else { document.write(num, ' es un numero impar');}*/

/* ejercicio 2
let numero;
numero=parseInt(prompt('Ingresa un numero'));

if (numero >= 0) {
    document.write('<br>',numero,' es positivo');
} else { document.write('<br>',numero,' es negativo');}*/

/*ejercicio 3
let num_1;
let num_2;

num_1=parseInt(prompt('Ingrese el primer numero'));
num_2=parseInt(prompt('Ingrese el segundo numero'));

if (num_1>num_2) {
    document.write('<br>',num_1,' es mayor');
} else { document.write('<br>',num_2,' es mayor')};*/

/*ejercicio 4
let contraseña;

contraseña=prompt('Ingrese su contraseña');

if (contraseña.length >= 8)  {
    document.write('La contraseña cumple las condiciones');
} else { document.write('La contraseña no cumple, ingrese otra');}*/

/*ejercicio 5
let calificacion;

calificacion=parseInt(prompt('Ingrese la calificacion que obtuvo'));

if (calificacion >= 70) {
    document.write('Está aprobado');
} else { document.write('Está desaprobado');}*/

/*ejercicio 6

let letra;
letra=prompt('Ingrese cualquier letra');

if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    document.write(letra ,' Es una vocal');
} else {
    document.write(letra, ' Es una consonante');
}*/

/*ejercicio 7 
let diaDeLaSemana;

diaDeLaSemana=parseInt(prompt('Ingrese un numero del 1 al 7'));

if (diaDeLaSemana === 1) {
    document.write('Es el día Lunes');
} else if (diaDeLaSemana === 2) {
    document.write('Es el día Martes');
} else if (diaDeLaSemana === 3) {
    document.write('Es el día Miercoles');
} else if (diaDeLaSemana === 4) {
    document.write('Es el día Jueves');
} else if (diaDeLaSemana === 5) {
    document.write('Es el día Viernes');
} else if (diaDeLaSemana === 6) {
    document.write('Es el día Sabado');
} else if (diaDeLaSemana === 7) {
    document.write('Es el día Domingo');
} else {
    document.write('El numero no es correcto');
}*/

/*ejercicio 9
let edad;
edad=parseInt(prompt('Ingrese su edad'));

if (edad >= 18) {
    document.write('Es mayor de edad');
} else {
    document.write('Es menor de edad');
}*/

/*ejercicio 10
let x;
let y;
x=parseInt(prompt('Ingrese el valor de x'));
y=parseInt(prompt('Ingrese el valor de y'));

let suma=(x + y);

if (suma > 100) {
    document.write(suma, ' Es mayor que 100');
} else if (suma < 100) {
    document.write(suma, ' Es menor que 100');
} else {
    document.write(suma, ' Es igual que 100');
}*/

/*ejercicio 8*/
let numPrimo;

numPrimo=parseInt(prompt('Ingrese un numero'));

if (numPrimo % 1 === 0 && numPrimo % numPrimo === 0) {
    document.write('El numero es primo');
} else {
    document.write('El numero no es primo');
}