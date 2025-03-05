var addInputElement = document.querySelector('#add-input');
var removeInputElement = document.querySelector('#remove-input');
var outputElement = document.querySelector('#output');

var items = [];

function reset() {
  items = [];

  clearInputs();

  render();
}

function clearInputs() {
  addInputElement.value = '';

  removeInputElement.value = '';
}

function addItem() {
  var newItem = addInputElement.value;

  if (!newItem) {
    console.log('Input is blank');
    return;
  }

  items.push(newItem);

  clearInputs();

  render();
}

function render() {
  outputElement.innerHTML = '';

  for (var i = 0; i < items.length; i++) {
    var item = items[i];

    outputElement.insertAdjacentHTML('beforeend', `
      <li>${item}</li>
    `);
  }
}

function removeItem() {
  var itemToRemove = removeInputElement.value;

  if (!itemToRemove) {
    console.log('Input is blank');
    return;
  }

  // Convert user input to 0-based indexing
  var itemIndexToRemove = (itemToRemove - 1);

  if (itemIndexToRemove < 0 || itemIndexToRemove >= items.length) {
    console.log('Invalid input value');
    return;
  }

  items.splice(itemIndexToRemove, 1);

  clearInputs();

  render();
}
