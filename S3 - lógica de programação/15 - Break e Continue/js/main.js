const numeros = [1, 2, 3, 4, 5, 6, 7 ,8, 9];

for (let i = 0; i <= numeros.length; i ++) {

    let numero = numeros[i];

    if (numero === 2) {
        
        console.log('Pulei o número 2');
        continue;
    }

    console.log(numero);

    if (numero === 7 ) {
        console.log('7 encontrado, saindo...')
        break;
    }

};

// usando o while e do while:

console.log('#####################')
console.log('Fazendo com o while:')

let i = 0; 

while (i <= numeros.length) {

    let numero = numeros[i];

    if (numero === 2) {
        
        console.log('Pulei o número 2');
        i ++; // o incremento precisa estar antes do continue
        continue;
    }

    console.log(numero);

    if (numero === 7 ) {
        console.log('7 encontrado, saindo...')
        i++; // o incremento precisa estar antes do break
        break;
    }
    i++; // o incremento precisa estar no final
}

// fazendo com o do while

console.log('#####################')
console.log('Fazendo com o do while:')

j = 0;

do {

    let numero = numeros[j];

    if (numero === 2) {
        
        console.log('Pulei o número 2');
        j++; // o incremento precisa estar antes do continue
        continue;
    }

    console.log(numero);

    if (numero === 7 ) {
        console.log('7 encontrado, saindo...')
        j++; // o incremento precisa estar antes do break
        break;
    }
    j++; // o incremento precisa estar no final
} while (j <= numeros.length);
