// Desafio 1
function compareTrue(valor1, valor2) {
  let resultado;

  if ((valor1 === true) && (valor2 === true)) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}
// let retorno = compareTrue(true, false);
// console.log(retorno);

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
// console.log(calcArea(51,1));

// Desafio 3
function splitSentence(frase) {
  let arrayStrings = frase.split(' ');
  return arrayStrings;
}
// console.log(splitSentence('Tu te tornas eternamente responsável por aquilo que cativas. (O_Pequeno_Príncipe)'));

// Desafio 4
function concatName(arrayCont) {
  let primeiroItem;
  let ultimoItem;

  for (let i = 0; i < arrayCont.length; i += 1) {
    if (i === 0) {
      primeiroItem = arrayCont[i];
    } else if (i === arrayCont.length -1) {
      ultimoItem = arrayCont[i];
    }
  }
  let resultado = ultimoItem + ', ' + primeiroItem;
  return resultado;
}
// let array = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
// console.log(concatName(array));

// Desafio 5
function footballPoints(wins, ties) {
  let qtdPontos = 0;
  let vitoria = 3;
  let empate = 1;

  vitoria *= wins;
  empate *= ties;
  qtdPontos = vitoria + empate;

  return qtdPontos;
}
//console.log(footballPoints(14, 8));

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
