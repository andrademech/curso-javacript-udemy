// Declarando uma função

function falaOi() {
    console.log('Oie!');
}

falaOi();

// function hoitsting: a engine do JS eleva a declaração de função para o começo do código

falaTchau();

function falaTchau(params) {
    console.log('Tchau!');
}

// First class objetcs -> objetos de primeira classe
// Function expression
const souUmDado = function () {
    console.log('Sou um dado.');
};

souUmDado();

function executaFuncao(funcao) {
    console.log('vou executar sua função abaixo:');
    funcao();
};

executaFuncao(souUmDado);

// arrow functions

const funcaoArrow = () => {
    console.log('Sou uma arrow function.');
};

funcaoArrow();

// dentro de um objeto, posso ter uma função

const obj = {
    falar: function () {
        console.log('Estou falando pelo objeto...');
    },
    falando () {
        console.log('Falando pelo novo método de declaração.');
    }
}

obj.falar();

obj.falando();
