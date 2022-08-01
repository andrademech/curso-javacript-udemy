// lazzy evaluation => nunca mai entregar todos os valores de uma vez

function* geradora1 () {
    // Código qualquer...
    yield 'Valor 1'; // semelhante ao return
    // Código qualquer...
    yield 'Valor 2';
    // Código qualquer...
    yield 'Valor 3';
}

// yeld serve para retornar o valor anterior imediato

const g1 = geradora1();
console.log(g1.next()); // executa e retorna um objeto
console.log(g1.next().value); // executa e retorna um objeto contendo o valor: Valor 1
// next() é um método usado dentro do objeto

// também é possível iterar sobre a função:

const p1 = geradora1();
for (let value of p1) {
    console.log(valor);
}
// retorna Valor 1 Valor 2 Valor 3
