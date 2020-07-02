export default function fetchBitcoin(url, target) {
  fetch(url).then((response) => response.json()).then((json) => {
    const bitcoin = document.querySelector(target);
    bitcoin.innerText = (1000 / json.BRL.sell).toFixed(4);
  }).catch((erro) => {
    console.log(erro);
  });
}

// https://blockchain.info/ticker
