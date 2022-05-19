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