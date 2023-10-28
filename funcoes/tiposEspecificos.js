"use strict";
// Array com implementação igual ao JS
let hobbies = ["Ler", "Filmes", "Games"];
console.log(hobbies);
console.log(typeof hobbies);
// Implementação exclusiva do TS
let contato = ['Higor', 'higor@gmail.com', 768479649, true];
console.log(contato);
// Implementação de um array controlado
let endereco = ['Av. da paz', 787, 'Zona da praia'];
console.log(endereco);
//Implementação de um Enum
var semaforo;
(function (semaforo) {
    semaforo[semaforo["Verde"] = 0] = "Verde";
    semaforo[semaforo["Amarelo"] = 1] = "Amarelo";
    semaforo[semaforo["Vermelho"] = 2] = "Vermelho";
})(semaforo || (semaforo = {}));
const siga = semaforo.Verde;
const atencao = semaforo.Amarelo;
const pare = semaforo.Vermelho;
console.log(siga);
console.log(atencao);
console.log(pare);
