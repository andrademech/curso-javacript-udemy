// segunda parte...

try {
    // é executada quando não há erros
    // console.log(erro);
    console.log('Abri um arquivo.');
    console.log('Manipulei o arquivo e gerou erro.');
    console.log('Fechei o arquivo.');

    try {
        console.log(b);
    } catch (error) {
        console.log('Deu erro');
    }

} catch (error) {
    // é executada quando há erros
    console.log('Tratando o erro.');
} finally {
    // sempre executado; porém pode ser omitido
    console.log('Finally: eu sempre sou executado!');
}