console.log("Cronometro");
let horas=0;
let minutos=0;
let segundos=0;


let pantallaCronometro=document.getElementById('pantallaCronometro');
console.log(pantallaCronometro);

function Iniciar(){
 console.log('desde Iniciar');
 window.setInterval(tiempo, 999);
};

function Pausar() {
 console.log('desde Pausar');
 pantallaCronometro.innerHTML='22:22:22';
};

function Reiniciar() {
 console.log('desde Reiniciar');
 pantallaCronometro.innerHTML=`0${horas}:0${minutos}:0${segundos}`;
};

function tiempo() {
    segundos++;

    if (segundos > 59) {
        segundos=0;
        minutos++;
    };

    if (minutos > 59) {
        minutos=0;
        horas++;
    };

    if (horas > 23) {
        horas=0;
        minutos=0;
        segundos=0;
    };

}