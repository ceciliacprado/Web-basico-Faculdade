// EXEMPLOS DE APLICAÇÃO
// var, let, const, string, number, boolean,
// operadores ( +, -, *, /, %, ++, --)
var a = "Um texto";
console.log(a, typeof(a));
a = 10;
let b = 5;
console.log(a, b);
console.log(typeof(a), typeof(b));
console.log('a + b: ', (a + b));
console.log('a + b: ', ("0" + a + b)); //atenção
console.log('a + b: ', (a + "0" + b)); //atenção
console.log('a + b: ', (a + b + "0")); //atenção
console.log('a - b: ', (a - b));
console.log('a * b: ', (a * b));
console.log('a / b: ', (a / b));
console.log('a % b: ', (a % b));

// EXEMPLOS DE APLICAÇÃO
// var, let, const, string, number, boolean,
// operadores ( +, -, *, /, %, ++, --)
a = 10;
b = 5;
a++;
b--;
console.log('a: ', a, 'b: ', b);
console.log('a: ', a++, 'b: ', b--);
console.log('a: ', a, 'b: ', b);
console.log('a: ', ++a, 'b: ', --b);
console.log('a: ', a, 'b: ', b);

function altera() {
    let nome = document.getElementById('nome').value;
    console.log(nome);
    document.getElementById('tituloP').innerHTML = nome;
}