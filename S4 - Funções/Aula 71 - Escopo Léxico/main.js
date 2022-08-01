// escopo léxico da função

const nome = 'Herberth';

function falaNome() {
    console.log(nome);
}

function usaFalaNome(params) {
    const nome = 'Andrade';
    falaNome();
}

usaFalaNome();