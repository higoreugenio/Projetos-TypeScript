function soma(a: number, b: number, c: number){
    return a + b + c;
}

function media(soma: number){
    return soma / 3;
}

let a1: number = 10;
let b1: number = 20;
let c1: number = 30;

console.log("A soma das notas é: " + soma(a1, b1, c1));
console.log("A média das notas é: " + media(soma(a1, b1, c1)));