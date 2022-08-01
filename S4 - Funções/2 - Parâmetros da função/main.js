// é possível enviar ou não um parâmetro para a função

function funcaoTeste() {
    console.log('Oie.');
}
// mesmo após não declarar o parâmetro, não ocorrerá erros
funcaoTeste('Valor', 1, 2, 3, 5);

// o JS guarda os parâmetros na função arguments

function funcaoTeste2() {
    console.log(arguments[5]);
}
// mesmo após não declarar o parâmetro, não ocorrerá erros
funcaoTeste2('Valor', 1, 2, 3, 4, 'andrade');

function funcao() {
    let total = 0;
    for (argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}
funcao(1, 2, 3, 4, 5, 6, 7);

// apenas para funções criadas com a palavra function

// usando o rest operator '...'
const conta = function (operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
    
};

conta('+', 1, 20,30,40,50);
