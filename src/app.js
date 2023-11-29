/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //Variable corazón
  var corazon = '<i class="fas fa-heart fa-5x"></i>';
  //Variable diamante
  var diamante = '<i class="fas fa-diamond fa-5x"></i>';
  //Variable pica
  var pica =
    '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-suit-spade-fill" viewBox="0 0 16 16"> \
                        <path d="M7.184 11.246A3.5 3.5 0 0 1 1 9c0-1.602 1.14-2.633 2.66-4.008C4.986 3.792 6.602 2.33 8 0c1.398 2.33 3.014 3.792 4.34 4.992C13.86 6.367 15 7.398 15 9a3.5 3.5 0 0 1-6.184 2.246 19.92 19.92 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a19.919 19.919 0 0 0 1.582-2.907" /> \
                      </svg>';

  // Array con las variables
  var iconsArray = [corazon, diamante, pica];

  //Variable para contenido de carta
  var carta = [
    '<h1 class="text-center text-dark">A</h1>',
    '<h1 class="text-center text-dark">2</h1>',
    '<h1 class="text-center text-dark">3</h1>',
    '<h1 class="text-center text-dark">4</h1>',
    '<h1 class="text-center text-dark">5</h1>',
    '<h1 class="text-center text-dark">6</h1>',
    '<h1 class="text-center text-dark">7</h1>',
    '<h1 class="text-center text-dark">8</h1>',
    '<h1 class="text-center text-dark">9</h1>',
    '<h1 class="text-center text-dark">10</h1>',
    '<h1 class="text-center text-dark">Q</h1>',
    '<h1 class="text-center text-dark">K</h1>'
  ];

  //Randomizar iconos

  var random1 = Math.floor(Math.random(iconsArray + 1) * iconsArray.length);
  var random2 = Math.floor(Math.random(carta + 1) * carta.length);

  console.log(random2);
};
