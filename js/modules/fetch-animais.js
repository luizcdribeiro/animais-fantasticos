import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {
  const numerosGrid = document.querySelector(target);
  // cria a div contendo informaçoes com o total de animais
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  // preenche cada animal no DOM
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  // anima os numeros de cada animal
  function animaisNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros');
    animaNumeros.init();
  }

  // puxa os animais através de um arquivo json e cria cada animal utilizando create animal
  async function criarAnimais() {
    try {
      // fetch e espera a resposta
      const animaisResponse = await fetch(url);
      // transforma a resposta em json
      const animaisJSON = await animaisResponse.json();

      // apos ativacao do json, preenche os animais e anima os numeros
      animaisJSON.forEach((animal) => preencherAnimais(animal));
      animaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  return criarAnimais();
}
