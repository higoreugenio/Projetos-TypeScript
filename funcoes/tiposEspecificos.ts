// Array com implementação igual ao JS
let hobbies: string[] = ["Ler", "Filmes", "Games"];
console.log(hobbies);
console.log(typeof hobbies);

// Implementação exclusiva do TS
let contato: any[] = ['Higor', 'higor@gmail.com', 768479649, true];
console.log(contato);

// Implementação de um array controlado
let endereco: [string, number, string] = ['Av. da paz', 787, 'Zona da praia'];
console.log(endereco);

//Implementação de um Enum

enum semaforo{
    Verde,
    Amarelo,
    Vermelho
}

const siga: semaforo = semaforo.Verde;
const atencao: semaforo = semaforo.Amarelo;
const pare: semaforo = semaforo.Vermelho;

console.log(siga);
console.log(atencao);
console.log(pare);



