function relogio() {
    function getTimeFromSeconds(seconds) {
        const data = new Date(seconds * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    // selecionando a classe relogio
    const relogio = document.querySelector('.relogio');

    let seconds = 0;

    let timer;

    function iniciaRelogio() {
        timer = setInterval(() => {
            seconds++;
            relogio.innerHTML = getTimeFromSeconds(seconds)
        }, 1000);
    }

    // selecionar a variável iniciar com addEventListener
    // marcar o click e adicionar a função desejada para capturar
    // replicar para todos os eventos

    // iniciar.addEventListener('click', (event) => {
    //     relogio.classList.remove('pausado');
    //     clearInterval(timer);
    //     iniciaRelogio();
    // });

    // pausar.addEventListener('click', (event) => {
    //     relogio.classList.add('pausado');
    //     clearInterval(timer);
    // });

    // zerar.addEventListener('click', (event) => {
    //     clearInterval(timer);
    //     relogio.innerHTML = '00:00:00';
    //     seconds = 0
    // });

    // inves de chamar cada um dos elementos, cada um dos addEventListener...

    document.addEventListener('click', function (e) {
        const el = e.target;
        if (el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
        }

        if (el.classList.contains('pausar')) {
            relogio.classList.add('pausado');
            clearInterval(timer);
        }

        if (el.classList.contains('zerar')) {
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            seconds = 0;
            relogio.classList.remove('pausado');
        };

    })
}

relogio();