const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000];

const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros;
// ... pega o restante dos itens do array, chamado rest operator
// ... chama-se rest ou spread 
console.log(primeiroNumero, segundoNumero, terceiroNumero);

console.log(resto);

const numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(numbers[0][1]);