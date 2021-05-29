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

} //function(generatePhoneNumber)
let numeros = [5, 2, 8, 1, 5, 3, 7, 2, 8, 9, 0];
console.log(generatePhoneNumber(numeros));



// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
