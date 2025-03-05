
var thingyElement = document.querySelector('#thingy');

function doTheThing() {
  var randomNumber = getRandomIntInclusive(1, 100);

  console.log('Random Number: ' + randomNumber);

  thingyElement.innerHTML = randomNumber;
}

function getRandomIntInclusive(min, max) {
  // min = inclusive, max = inclusive
  return Math.floor(Math.random() * (max - min + 1) + min);
}
