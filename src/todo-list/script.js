var addInputElement = document.querySelector('#add-input');
var removePersonInputElement = document.querySelector('#remove-input');
var outputElement = document.querySelector('#output');

var people = [];

function reset() {
  people = [];

  clearInputs();

  render();
}

function clearInputs() {
  addInputElement.value = '';

  removePersonInputElement.value = '';
}

function addPerson() {
  var newItem = addInputElement.value;

  if (!newItem) {
    console.log('Input is blank');
    return;
  }

  people.push(newItem);

  clearInputs();

  render();
}

function render() {
  outputElement.innerHTML = '';

  for (var i = 0; i < people.length; i++) {
    var item = people[i];

    outputElement.insertAdjacentHTML('beforeend', `
      <li>${item}</li>
    `);
  }
}

function removePerson() {
  var itemToRemove = removePersonInputElement.value;

  if (!itemToRemove) {
    console.log('Input is blank');
    return;
  }

  // Convert user input to 0-based indexing
  var itemIndexToRemove = (itemToRemove - 1);

  if (itemIndexToRemove < 0 || itemIndexToRemove >= people.length) {
    console.log('Invalid input value');
    return;
  }

  people.splice(itemIndexToRemove, 1);

  clearInputs();

  render();
}
