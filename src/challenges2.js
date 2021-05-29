// Desafio 10
function techList(arrayDeNomesTecnologias, name) {
  let objeto = {};
  let lista = [];

  // Criar um objeto para cada tecnologia
  for (i = 0; i < arrayDeNomesTecnologias.length; i += 1) {    
    objeto = {
      tech: arrayDeNomesTecnologias[i],
      name: name
    }
    // inserir os objetos em uma nova lista
    lista.push(objeto);
  }
  // ordenar em ordem crescente a partir do campo tech do objeto
  
  // retornar a lista de obejtos ordana pelo campo tech
  return lista;

}

let nomesTecnologias = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
let nomeProprio = 'Letícia Castro';
console.log(techList(nomesTecnologias, nomeProprio));

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
