function retornaFuncao(params) {
    const nome = 'Herberth';
    return function() { // funcao anonymous
        return nome;
    }
}

const funcao = retornaFuncao();

console.log(funcao);

// closure é a habilidade da funcao anonima acesar o próprio escopo léxico