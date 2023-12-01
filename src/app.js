/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //Variable corazón
  var corazon = '<i class="fas fa-heart fa-5x" style="color: #ff0000;"></i>';
  //Variable diamante
  var diamante = '<i class="fas fa-diamond fa-5x" style="color: #ff0000;"></i>';
  //Variable pica
  var pica =
    '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-suit-spade-fill" viewBox="0 0 16 16"> \
                        <path d="M7.184 11.246A3.5 3.5 0 0 1 1 9c0-1.602 1.14-2.633 2.66-4.008C4.986 3.792 6.602 2.33 8 0c1.398 2.33 3.014 3.792 4.34 4.992C13.86 6.367 15 7.398 15 9a3.5 3.5 0 0 1-6.184 2.246 19.92 19.92 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a19.919 19.919 0 0 0 1.582-2.907" /> \
                      </svg>';
  //Variable trebol
  var trebol =
    '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-suit-club-fill" viewBox="0 0 16 16"> \
  <path d="M11.5 12.5a3.493 3.493 0 0 1-2.684-1.254 19.92 19.92 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a19.919 19.919 0 0 0 1.582-2.907 3.5 3.5 0 1 1-2.538-5.743 3.5 3.5 0 1 1 6.708 0A3.5 3.5 0 1 1 11.5 12.5"/> \
</svg>';

  // Array con las variables
  var iconos = [corazon, diamante, pica, trebol];

  //Array para contenido de carta
  var carta = [
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

  //Creo la variable que servirá para retornar el elemento random de la carta
  //Añado directamente el querySelector
  const cartaFinal = document.querySelector("#carta");
  const icons = document.querySelectorAll(".icono");
  const boton = document.querySelector("#ejecutar");

  //Función para generar card random
  var randomCard = () => {
    //Hago que los valores de los arrays devuelvan random
    var randomiconos = iconos[Math.floor(Math.random() * iconos.length)];
    var randomCarta = carta[Math.floor(Math.random() * carta.length)];

    //Utilizo textContent porque el array contiene texto plano
    cartaFinal.textContent = randomCarta;

    //Utilizo forEach ya que de esta forma puedo iterar la clase de html que asigno a varios divs
    icons.forEach(icon => {
      //Utilizo innerHTML porque interpreta el código HTML de las variables del array
      icon.innerHTML = randomiconos;
    });
  };

  // Asocio el evento click con el id ejecutar que tiene el botón en el index
  boton.addEventListener("click", randomCard);
};
