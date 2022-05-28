function mostraHora () {
    let data = new Date();
    return data.toLocaleTimeString('pt-BR');
}

const timer = setInterval(function() {
    console.log(mostraHora());
}, 1000);
// 1000 milésimos de segundo

setTimeout(() => {
    clearInterval(timer);
}, 4000);

// função para programar parada do código

setTimeout(() => {
    console.log('Olá, mundo');
}, 4000);

// função para logar mensagem após 4 segundos