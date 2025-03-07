
var minInputElement = document.querySelector('#min-input');
var maxInputElement = document.querySelector('#max-input');
var outputElement = document.querySelector('#output');

function doTheThing() {
  var minValue = parseInt(minInputElement.value);
  var maxValue = parseInt(maxInputElement.value);

  var randomNumber = getRandomIntInclusive(minValue, maxValue);
  // var randomNumber = getRandomIntInclusive(5, 10);

  console.log('Random Number: ' + randomNumber);

  outputElement.innerHTML = randomNumber;
}

function getRandomIntInclusive(min, max) {
  // min = inclusive, max = inclusive
  return Math.floor(Math.random() * (max - min + 1) + min);
}
