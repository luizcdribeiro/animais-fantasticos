import iniciaAccordion from './modules/accordion.js';
import iniciaTabNav from './modules/init-tab.js';
import ScrollSuave from './modules/init-scroll-suave.js';
import iniciaAnimaScroll from './modules/init-anima-scroll.js';
import iniciaModal from './modules/modal.js';
import iniciaTooltip from './modules/tooltip.js';
import iniciaDropdownMenu from './modules/dropdown.js';
import iniciaMenuMobile from './modules/menu-mobile.js';
import iniciaAnimaNumeros from './modules/anima-numeros.js';
import iniciaFuncionamento from './modules/funcionamento.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

iniciaAccordion();
iniciaTabNav();
iniciaAnimaScroll();
iniciaModal();
iniciaTooltip();
iniciaDropdownMenu();
iniciaMenuMobile();
iniciaAnimaNumeros();
iniciaFuncionamento();
fetchBitcoin();
