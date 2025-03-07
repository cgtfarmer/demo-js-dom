const textInput = document.querySelector("#input");
const winMsg = document.querySelector("#win");
const higherMsg = document.querySelector("#higher");
const lowerMsg = document.querySelector("#lower");

let random = null;

function main() {
  random = getRandomInt(1, 100);
  console.log(random);
}

function reset() {
  textInput.value = null;
  hideMessages();
  random = getRandomInt(1, 100);
  console.log(random);
}

function guess() {
  hideMessages();

  if (textInput.value < random) {
    higherMsg.hidden = false;
  } else if (textInput.value > random) {
    lowerMsg.hidden = false;
  } else {
    winMsg.hidden = false;
  }
}

function hideMessages() {
  winMsg.hidden = true;
  higherMsg.hidden = true;
  lowerMsg.hidden = true;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  // The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min + 1) + min);
}

main();

