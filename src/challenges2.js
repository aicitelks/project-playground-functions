// Desafio 10
function techList(arrayDeNomesTecnologias, name) {
  let objeto = {};
  let lista = [];

  if (arrayDeNomesTecnologias.length != 0){
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
function generatePhoneNumber() {
  // seu código aqui
}

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
