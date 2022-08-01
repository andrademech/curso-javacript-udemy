/*
Escreva uma função chamada ePaisagem que recebe dois argumentos: largura e altura de uma imagem (number).
Retorne true se a imagem estiver no modo paisagem.
*/

// minha resolução:

function ePaisagem(x,y) {
    if (x > y) {
        console.log('True');
        return x;
    } else {
        console.log('False');
        return y;
    }
};

ePaisagem(480, 720);

// Resolução do instrutor:

function ePaisagem2 (largura, altura) {
    return largura >= altura;
    // return largura >= altura ? true : false
    // não precisa especificar o retorno de true ou false
}
// colocar >= caso a img esteja quadrada

// fazendo arrow function:

const ePaisagem3 = (largura, altura) => largura >= altura;
// colocar >= caso a img esteja quadrada

console.log(ePaisagem3(1920, 1080));