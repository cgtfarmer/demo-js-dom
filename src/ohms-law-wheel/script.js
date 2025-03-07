var eInputElement = document.querySelector('#e-input');
var rInputElement = document.querySelector('#r-input');
var pInputElement = document.querySelector('#p-input');
var iInputElement = document.querySelector('#i-input');
var outputElement = document.querySelector('#output');

function reset() {
  eInputElement.value = '';
  rInputElement.value = '';
  pInputElement.value = '';
  iInputElement.value = '';
  outputElement.innerHTML = '';
}

function formula1() {
  var result = Math.sqrt(pInputElement.value * rInputElement.value);

  outputElement.innerHTML = result;
}

function formula2() {
  var result = pInputElement.value / iInputElement.value;

  outputElement.innerHTML = result;
}

function formula3() {
  var result = iInputElement.value * rInputElement.value;

  outputElement.innerHTML = result;
}

function formula4() {
  var result = eInputElement.value / iInputElement.value;

  outputElement.innerHTML = result;
}

function formula5() {
  var result = Math.pow(eInputElement.value, 2) / pInputElement.value;

  outputElement.innerHTML = result;
}

function formula6() {
  var result = pInputElement.value / Math.pow(iInputElement.value, 2);

  outputElement.innerHTML = result;
}

function formula7() {
  var result = Math.pow(eInputElement.value, 2) / rInputElement.value;

  outputElement.innerHTML = result;
}

function formula8() {
  var result = Math.pow(iInputElement.value, 2) * rInputElement.value;

  outputElement.innerHTML = result;
}

function formula9() {
  var result = eInputElement.value * iInputElement.value;

  outputElement.innerHTML = result;
}

function formula10() {
  var result = eInputElement.value / rInputElement.value;

  outputElement.innerHTML = result;
}

function formula11() {
  var result = pInputElement.value / eInputElement.value;

  outputElement.innerHTML = result;
}

function formula12() {
  var result = Math.sqrt(pInputElement.value / rInputElement.value);

  outputElement.innerHTML = result;
}
