var healthPercentageElement = document.querySelector('#health-percentage');
var healthBarElement = document.querySelector('#health-bar');

function doTheThing() {
  var currentHealthBarValue = healthBarElement.value;

  console.log('Current health bar value: ' + currentHealthBarValue);

  var newHealthBarValue = (currentHealthBarValue - 10);

  if (newHealthBarValue <= 0) {
    console.log('Health is empty');

    newHealthBarValue = 0;
  }

  healthBarElement.value = newHealthBarValue;
  healthPercentageElement.innerHTML = newHealthBarValue;
}
