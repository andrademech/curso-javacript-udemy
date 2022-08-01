const frutas = [
    'Laranja',
    'Maracujá',
    'Açerola'
];


for (let indice in frutas) {
    console.log(indice, frutas[indice]);
}
/* SAÍDA
0 Laranja
1 Maracujá
2 Açerola
*/

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// } // modelo anterior

// criando objetos

console.log('')

const pessoa = {
    nome: 'Herberth',
    sobrenome: 'Andrade',
    idade: 26
}
for (let key in pessoa) {
    console.log(key, pessoa[key])
}
