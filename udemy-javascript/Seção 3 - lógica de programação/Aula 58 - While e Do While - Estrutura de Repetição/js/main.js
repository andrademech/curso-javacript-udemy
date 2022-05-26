// while faz os laços quantas vezes forem necessárias

const nome = 'Herberth';

let i = 1;

while (i <= 10) {
    console.log(i);
    i++;
}

// gerando número aleatório 

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;

let rand = random (min, max);

while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}

console.log ('#########')
// do while: executa depois checa
do {
    rand = random(min, max);
    console.log(rand)
} while (rand !== 10);
