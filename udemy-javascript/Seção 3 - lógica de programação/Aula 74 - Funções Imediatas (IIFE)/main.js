// IIFE => Immediatly Invoked Function Expression

function qualquerCoisa() {
    console.log(122333444455555);
}
qualquerCoisa();
// esta função toca o escopo global

// função IIFE

(function naming() {
    const nome = 'Herberth';
    console.log(nome);

})();

const nome = 'Herberth';
console.log(nome);

// as variaveis não se contradizem

