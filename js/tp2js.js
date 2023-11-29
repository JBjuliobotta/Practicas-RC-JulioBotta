/*1- Escribir un programa que solicite la edad y si es mayor de 18 años 
mostrar un mensaje que ya puede conducir,
 si la edad ingresada no es un número válido indicarlo en un mensaje.

let edadConductor;
edadConductor=prompt('Ingrese su edad');

if (edadConductor>=18) {
    console.log('La edad del conductor es válida para la licencia');
} else {
    console.log('La edad ingresada no es válida para la licencia');
}*/

/*2- Escribir un programa que solicite una nota (número) de 0  a 10.
Luego mostrar la calificación en un alert según los siguientes rangos de nota:
0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

let notaAlumno;
notaAlumno=prompt('Ingrese su nota aquí');

if (notaAlumno == 0 || notaAlumno == 1 || notaAlumno == 2) {
    console.log('Su nota es Muy deficiente');
} else if (notaAlumno == 3 || notaAlumno == 4) {
    console.log('Su nota es Insuficiente');
} else if (notaAlumno == 5 || notaAlumno == 6) {
    console.log('Su nota es Suficiente');
} else if (notaAlumno == 7) {
    console.log('Su nota es Bien');
} else if (notaAlumno ==8 || notaAlumno == 9) {
    console.log('Su nota es Notable');
} else if (notaAlumno == 10) {
    console.log('Su nota es Sobresaliente');
} else if (notaAlumno>10) {
    console.log('Número erroneo');
} else if (isNaN(notaAlumno)) {
    console.log('Introduce un número válido');
}*/

/*3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”.
salir con “cancelar” deben mostrarse todas las cadenas concatenadas
con un guión -.

let concatenacion='';

do {
    cadena=prompt('Ingresa un string');
    if (concatenacion == '') {
        concatenacion = concatenacion + cadena 
    } else {
        concatenacion = concatenacion + '-' + cadena ;
    }
} while (confirm('Desea continuar?'));
    console.log(concatenacion);*/

/*4- Realiza un script que pida números hasta que se pulse “cancelar”.
Si no es un número deberá indicarse con un «alert» y seguir pidiendo números.
Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let sumaTotaldeNumeros=0;

do {
    numero=parseInt(prompt('Ingrese un numero'));
    if (isNaN(numero)) {
        alert('Ingrese un numero válido');
    } else {
        sumaTotaldeNumeros = parseInt(sumaTotaldeNumeros + numero);
    }
} while (confirm('Desea continuar?'));
    console.log(sumaTotaldeNumeros);*/

/*5- Realizar una página con un script que calcule el valor de la letra de un número
de DNI (Documento nacional de identidad).
El algoritmo para calcular la letra del dni es el siguiente :
El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:
(T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

let resto=0;
let letra='';

do {
    numero=parseInt(prompt('Ingresesu DNI'));
    if (numero>=0 && numero<=99999999) {
        resto = numero % 23 ;
        switch (resto) {
            case 0 :
                letra = 'T';
                break;
            case 1 :
                letra = 'R';
                break;
            case 2 :
                letra = 'W';
                break;
            case 3 :
                letra = 'A';
                break;
            case 4 :
                letra = 'G';
                break;
            case 5 :
                letra = 'M';
                break;
            case 6 :
                letra = 'Y';
                break;
            case 7 :
                letra = 'F';
                break;
            case 8 :
                letra = 'P';
                break;
            case 9 :
                letra = 'D';
                break;
            case 10 :
                letra = 'X';
                break;
            case 11 :
                letra = 'B';
                break;
            case 12 :
                letra = 'N';
                break;
            case 13 :
                letra = 'J';
                break;
            case 14 :
                letra = 'Z';
                break;
            case 15 :
                letra = 'S';
                break;
            case 16 :
                letra = 'Q';
                break;
            case 17 :
                letra = 'V';
                break;
            case 18 :
                letra = 'H';
                break;
            case 19 :
                letra = 'L';
                break;
            case 20 :
                letra = 'C';
                break;
            case 21 :
                letra = 'K';
                break;
            case 22 :
                letra = 'E';
                break;
            default :
                alert('Numero erroneo');
                break;    
        }alert('Numero: ' + numero + ' letra: ' + letra);
    } else {
        if (numero != undefined) {
            alert(numero + ' no es un numero');
        }
    }

} while (confirm('Desea continuar?'));*/

/*6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
1
22
333
4444
55555
666666
…….


let i;
let num;

for(i=1; i<=30 ; i++) {
    for(num=0 ; num<i ;num++){
        document.write(i);
    }
    document.write('<br>')
}*/

/*7- Haz un script que escriba una pirámide inversa de los números del 1 al número
que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

let i;
let repeticiones;
let numrepeticiones=parseInt(prompt('Ingrese un numero del 1 al 50'));

for(i=numrepeticiones;i>=1;i--) {
    for(repeticiones=i;repeticiones>=1;repeticiones--) {
        document.write(i);
    }
    document.write('<br>');
}*/

/*8- Crea script para generar pirámide siguiente con los números 
del 1 al número que indique el usuario (no mayor de 50)

let i;
let rep;

for(i=0;i<=30;i++) {
    for(rep=1;rep<=i;rep++){
        document.write(rep);
    }
    document.write('<br>');
}*/

/*9- Crea un script que escriba los números del 1 al 500, que indique cuáles son
múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal.

let i;


for(i=1;i<=500;i++) {

    if (i % 4 == 0) {
        document.write('<br>', i, 'multiplo de 4');
    } else if (i % 9 == 0) {
        document.write('<br>', i, 'multiplo de 9');
    } else if (i % 5 == 0) {
        document.write('<br> <hr>');
    }
    else {
        document.write('<br>', i);
    }
}*/








