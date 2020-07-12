'use strict';

// CONSEGUIR EL NÚMERO ALEATORIO

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);
console.log('Mi número aleatorio es ', randomNumber);

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
  let numberValue = number.value;
  numberValue = parseInt(numberValue);
  if (numberValue >= 1 && numberValue <= 100) {
    if (numberValue < randomNumber) {
      clue.innerHTML = 'Demasiado bajo.';
    } else if (numberValue > randomNumber) {
      clue.innerHTML = 'Demasiado alto.';
    } else if (numberValue === randomNumber) {
      clue.innerHTML = 'Has ganado campeona!!!';
    }
  } else {
    clue.innerHTML = 'El número debe estar entre 1 y 100';
  }
}

// NÚMERO DE INTENTOS
const tries = document.querySelector('.attempts');

let attempts = 0;
function showTries() {
  attempts += 1;
  tries.innerHTML = attempts;
}

button.addEventListener('click', handleSubmitBtn);
