export default function iniciaAccordion() {
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
  const classeAtivo = 'ativo';
  function ativaAccordion() {
    this.classList.toggle(classeAtivo);
    this.nextElementSibling.classList.toggle(classeAtivo);
  }
  if (accordionList.length) {
    accordionList[0].classList.add(classeAtivo);
    accordionList[0].nextElementSibling.classList.add(classeAtivo);

    accordionList.forEach((item) => {
      item.addEventListener('click', ativaAccordion);
    });
  }
}
