function somar(valor1: number, valor2: number){
    return valor1 + valor2;
}

function subtrair(valor1: number, valor2: number){
    return valor1 - valor2;
}

function dividir(valor1: number, valor2: number){
    return valor1 / valor2;
}

function multiplicar(valor1: number, valor2: number){
    return valor1 * valor2;
}

function resultado(){
}

let valor1: number = 10;
let valor2: number = 20;
let escolha: number = 4

switch(escolha){
    case 1:
        console.log(somar(valor1, valor2))
        break;
    case 2:
        console.log(subtrair(valor1, valor2))
        break;
    case 3:
        console.log(dividir(valor1, valor2))
        break;
    case 4:
        console.log(multiplicar(valor1, valor2))
        break;
}















//console.log("A soma do valor é: " + somar(valor1, valor2))
//console.log("A subtração do valor é: " + subtrair(valor1, valor2))