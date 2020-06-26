import Accordion from './modules/accordion.js';
import ScrollSuave from './modules/init-scroll-suave.js';
import TabNav from './modules/init-tab.js';
import iniciaAnimaScroll from './modules/init-anima-scroll.js';
import Modal from './modules/modal.js';
import iniciaTooltip from './modules/tooltip.js';
import iniciaDropdownMenu from './modules/dropdown.js';
import iniciaMenuMobile from './modules/menu-mobile.js';
import iniciaAnimaNumeros from './modules/anima-numeros.js';
import iniciaFuncionamento from './modules/funcionamento.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

iniciaAnimaScroll();
iniciaTooltip();
iniciaDropdownMenu();
iniciaMenuMobile();
iniciaAnimaNumeros();
iniciaFuncionamento();
fetchBitcoin();
