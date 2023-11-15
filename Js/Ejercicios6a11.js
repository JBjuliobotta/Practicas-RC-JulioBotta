/*ejercicio 6*/
let numUno;
let numDos;
numUno=parseInt(prompt("Ingrese el primer numero"));
numDos=parseInt(prompt('Ingrese el segundo numero'));
if (numUno>numDos) {
    console.log(numUno ,'es mayor que ', numDos)
    document.write(numUno, ' es mayor que ', numDos)

} else {
    console.log(numDos ,' es mayor que ', numUno)
    document.write(numDos ,' es mayor que ', numUno)

}

/*ejercicio 7*/
let numberOne;
let numberTwo;
let numberThree;

numberOne=parseInt(prompt('Ingrese el primer valor'));
numberTwo=parseInt(prompt('Ingrese el segundo valor'));
numberThree=parseInt(prompt('Ingrese el tercer valor'));

if (numberOne>numberTwo && numberOne>numberThree) {
    console.log(numberOne ,' Es el mayor de los tres valores');
    document.write('<br>', numberOne ,' Es el mayor de los tres valores');
} else if (numberTwo>numberOne && numberTwo>numberThree) {
    console.log(numberTwo, ' Es el mayor de los tres valores');
    document.write('<br>', numberTwo, ' Es el mayor de los tres valores');
} else {
    console.log(numberThree ,' Es el mayor de los tres valores');
    document.write('<br>', numberThree ,' Es el mayor de los tres valores');
}

/*ejercicio 8*/
let valorNumerico;

valorNumerico=parseInt(prompt('Ingrese un valor numerico'));

if (valorNumerico % 2 === 0) {
    console.log(valorNumerico ,' Es divisible por 2');
    document.write('<br>', valorNumerico ,' Es divisible por 2');
} else {
    console.log(valorNumerico ,' No es divisible por 2');
    document.write('<br>', valorNumerico ,' No es divisible por 2');
}

/*ejercicio 10*/
let valorUnico;

valorUnico=prompt('Ingresa el numero que quieras');

if (valorUnico % 2 === 0 || valorUnico % 3 === 0 || valorUnico % 5 === 0 || valorUnico % 7 === 0) {
    document.write('<br>', valorUnico ,' El numero es divisible por 2, 3, 5 o 7'); 
} else { 
    document.write('<br>', valorUnico, ' No es divisible por ninguno de los numeros');
}


/*ejercicio 11*/
let unNumero;

unNumero=prompt('Ingresa un numero');

if (unNumero % 2 === 0 || unNumero % 3 === 0 || unNumero % 5 === 0 || unNumero % 7 === 0) {
    if (unNumero % 2 === 0) {
        document.write('Es divisible por 2');
    }
    if (unNumero % 3 === 0) {
        document.write('Es divisible por 3');
    }
    if (unNumero % 5 === 0) {
        document.write('Es divisible por 5');
    }
    if (unNumero % 7 === 0) {
        document.write('Es divisible por 7')
    }
}
    else {
        document.write('No es divisible por ningun numero')
    }

