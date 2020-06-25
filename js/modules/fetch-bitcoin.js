export default function fetchBitcoin() {
  fetch('https://blockchain.info/ticker').then((response) => response.json()).then((json) => {
    console.log(json.BRL.sell);
    const bitcoin = document.querySelector('.btc-preco');
    bitcoin.innerText = (1000 / json.BRL.sell).toFixed(4);
  }).catch((erro) => {
    console.log(erro);
  });
}

// https://blockchain.info/ticker
