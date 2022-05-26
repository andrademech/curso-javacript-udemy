// declarando o array
let numeros = [1, 2, 3, 4, 5];

// fazendo contagem com for clássico, continue e break

console.log('Usando o for clássico com continue e break: ')

for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];

    if (numero === 2) {
        console.log('Pulei o número dois.');
        continue;
    }

    if (numero === 4) {
        console.log('Número quatro encontrado. Saindo...');
        break;
    }

    console.log(numero);
};

console.log('####################')

console.log('Usando o for in: ')

for (let i in numeros) {
    console.log(numeros[i]);
};

console.log('####################')

console.log('Usando o for of: ')

for (let numero of numeros) {
    console.log(numero);
};

console.log('####################')

console.log('Usando while: ')

let i = 0; 

while (i < numeros.length) {
    console.log(numeros[i]);
    i++;
};

console.log('####################')

console.log('Usando do while: ')

let j = 0; 

do {
    console.log(numeros[j]);
    j++;
} while (j < numeros.length);
