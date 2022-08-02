// concatenando arrays

const a1 = [ 1, 2, 3 ];
const a2 = [ 4, 5, 6 ];

const a3 = a1.concat(a2);

console.log(a3);

const a4 = a3.concat([7, 8, 9], 'Herberth')

console.log(a4);

// usando o rest operator / ou spread
// o rest operator funciona tanto para arrays quanto para objetos

const a5 = [...a3, 'Andrade'];

console.log(a5);

