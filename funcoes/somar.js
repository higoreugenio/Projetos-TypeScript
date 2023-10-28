"use strict";
function soma(a, b, c) {
    return a + b + c;
}
function media(soma) {
    return soma / 3;
}
let a1 = 10;
let b1 = 20;
let c1 = 30;
console.log("A soma das notas é: " + soma(a1, b1, c1));
console.log("A média das notas é: " + media(soma(a1, b1, c1)));
