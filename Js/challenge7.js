let base;
let altura;

base=parseInt(prompt('Ingrese la base del triángulo'));
altura=parseInt(prompt('Ingrese la altura del triángulo'));
let AreaDelTriangulo=(base * altura)/2
document.write('El área del triángulo es igual a ' + AreaDelTriangulo);
console.log(AreaDelTriangulo);

let radio;
const pi=3.1416;

radio=parseInt(prompt('Ingrese el radio del círculo'));
let AreaDelCirculo=(pi * radio)**2
document.write('<br> El área del círculo es igual a ' + AreaDelCirculo);
console.log(AreaDelCirculo);