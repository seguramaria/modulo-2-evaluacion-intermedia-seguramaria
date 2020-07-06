'use strict';

// CONSEGUIR EL NÚMERO ALEATORIO

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

let result = getRandomNumber(100);
console.log('Mi número aleatorio es ', result);

const button = document.querySelector('.js-btn');
let number = document.querySelector('.js-number');
let clue = document.querySelector('.js-clue');
const form = document.querySelector('form');

function handleSubmitBtn(event) {
  event.preventDefault();
  showClues();
  showTries();
}

// MOSTRAR PISTAS
function showClues() {
  let numberValue = parseInt(number.value);

  if (numberValue >= 1 && number.value <= 100) {
    if (numberValue > result) {
      clue.innerHTML = 'Demasiado alto';
    } else if (numberValue < result) {
      clue.innerHTML = 'Demasiado bajo';
    } else if (numberValue === result) {
      clue.innerHTML = 'Has ganado campeona!!!';
    } else {
      clue.innerHTML = 'El número debe estar entre 1 y 100.';
    }
  }
}

// NÚMERO DE INTENTOS
const tries = document.querySelector('.attempts');
console.log(tries);
let attempts = 0;
function showTries() {
  attempts += 1;
  tries.innerHTML = attempts;
}

button.addEventListener('click', handleSubmitBtn);

// COSAS A AÑADIR
// Añadir nuevos comentarios cuando el número es mayor que 100 o menor que 0.
// Gestionar cuando el usuario pulsa el botón y el input está vacío.
// Hacer que el input funcione cuando se pulsa la tecla intro.
// Añade un botón de reset que limpia la entrada, el contador, genera un nuevo número aleatorio para jugar de nuevo!
