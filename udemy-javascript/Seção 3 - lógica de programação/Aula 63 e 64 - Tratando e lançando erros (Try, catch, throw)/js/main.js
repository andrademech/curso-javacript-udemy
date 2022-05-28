// try{
//     console.log(naoExisto);
// } catch(err) {
//     console.log('naoExisto não existe.');
//     console.log(err);
// }

function soma(x,y) {
    if (typeof x, y !== 'number') {
        throw new Error('x e y precisam ser números!');
    }
// Error é uma função construtora
    return x + y;
}

try{
console.log(soma(1, 2));
console.log(soma(1, 14));
} catch(error) {
    console.log(error);
    console.log('Alguma coisa mais amigável para o usuário.');
}
