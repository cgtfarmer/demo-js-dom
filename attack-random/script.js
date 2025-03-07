var healthPercentageElement = document.querySelector('#health-percentage');
var healthBarElement = document.querySelector('#health-bar');

function doTheThing() {
  var randomAttackDamage = getRandomIntInclusive(0, 15);

  console.log('Random attack dmg: ' + randomAttackDamage);

  var currentHealthBarValue = healthBarElement.value;

  console.log('Current health bar value: ' + currentHealthBarValue);

  var newHealthBarValue = (currentHealthBarValue - randomAttackDamage);

  if (newHealthBarValue <= 0) {
    console.log('Health is empty');

    newHealthBarValue = 0;
  }

  healthBarElement.value = newHealthBarValue;
  healthPercentageElement.innerHTML = newHealthBarValue;
}

function getRandomIntInclusive(min, max) {
  // min = inclusive, max = inclusive
  return Math.floor(Math.random() * (max - min + 1) + min);
}
