let numeroSecreto = 0; 
let intentos = 0;
console.log(numeroSecreto);

function asignarTextoElementos(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElementos('p', `¡Felicidades! ¡Acertaste el número! en ${intentos} ${(intentos === 1) ? 'vez' : 'Veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElementos('p ', 'El número secreto es menor');
        } else {
            asignarTextoElementos('p', 'El número secreto es mayor');
        }
        intentos ++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value ='';
}


function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1; 
}

function condicionesIniciales(){
    asignarTextoElementos('h1', "Juego del número secreto");
    asignarTextoElementos('p', "elige un numero del 1 al 10");
    numeroSecreto = generarNumeroSecreto();
    intentos =1 ;

}
function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalos de numeros
    //Generar numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}
    condicionesIniciales();



