/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - Valores copiados
*/
//          0123456
let nome = 'Andrade';
nome[0] = 'B'; // a string é imutável
console.log(nome[0], nome);

let a = 'A';
let b = a; // Cópia, apenas
console.log(a, b);

a = 'Outro texto';
console.log(a, b);

/*
Referência (mutável) - array, object, function - valores passados por referência 
*/
let A = [1, 2, 3];
let B = A; // fazendo referência, apenas
// fazer spread do array a em B: let B = [...A];
let C = B;
console.log(A, B);

A.push(4);
console.log(A, B);

B.pop();
console.log(A, B); // resultado retorna para o valor inicial

console.log (C);

// Agora fazendo para objetos

const pessoa_a = {
    nome: 'Herberth',
    sobrenome: 'Andrade',
}
const pessoa_b = pessoa_a;
// para copiar, sem fazer referência: fazer spread.
const pessoa_c = {...pessoa_a}

pessoa_a.nome = 'João'

console.log(pessoa_a) // valor com push

console.log(pessoa_b) // valor passado por referência

console.log(pessoa_c) // valor original devido ao spread

