import Accordion from './modules/accordion.js';
import ScrollSuave from './modules/init-scroll-suave.js';
import TabNav from './modules/init-tab.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import iniciaAnimaScroll from './modules/init-anima-scroll.js';
import iniciaDropdownMenu from './modules/dropdown.js';
import iniciaMenuMobile from './modules/menu-mobile.js';
import iniciaFuncionamento from './modules/funcionamento.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';
import fetchAnimais from './modules/fetch-animais';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const toolTip = new Tooltip('[data-tooltip]');
toolTip.init();

iniciaAnimaScroll();
iniciaDropdownMenu();
iniciaMenuMobile();
iniciaFuncionamento();
fetchAnimais('../../animaisapi.json', '.numeros-grid');
fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');
