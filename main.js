'use strict';

// CONSEGUIR EL NÚMERO ALEATORIO

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

let result = getRandomNumber(100);
document.addEventListener('DOMContentLoaded', getRandomNumber);
console.log(result);

// PREVENT DEFAULT FORMULARIO

const form = document.querySelector('form');
function stopDefAction(event) {
  event.preventDefault();
}
form.addEventListener('click', stopDefAction);

// COMPARAR NÚMEROS CON EL ALEATORIO

const button = document.querySelector('.js-btn');
let number = document.querySelector('.js-number');

function showClues() {
  const clue = document.querySelector('.js-clue');

  if (number.value > result) {
    clue.innerHTML = 'Demasiado alto';
  } else if (number.value < result) {
    clue.innerHTML = 'Demasiado bajo';
  } else if (parseInt(number.value) === result) {
    clue.innerHTML = 'Has ganado campeona!!!';
  }
   else (number.value > 100 || number.value < 1 ) {
      clue.innerHTML = 'El número debe estar entre 1 y 100.';
  }
}

// NÚMERO DE INTENTOS
function showTries() {
  const tries = document.querySelector('.js-tries');
  let attemps = 0;

  if (attemps > 0) {
    attemps = attemps + 1;
    tries.innerHTML = `Número de intentos = ${attemps}`;
  }
}

button.addEventListener('click', showClues);
// button.addEventListener('click', showTries);
