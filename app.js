

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un numero del 1 al 10';

function asignarTextoElementos(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
}


function intentoDeUsuario(){
    alert('Click desde el botón');
}

asignarTextoElementos('h1', "Juego del número secreto");