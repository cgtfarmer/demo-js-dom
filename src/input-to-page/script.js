
var inputThingyElement = document.querySelector('#input-thingy');
var outputThingyElement = document.querySelector('#output-thingy');

function doTheThing() {
  console.log('Meow');

  var inputValue = inputThingyElement.value;

  console.log('Input Value is: ' + inputValue);

  outputThingyElement.innerHTML = inputValue;
}
