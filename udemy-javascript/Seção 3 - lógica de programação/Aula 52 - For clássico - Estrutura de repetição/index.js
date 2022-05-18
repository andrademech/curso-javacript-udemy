for (let i = 0; i <= 5; i++) {
    console.log(`linha ${i}`);
} // bloco do for não tem ; no final

/*
1 - Criar variável dentro dos parênteses. i por padrão.
2 - Criar condição. Quando o for vai parar.
3 - Incrementar a variável. i++. incrementar de 1 a cada volta
*/
console.log(' ')
// for de 2 em 2
for (let i = 0; i <= 11; i+=2) {
    console.log(`linha ${i}`);
}
console.log(' ')
// for negativo de dois em dois
for (let i =-10; i <= 11; i+=2) {
    console.log(`linha ${i}`);
}
console.log(' ')
// for decrescente de cinco em cino
for (let i = 100; i >= 10; i -= 5) {
    console.log(`linha ${i}`);
}
console.log(' ')
// números pares
for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? ' - par' :  ' - ímpar';
    console.log(i, par);
}

console.log(' ')

// array com lista de frutas

const frutas = ['laranja', 'limão', 'açerola', 'abacaxi', 'pêra', 'mamão', 'melancia'];

for (let i = 0; i < frutas.length; i++) {
    console.log(i + 1, frutas[i]);
};