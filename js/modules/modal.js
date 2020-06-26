export default class Modal {
  constructor(elementAbrir, elementFechar, elementContainer) {
    this.botaoAbrir = document.querySelector(elementAbrir);
    this.botaoFechar = document.querySelector(elementFechar);
    this.containerModal = document.querySelector(elementContainer);

    // bind this ao call back para fazer referencia ao objeto

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  // ativa o modal
  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // clique fora fecha modal
  cliqueForaModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
  }

  // adiciona eventos ao elementos do modal
  addEventModal() {
    this.botaoAbrir.addEventListener('click', this.eventToggleModal);
    this.botaoFechar.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.cliqueForaModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addEventModal();
    }
    return this;
  }
}
