var outputElement = document.querySelector('#output');

var currentResults = undefined;
var currentInputValue = '';
var lastOperator = undefined;

function inputValue(value) {
  currentInputValue += value;

  outputElement.innerHTML = currentInputValue;
}

function equals() {
  console.log(`currentResults=${currentResults}, lastOperator=${lastOperator}, currentInputValue=${currentInputValue}`);

  switch(lastOperator) {
    case '+':
      currentResults += parseFloat(currentInputValue);
      break;
    case '-':
      currentResults -= parseFloat(currentInputValue);
      break;
    case '*':
      currentResults *= parseFloat(currentInputValue);
      break;
    case '/':
      currentResults /= parseFloat(currentInputValue);
      break;
    default:
      console.log('Invalid operator');
  }

  console.log(`Update: currentResults=${currentResults}`);

  lastOperator = undefined;

  currentInputValue = '';
  outputElement.innerHTML = currentResults;
}

function add() {
  if (currentResults == undefined) {
    currentResults = parseFloat(currentInputValue);
  }

  lastOperator = '+';

  currentInputValue = '';
  outputElement.innerHTML = '';
}

function subtract() {
  if (currentResults == undefined) {
    currentResults = parseFloat(currentInputValue);
  }

  lastOperator = '-';

  currentInputValue = '';
  outputElement.innerHTML = '';
}

function multiply() {
  if (currentResults == undefined) {
    currentResults = parseFloat(currentInputValue);
  }

  lastOperator = '*';

  currentInputValue = '';
  outputElement.innerHTML = '';
}

function divide() {
  if (currentResults == undefined) {
    currentResults = parseFloat(currentInputValue);
  }

  lastOperator = '/';

  currentInputValue = '';
  outputElement.innerHTML = '';
}

function reset() {
  currentResults = undefined;
  currentInputValue = '';
  lastOperator = undefined;
  outputElement.innerHTML = '';
}
