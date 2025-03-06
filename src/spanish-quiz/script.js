var NOTIFICATION_DURATION_MILLIS = 1000;

var questionElement = document.querySelector('#question');
var answerInputElement = document.querySelector('#answer-input');
var scoreElement = document.querySelector('#score');
var correctMsgElement = document.querySelector('#correct-msg');
var incorrectMsgElement = document.querySelector('#incorrect-msg');

var currentCard = undefined;
var currentScore = undefined;

var flashCards = [
  { q: 'Casa', a: 'House' },
  { q: 'Gato', a: 'Cat' },
  { q: 'Perro', a: 'Dog' },
  { q: 'Mesa', a: 'Table' },
  { q: 'Silla', a: 'Chair' },
  { q: 'Libro', a: 'Book' },
  { q: 'Ventana', a: 'Window' },
  { q: 'Puerta', a: 'Door' },
  { q: 'Sol', a: 'Sun' },
  { q: 'Luna', a: 'Moon' },
  { q: 'Coche', a: 'Car' },
  { q: 'Calle', a: 'Street' },
  { q: 'Ciudad', a: 'City' },
  { q: 'Cielo', a: 'Sky' },
  { q: 'Mar', a: 'Sea' },
  { q: 'Flor', a: 'Flower' },
  { q: 'Árbol', a: 'Tree' },
  { q: 'Mano', a: 'Hand' },
  { q: 'Persona', a: 'Person' },
  { q: 'Pan', a: 'Bread' }
];

function main() {
  reset();
}

function reset() {
  currentScore = 0;
  answerInputElement.value = null;

  hideNotifications();

  currentCard = getRandomCard();
  renderState();
}

function getRandomCard() {
  var randomIndex = getRandomInt(0, flashCards.length);
  console.log('Random Index: ' + randomIndex);

  return flashCards[randomIndex];
}

function renderState() {
  questionElement.innerHTML = currentCard.q;
  scoreElement.innerHTML = currentScore;
}

function guess() {
  hideNotifications();

  if (!answerIsCorrect()) {
    handleIncorrectGuess();

    return;
  }

  handleCorrectGuess();
}

function handleCorrectGuess() {
  currentScore += 1;

  answerInputElement.value = null;

  correctMsgElement.hidden = false;
  setTimeout(hideNotifications, NOTIFICATION_DURATION_MILLIS);

  currentCard = getRandomCard();

  renderState();
}

function handleIncorrectGuess() {
  answerInputElement.value = null;

  incorrectMsgElement.hidden = false;

  setTimeout(hideNotifications, NOTIFICATION_DURATION_MILLIS);

  renderState();
}

function answerIsCorrect() {
  console.log('question=' + currentCard.q + ' answer=' + currentCard.a + ' userInput=' + answerInputElement.value);

  if (!answerInputElement.value) return false;

  var sanitizedInput = answerInputElement.value.toLowerCase();

  return (sanitizedInput == currentCard.a.toLowerCase());
}

function hideNotifications() {
  correctMsgElement.hidden = true;
  incorrectMsgElement.hidden = true;
}

function getRandomInt(min, max) {
  // min = inclusive, max = exclusive
  return Math.floor(Math.random() * (max - min)) + min;
}

main();
