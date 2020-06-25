import outsideClick from './outside-click.js';

export default function iniciaMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="lista"]');
  const eventos = ['click', 'touchstart'];

  function openMenu() {
    menuButton.classList.add('active');
    menuList.classList.add('active');
    outsideClick(menuList, eventos, () => {
      menuButton.classList.remove('active');
      menuList.classList.remove('active');
    });
  }
  if (menuButton) {
    eventos.forEach((evento) => {
      menuButton.addEventListener(evento, openMenu);
    });
  }
}
