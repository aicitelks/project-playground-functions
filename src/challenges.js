// Desafio 1 [OK]
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

// Desafio 2 [OK]
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
// console.log(calcArea(51,1));

// Desafio 3 [OK]
function splitSentence(frase) {
  let arrayStrings = frase.split(' ');
  return arrayStrings;
}
// console.log(splitSentence('Tu te tornas eternamente responsável por aquilo que cativas. (O_Pequeno_Príncipe)'));

// Desafio 4 [OK]
function concatName(arrayCont) {
  let primeiroItem;
  let ultimoItem;

  for (let i = 0; i < arrayCont.length; i += 1) {
    if (i === 0) {
      primeiroItem = arrayCont[i];
    } else if (i === arrayCont.length - 1) {
      ultimoItem = arrayCont[i];
    }
  }
  let resultado = ultimoItem + ', ' + primeiroItem;
  return resultado;
}
// let array = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
// console.log(concatName(array));

// Desafio 5 [OK]
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

// Desafio 6 - [OK]
function highestCount(arrayNumerico) {
  let count = 0;
/** 
 * Source: https://pt.stackoverflow.com/a/287685 
 * 'max()' é uma função do Math, que aceita vários argumentos. Para ser usada com array é necessário usar o 'spread (...)'
*/
  let maiorNum = Math.max(...arrayNumerico);
  for (let i of arrayNumerico) {
    if (maiorNum === i) {
      count += 1;
    }
  }
  return count;
}
// let arrayNumerico = [0, 9, 9];
// console.log(highestCount(arrayNumerico));

// Desafio 7 [OK]
function catAndMouse(mouse, cat1, cat2) {
  // É a distância do gato em relação ao rato
  let posicaoCat1 = mouse - cat1;
  let posicaoCat2 = mouse - cat2;
  let retorno = '';

/**
* Com a dica do Laison Gabriel, sobre o Math.abs(), consegui resolver a terceira validação. 
* Essa função retorna o valor absoluto, ignorando o sinal, assim é possível fazer a comparação de igualdade. 
* A ordem desse código, também é fundamental para obter o resultado correto.
*/

  if ((Math.abs(posicaoCat1) === mouse) && (Math.abs(posicaoCat2) === mouse)) {
    retorno = 'os gatos trombam e o rato foge';
  } else if (posicaoCat1 > posicaoCat2) {
    retorno = 'cat1';
  } else if (posicaoCat1 < posicaoCat2) {
    retorno = 'cat2';
  }
  return retorno;
}
// console.log(catAndMouse(10, 4, 22));

// Desafio 8 [OK]
function fizzBuzz(arrayFizzBuzz) {
  let arrayFizzBuzzStrings = [];
  let divisaoPor3 = 0;
  let divisaoPor5 = 0;

  for (let i = 0; i < arrayFizzBuzz.length; i += 1) {

    let divisivelPor3e5 = false;
    divisaoPor3 = (arrayFizzBuzz[i] % 3);
    divisaoPor5 = (arrayFizzBuzz[i] % 5);

    if ((divisaoPor3 === 0) && (divisaoPor5 === 0)) {
      arrayFizzBuzzStrings.push('fizzBuzz');
      divisivelPor3e5 = true;
    }

    if (divisivelPor3e5 === false) {
      if (divisaoPor3 === 0) {
        arrayFizzBuzzStrings.push('fizz');
      }
      if (divisaoPor5 === 0) {
        arrayFizzBuzzStrings.push('buzz');
      }
    }

    if ((divisaoPor3 != 0) && (divisaoPor5 != 0)) {
      arrayFizzBuzzStrings.push('bug!');
    }
  }
  return arrayFizzBuzzStrings;
}
// let arrayFizzBuzzNumerico = [2, 15, 7, 9, 45];
// console.log(fizzBuzz(arrayFizzBuzzNumerico));

// Desafio 9
// Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace
function encode(stringCriptografada) {
  palavra = stringCriptografada.replace(/a/g, 1);
  palavra = palavra.replace(/e/g, 2);
  palavra = palavra.replace(/i/g, 3);
  palavra = palavra.replace(/o/g, 4);
  palavra = palavra.replace(/u/g, 5);
  return palavra;
}
// console.log(encode('a e i o u'));

function decode(stringCriptografada) {
  palavra = stringCriptografada.replace(/1/g, 'a');
  palavra = palavra.replace(/2/g, 'e');
  palavra = palavra.replace(/3/g, 'i');
  palavra = palavra.replace(/4/g, 'o');
  palavra = palavra.replace(/5/g, 'u');
  return palavra;
}
// console.log(decode('g4 Tryb2!'));





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
