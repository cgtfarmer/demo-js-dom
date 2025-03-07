var aInputElement = document.querySelector('#a-input');
var bInputElement = document.querySelector('#b-input');
var outputElement = document.querySelector('#result');

function add() {
  var a = parseInt(aInputElement.value);
  var b = parseInt(bInputElement.value);

  outputElement.innerHTML = (a + b);
}

function subtract() {
  var a = parseInt(aInputElement.value);
  var b = parseInt(bInputElement.value);

  outputElement.innerHTML = (a - b);
}

function multiply() {
  var a = parseInt(aInputElement.value);
  var b = parseInt(bInputElement.value);

  outputElement.innerHTML = (a * b);
}

function divide() {
  var a = parseInt(aInputElement.value);
  var b = parseInt(bInputElement.value);

  outputElement.innerHTML = (a / b);
}
