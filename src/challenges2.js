// Desafio 10 [OK]
function techList(arrayDeNomesTecnologias, name) {
  let objeto = {};
  let lista = [];

  if (arrayDeNomesTecnologias.length != 0) {
    // Criar um objeto para cada tecnologia
    for (i = 0; i < arrayDeNomesTecnologias.length; i += 1) {
      objeto = {
        tech: arrayDeNomesTecnologias[i],
        name: name
      }
      // inserir os objetos em uma nova lista
      lista.push(objeto);
    }
    /** 
    * Ordenar em ordem crescente a partir do campo tech do objeto
    * Source: https://pt.stackoverflow.com/a/46601
    * A função de ordenação, sort(), recebe uma função como parâmetro e esta por sua vez faz as comparações
    * para realizar a ordenação. 
    * O cálculo da ordenação é feito internamente e o retorno é da lista já ordenada
    */
    lista.sort(function (a, b) {
      if (a.tech < b.tech)
        return -1; // retorna negativo se for menor
      if (a.tech > b.tech)
        return 1; // retorna positivo se for maior
      return 0; // retorna 0 se as strigns forem iguais ou equivalentes
    });
    // Retornar a lista de objetos ordenada pelo campo tech
    return lista;

  } else {
    return 'Vazio!'
  }
}

// let nomesTecnologias = ["React", "Jest", "HTML", "CSS", "JavaScript"];
// let nomeProprio = 'Letícia Castro';
// console.log(techList(nomesTecnologias, nomeProprio));

// Desafio 11
function generatePhoneNumber(arrayNumerosFone) {
  let count = 0;

  // Receber um array e validar se tem 11 números ou mais
  if (arrayNumerosFone.length != 11) {
    return "Array com tamanho incorreto.";
  }

  // Verificar se as condições a seguir são verdadeiras: Se algum número é < 0, > 9 ou se repete 3x ou mais

  // Verificar se o número se repete no array
  for (let i = 0; i <= arrayNumerosFone.length; i += 1) {
    for (let j = i + 1; j < arrayNumerosFone.length; j += 1) {
      if (arrayNumerosFone[j] === arrayNumerosFone[i]) {
        count = count + 1;
      }
    }
    if (count < 3) {
      count = 0;
    }
  }

  // Faz a validação das três condições
  for (let i = 0; i < arrayNumerosFone.length; i += 1) {
    if (arrayNumerosFone[i] > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
    }
    if (count >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
    }
    if (arrayNumerosFone[i] < 0) {
        return 'não é possível gerar um número de telefone com esses valores';
    } 
  }
  return '(' + arrayNumerosFone[0] + arrayNumerosFone[1] + ') ' + arrayNumerosFone[2] + arrayNumerosFone[3] + arrayNumerosFone[4] + arrayNumerosFone[5] + arrayNumerosFone[6] + '-' + arrayNumerosFone[7] + arrayNumerosFone[8] + arrayNumerosFone[9] + arrayNumerosFone[10];

} // fecha function(generatePhoneNumber)

let numeros = [0, 2, 3, 4, 4, 2, 7, 8, 9, 9, 4];
// console.log(generatePhoneNumber(numeros));



// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let somaAB = lineA + lineB;
  let somaAC = lineA + lineC;
  let somaBC = lineB + lineC;
  let subAB = Math.abs(lineA - lineB);
  let subAC = Math.abs(lineA - lineC);
  let subBC = Math.abs(lineB - lineC);

  // (lineX > (a+b)) = false
  if (lineA > somaBC) {
    return false;
  }
  if (lineB > somaAC) {
    return false;
  }
  if (lineC > somaAB) {
    return false;
  }

  // (lineX < Math.abs(a-b)) = false
  if (lineA < subBC) {
    return false;
  }
  if (lineB < subAC) {
    return false;
  }
  if (lineC < subAB) {
    return false;
  }

  // ((lineX < (a+b)) && (x > Math.abs(a-b))) = true
  if ((lineA < somaBC) && (lineA > subBC)) {
    return true;
  }
  if ((lineB < somaAC) && lineB > subAC) {
    return true;
  }
  if ((lineC < somaAB) && (lineC > subAB)) {
    return true;
  }
}

// let lineA = 10;
// let lineB = 14;
// let lineC = 8;

// console.log(triangleCheck(lineA, lineB, lineC));

// Desafio 13
function hydrate(string) {
  // A expressão [^0-9] encontrar todos os caracteres que não estejam entre os colchetes
  // g: para que a pesquisa seja realizada em toda a string, não para no primeiro que encontrar
  // utilizamos o replace para substituir todos as letras encontradas por nada ('')
  // feito isso transforma-se tudo em inteiro usando o parseInt
  let obterNumeros = string.replace(/[^1-9]/g, '');
  let a = [];
  let soma = 0;

  for (let i of obterNumeros) {
    a.push(parseInt(i)); // transforma a string em inteiro e depois armazena no array
  }
  for (let i = 0; i < a.length; i++) {
    soma = soma + a[i];
  }
  
  if (soma === 1) {
    return '1 copo de água';
  } else {
    return soma + ' copos de água';
  }
}
console.log(hydrate('1 cachaça'));


module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
