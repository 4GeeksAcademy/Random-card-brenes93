import "./style.css";
import "bootstrap";

function generarCartaAleatoria() {
  let palos = ["corazon", "pica", "trebol", "diamante"];
  let valores = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let simbolosPalos = {
    corazon: "♥",
    pica: "♠",
    trebol: "♣",
    diamante: "♦"
  };

  let randomPalos = palos[Math.floor(Math.random() * palos.length)];

  let randomValores = valores[Math.floor(Math.random() * valores.length)];

  let topCard = document.getElementById("top-card");
  let midCard = document.getElementById("mid-card");
  let bottomCard = document.getElementById("bottom-card");

  topCard.innerHTML = simbolosPalos[randomPalos];
  midCard.innerHTML = randomValores;
  bottomCard.innerHTML = simbolosPalos[randomPalos];

  topCard.classList.remove("corazon", "pica", "trebol", "diamante");
  midCard.classList.remove("corazon", "pica", "trebol", "diamante");
  bottomCard.classList.remove("corazon", "pica", "trebol", "diamante");

  topCard.classList.add(randomPalos);
  midCard.classList.add(randomPalos);
  bottomCard.classList.add(randomPalos);
}
window.onload = generarCartaAleatoria;
document
  .getElementById("generar-carta")
  .addEventListener("click", generarCartaAleatoria);
setInterval(generarCartaAleatoria, 10000);
function actualizarTamañoCarta() {
  let nuevoAncho = document.getElementById("width-input").value;
  let nuevoAlto = document.getElementById("height-input").value;
  let carta = document.querySelector(".card");
  carta.style.width = `${nuevoAncho}px`;
  carta.style.height = `${nuevoAlto}px`;
}

document
  .getElementById("width-input")
  .addEventListener("input", actualizarTamañoCarta);
document
  .getElementById("height-input")
  .addEventListener("input", actualizarTamañoCarta);
