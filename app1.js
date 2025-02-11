function holaMundo(){
    console.log('¡Hola, Mundo!');
}

holaMundo();

function nombreParametro(nombre){
    console.log('Hola '+ nombre);
}
nombreParametro('pepito');



function numeroDoble(numero){
    return numero * 2;
}

let resultado = numeroDoble(2);
console.log(resultado);



function promedio (nota1,nota2,nota3){
    return (nota1 + nota2 + nota3) / 3;
}

let promedioFinal = promedio (3,3,3);
console.log(promedioFinal);
