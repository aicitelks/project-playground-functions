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
  let resultado = ultimoItem + `, ` + primeiroItem;
  return resultado;
}
 //let array = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
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
// console.log(footballPoints(14, 8));

// Desafio 6
function highestCount(arrayNumerico) {
  let aux = 0;
  let maiorNum = 0;
  let contador = 0;

  for (let i = 0; i < arrayNumerico.length; i += 1) {
    aux = arrayNumerico[i];
    for (let i of arrayNumerico) {
        if (aux < i) {
            maiorNum = i;
        }
    }
  }
  return maiorNum;
}

let arrayNumerico = [0, 9, 4, 1];
let resultado = highestCount(arrayNumerico);
console.log(resultado);
//console.log(highestCount(arrayNumerico));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // É a distância do gato em relação ao rato
  let posicaoCat1 = mouse - cat1;
  let posicaoCat2 = mouse - cat2;
  let retorno = '';

  if (posicaoCat1 > posicaoCat2) {
    retorno = 'cat1';
  } else if (posicaoCat1 < posicaoCat2) {
    retorno = 'cat2';
  } else if ((cat1 === mouse ) && (cat2 === mouse)) {
    retorno = 'os gatos trombam e o rato foge';
  }
  return retorno;
}
console.log(catAndMouse(1,0,2));

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
