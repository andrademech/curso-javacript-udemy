// criar const e capturar o form
const form = document.querySelector('#form');
// adicionar escutador e capturar evento de submit do formulário
// criar função 
form.addEventListener('submit', function (e) {
    // não permitir pg atualizar após enviar formulario
    e.preventDefault();
    // capturar os dados dos inputs
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    // converter inputs para number
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    // condição para preenchimento errado
    if (!peso) {
    setResultado('Peso inválido!', false);
    return;
    }
    if (!altura) {
    setResultado('Altura inválida!', false);
    return;
    }
    // chamar função do imc
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;
    //setar o resultado com a flag true
    setResultado(msg, true);
});
// função para calcular imc
function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    // se o if só tem uma linha, elimina-se {}
    if (imc >= 39.9) return nivel [5];
    if (imc >= 34.9) return nivel [4];
    if (imc >= 29.9) return nivel [3];
    if (imc >= 24.9) return nivel [2];
    if (imc >= 18.5) return nivel [1];
    if (imc < 18.5) return nivel [0];
}

function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed (2);
}
//criar função específica para criar o parágafo
function criaP () {
    const p = document.createElement ('p');
    return p;
}
// função para setar o resultado, recebe uma mensgaem e checa se é válido
function setResultado (msg, isValid) {
    // seleciona a div de resultado
    const resultado = document.querySelector('#resultado');
    //zera o html do resultado
    resultado.innerHTML = '';
    //cria P
    const p = criaP();
    //checa se é verdadeira ou falsa
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild (p);
}