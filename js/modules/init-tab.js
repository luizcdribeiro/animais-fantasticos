export default class Tabnav {
  constructor(menu, contents) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(contents);
    this.ativaClass = 'ativo';
  }

  // ativa o tab de acordo com o index da mesma
  ativaTab(index) {
    this.tabContent.forEach((content) => {
      content.classList.remove(this.ativaClass);
    });
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.ativaClass, direcao);
  }

  // adiciona evento nas tabs
  addEventTab() {
    this.tabMenu.forEach((item, index) => {
      item.addEventListener('click', () => {
        this.ativaTab(index);
      });
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      // ativa o primeiro tab
      this.ativaTab(0);
      this.addEventTab();
    }
    return this;
  }
}
