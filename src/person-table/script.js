var firstNameInputElement = document.querySelector('#first-name-input');
var lastNameInputElement = document.querySelector('#last-name-input');
var ageInputElement = document.querySelector('#age-input');
var weightInputElement = document.querySelector('#weight-input');
var removePersonInputElement = document.querySelector('#remove-input');
var outputElement = document.querySelector('#output');

var people = [];

// Uncomment for testing
var people = [
  { firstName: 'John', lastName: 'Doe', age: 31, weight: 183.7 },
  { firstName: 'Jane', lastName: 'Doe', age: 29, weight: 148.3 },
  { firstName: 'John', lastName: 'Smith', age: 46, weight: 213.4 },
  { firstName: 'Jane', lastName: 'Smith', age: 47, weight: 188.1 },
  { firstName: 'Chad', lastName: 'Smith', age: 25, weight: 191.6 }
];

function main() {
  render();
}

function reset() {
  people = [];

  clearInputs();

  render();
}

function clearInputs() {
  firstNameInputElement.value = '';
  lastNameInputElement.value = '';
  ageInputElement.value = '';
  weightInputElement.value = '';
  removePersonInputElement.value = '';
}

function addPerson() {
  var person = {
    firstName: firstNameInputElement.value,
    lastName: lastNameInputElement.value,
    age: ageInputElement.value,
    weight: weightInputElement.value
  }

  people.push(person);

  clearInputs();

  render();
}

function render() {
  outputElement.innerHTML = '';

  for (var i = 0; i < people.length; i++) {
    var person = people[i];

    outputElement.insertAdjacentHTML('beforeend', `
      <tr>
        <td>${i + 1}</td>
        <td>${person.firstName}</td>
        <td>${person.lastName}</td>
        <td>${person.age}</td>
        <td>${person.weight}</td>
      </tr>
    `);
  }
}

function removePerson() {
  var personToRemove = removePersonInputElement.value;

  if (!personToRemove) {
    console.log('Input is blank');
    return;
  }

  // Convert user input to 0-based indexing
  var personIndexToRemove = (personToRemove - 1);

  if (personIndexToRemove < 0 || personIndexToRemove >= people.length) {
    console.log('Invalid input value');
    return;
  }

  people.splice(personIndexToRemove, 1);

  clearInputs();

  render();
}

main();
