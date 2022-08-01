// (condição) ? (valor verdadeiro) : (valor falso)
// utilizando operação ternária

const pontuacaoUsuario = 9999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = 'Pink';
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao)

/* if (pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP.');
} else {
    console.log('Usuário normal.')
} */
