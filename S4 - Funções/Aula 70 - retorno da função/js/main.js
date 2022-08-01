// return 
// retorna um valor
// termina uma função

function criaPessoa(nome, sobrenome) {
    return {
        nome, sobrenome};
}

const p1 = criaPessoa('Herberth', 'Andrade')

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ', ' + resto;
    }

    return falaResto;
}

const olaMundo = falaFrase('Olá');

console.log(olaMundo('mundo!'));

