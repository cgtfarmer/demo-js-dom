
var inputThingyElement = document.querySelector('#input-thingy');
var outputThingyElement = document.querySelector('#output-thingy');

function doTheThing() {
  var inputValue = inputThingyElement.value;

  console.log('Input Value is: ' + inputValue);

  outputThingyElement.innerHTML = 'Hello ' + inputValue + ', welcome home!';
}
