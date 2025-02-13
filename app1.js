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

function numeroMayor(a,b){
    if (a > b) {
        console.log(a + 'es mayor que ' + b);
    }else {
        console.log(b + ' es mayor que ' + a);
    }
}
numeroMayor(1,9);

function multiplicarSimismo (a){
    return (a*a);
}
let resultadomulti = multiplicarSimismo (3);
console.log(` El resultado de la multiplicación es ${resultadomulti}`);


function calculaImc (peso, altura){
    return peso / (altura*altura);
}
var imc = calculaImc(69,1.67);  

calculaImc(69, 1.67);
console.log( `Tu IMC es ${imc.toFixed(2)}`);

