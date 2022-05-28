/*
Escreva uma função que recebe um número e retorne:

1 - Número divisível por 3 = Fizz;
2 - Número divisível por 5 = Buzz;
3 - Número divisível por 3 e 5 = FizzBuzz;
4 - Se o número não é divisível 3 e 5 = retorna o próprio número;
5 - Checar se é realmente um número;
6 - Use a função com números de 0 a 100.
*/

// minha resolução parcial: 

function fizzBuzz1 (num) { 
    if (num % 3 == 0) {
        return 'Fizz';
    } else if (num % 5 == 0) {
        return 'Buzz';
    } else if (num % 3 == 0 && um % 5 == 0) {
        return 'FizzBuzz';
    } else {
        return num;
    }
}

console.log(fizzBuzz1(15));

// resolução do professor:

function fizzBuzz(numero) {
    if (typeof numero !== 'number') return NaN;
    if (numero % 3 == 0 && numero % 5 == 0) return 'FizzBuzz';
    if (numero % 3 == 0) return 'Fizz';
    if (numero % 5 == 0) return 'Buzz';
    return numero;
}

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}