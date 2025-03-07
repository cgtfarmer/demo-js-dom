var aInputElement = document.querySelector('#a-input');
var bInputElement = document.querySelector('#b-input');
var cInputElement = document.querySelector('#c-input');
var positiveResultElement = document.querySelector('#positive-result');
var negativeResultElement = document.querySelector('#negative-result');

function reset() {
  aInputElement.value = '';
  bInputElement.value = '';
  cInputElement.value = '';
  negativeResultElement.innerHTML = '';
  positiveResultElement.innerHTML = '';
}

function calculate() {
  var a = aInputElement.value;
  var b = bInputElement.value;
  var c = cInputElement.value;

  var positiveResult = quadraticFormulaPositiveCalculation(a, b, c);

  var negativeResult = quadraticFormulaNegativeCalculation(a, b, c);

  positiveResultElement.innerHTML = positiveResult;

  negativeResultElement.innerHTML = negativeResult;
}

function quadraticFormulaPositiveCalculation(a, b, c) {
  var numerator = (b * -1) + Math.sqrt(Math.pow(b, 2) - (4 * a * c));

  var denominator = (2 * a);

  return (numerator / denominator);
}

function quadraticFormulaNegativeCalculation(a, b, c) {
  var numerator = (b * -1) - Math.sqrt(Math.pow(b, 2) - (4 * a * c));

  var denominator = (2 * a);

  return (numerator / denominator);
}
