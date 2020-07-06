import outsideClick from './outside-click.js';

export default class MenuMobile {
  constructor(dataButton, dataList, events) {
    this.menuButton = document.querySelector(dataButton);
    this.menuList = document.querySelector(dataList);
    this.activeClass = 'active';

    if (events === undefined) {
      this.eventos = ['click', 'touchstart'];
    } else {
      this.eventos = events;
    }

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault();
    this.menuButton.classList.add(this.activeClass);
    this.menuList.classList.add(this.activeClass);
    outsideClick(this.menuList, this.eventos, () => {
      this.menuButton.classList.remove(this.activeClass);
      this.menuList.classList.remove(this.activeClass);
    });
  }

  addEventMenu() {
    this.eventos.forEach((evento) => {
      this.menuButton.addEventListener(evento, this.openMenu);
    });
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addEventMenu();
    }
    return this;
  }
}
