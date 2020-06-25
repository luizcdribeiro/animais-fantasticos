export default class Accordion {
  constructor(element) {
    this.accordionList = document.querySelectorAll(element);
    this.classeAtivo = 'ativo';
  }

  toggleAccordion(item) {
    item.classList.toggle(this.classeAtivo);
    item.nextElementSibling.classList.toggle(this.classeAtivo);
  }

  // adiciona eventos ao accordion
  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => { this.toggleAccordion(item); });
    });
  }

  // iniciar funcao
  init() {
    if (this.accordionList.length) {
      // ativa o primeito item
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
    return this;
  }
}
