/* const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras - umDia); */
// função Date é uma função construtra
// Jan 01 1970 00:00:00 GMT-0300 (marco zero)
// esta data é formada por milésimos de segundos
// const data = new Date('2022-05-15 12:30:15.100');
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth() + 1); // Mês começa do zero
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('Dia semana', data.getDay()); // 0 é domingo, 6 é sábado
// console.log(data.toString());
// console.log(Date.now()); // marco zero até a data atual em milésimos de segundos
// console.log(Date(1652628183519));

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());
    const segundo = zeroAEsquerda(data.getSeconds());
    const diaSemana = zeroAEsquerda(data.getDay());

    return `Hoje é ${diaSemana}, ${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
}
const data = new Date ();
const dataBrasil = formataData(data);
console.log(dataBrasil);
