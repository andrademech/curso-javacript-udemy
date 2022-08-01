// metodo splice()

const nomes = ['Eduardo', 'Maria', 'Joana', 'Pedro', 'Tiago'];

// nomes.splice(índice, delete, elem1, elem2, elem3)

// simulando a função pop()

const removidos = nomes.splice(4, 1);
console.log(nomes, 'nomes removidos:', removidos);
