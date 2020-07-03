import Accordion from './modules/accordion.js';
import ScrollSuave from './modules/init-scroll-suave.js';
import TabNav from './modules/init-tab.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import AnimaScroll from './modules/init-anima-scroll.js';
import DropdownMenu from './modules/dropdown.js';
import MenuMobile from './modules/menu-mobile.js';
import Funcionamento from './modules/funcionamento.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';
import fetchAnimais from './modules/fetch-animais';
import SlideNav from './modules/slide';

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

const animaScroll = new AnimaScroll('[data-anime="scroll"]');
animaScroll.initScroll();

const dropdownMenu = new DropdownMenu('[data-dropdown]');
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="lista"]');
menuMobile.init();

const funcionamento = new Funcionamento('[data-semana]', 'aberto');
funcionamento.init();

fetchAnimais('./animaisapi.json', '.numeros-grid');
fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');

const slide = new SlideNav('.slide', '.wrapper');
slide.init();
slide.addControl('.custom-controls');
