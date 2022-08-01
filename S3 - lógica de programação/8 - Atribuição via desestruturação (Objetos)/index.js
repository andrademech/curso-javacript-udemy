const pessoa = {
    nome: 'Herberth',
    sobrenome: 'Andrade',
    idade: 26,
    endereco: {
        rua: 'Av Fraternidade',
        numero: 465
    }
};

// Atribuição via desestruturação
const {
    nome,
    sobrenome,
    idade,
    endereco: {
        rua: r = 12345, // redeclarando a variavel rua para um valor padrão
        numero
    },
    endereco
} = pessoa;
console.log(endereco, r, numero);

