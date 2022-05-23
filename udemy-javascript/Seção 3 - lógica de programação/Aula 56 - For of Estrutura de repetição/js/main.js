const nome = 'James';

// 3 formas de logar cada caractere do nome usando o for
// PRIMEIRA: for in

for (let i = 0; i < nome.length; i ++) {
    console.log(nome[i]);
}

console.log('');

// SEGUNDA: for in

for (let i in nome) {
    console.log(nome[i]);
}

console.log('');

// TERCEIRA: for of

for (valor of nome) {
    console.log(valor);
}

// se tivéssemos Objetos

const pessoa = {
    nome: 'Herberth',
    sobrenome: 'Andrade',
    idade: 26
}

for (let i in pessoa) {
    console.log(i, pessoa[i]);
};

/*
for clássico: geralmente com iteráveis (array ou strings)
for in: retorna o índice ou chave (string, array ou objetos)
for of: retorna o valor em si (iteráveis, arrays ou strings)
*/