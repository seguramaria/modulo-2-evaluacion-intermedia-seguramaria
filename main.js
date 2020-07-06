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
let numberValue = parseInt(number.value);

function showClues() {
  const clue = document.querySelector('.js-clue');
  // ESTO PARA LA EVALUACIÓN TENDRÁ QUE ESTAR EN UNA MISMA FUNCIÓN

  if (numberValue >= 100 || number.value <= 1) {
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

const tries = document.querySelector('.attempts');
let attempts = 0;

// NÚMERO DE INTENTOS
function showTries() {
  attempts = attempts + 1;
  tries.innerHTML = `Número de intentos = ${attemps}`;
}

button.addEventListener('click', showClues);
