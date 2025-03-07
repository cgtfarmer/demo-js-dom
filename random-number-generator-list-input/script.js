var minInputElement = document.querySelector('#min-input');
var maxInputElement = document.querySelector('#max-input');
var quantityInputElement = document.querySelector('#quantity-input');
var outputElement = document.querySelector('#output');

function clearValues() {
  console.log('Clearing values...');

  outputElement.innerHTML = '';
}

function generate() {
  var minValue = parseInt(minInputElement.value);
  var maxValue = parseInt(maxInputElement.value);
  var quantityValue = parseInt(quantityInputElement.value);

  for (var i = 0; i < quantityValue; i++) {
    var randomNumber = getRandomIntInclusive(minValue, maxValue);

    console.log('Random Number: ' + randomNumber);

    outputElement.insertAdjacentHTML('beforeend', `
      <li>${randomNumber}</li>
    `);
  }
}

function getRandomIntInclusive(min, max) {
  // min = inclusive, max = inclusive
  return Math.floor(Math.random() * (max - min + 1) + min);
}
