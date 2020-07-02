import outsideClick from './outside-click.js';

export default class DropdownMenu {
  constructor(elementData, events) {
    this.dropdownMenus = document.querySelectorAll(elementData);
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
    this.activeClass = 'active';
    if (events === undefined) {
      this.events = ['touchstart', 'click'];
    } else {
      this.events = events;
    }
  }

  // ativa o dropdown menu e ativa a funçao que observa o clique fora dele
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  // adiciona eventos ao dropdown menu
  addDropdownMenuEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenuEvent();
    }
    return this;
  }
}
