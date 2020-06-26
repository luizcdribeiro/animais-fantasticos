export default class AnimaNumeros {
  constructor(listNumeros, observerElement) {
    this.numeros = document.querySelectorAll(listNumeros);
    this.observerTarget = document.querySelector(observerElement);

    this.handleMutation = this.handleMutation.bind(this);
  }

  // recebe elemento do dom e incrementa a partir de 0 até o numero final
  static incrementarNumero(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  // ativa o incrementar numero e anima os numero
  animaNumeros() {
    this.numeros.forEach((numero) => {
      this.constructor.incrementarNumero(numero);
    });
  }

  // funcao que ocorre quando a mutacao ocorrer
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  // adiciona MutationObserver quando a classe ativo é adicionada ao element target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length || this.observerTarget) { this.addMutationObserver(); }
    return this;
  }
}
