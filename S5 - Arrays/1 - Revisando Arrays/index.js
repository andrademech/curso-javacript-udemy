// revisando Arrays
// valores por referência
//  indice         0         1        2
const nomes = ['Eduardo', 'Maria', 'Joana'];

nomes[2] = 'João' // modificando indice específico

// console.log(nomes);

// usando o rest operator

const nomes2 = ['Eduardo', 'Maria', 'Joana'];

const novo = [...nomes]

novo.pop(); // metodo que remove o último valor por padrão

console.log(nomes);
console.log(novo);

console.log(nomes.length);

console.log(nomes.shift()); // metodo que remove o índice 0 por padrão

nomes2.push('Jack'); // incluindo novo item

const novo2 = (nomes2).slice(1, 3) // slice faz um fatiamento do arrays
// vai do item inicial até o indice do valor que se quer que permaneça

console.log(novo2);

const nomeProprio = 'Herberth James Lima de Andrade'

const nomesSeparados = nomeProprio.split(' ');
// o metodo split separa os caracteres por um determinado item
console.log(nomesSeparados);

const joinNome = nomesSeparados.join(' ');
console.log(joinNome);