'use strict';

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

let result = getRandomNumber(100);
document.addEventListener('DOMContentLoaded', getRandomNumber);
console.log(result);
