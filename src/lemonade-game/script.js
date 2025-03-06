var TICK_RATE_MILLIS = 250;
var LEMONADE_MACHINE_EARNING_PERIOD_MILLIS = 5000;
var LEMONADE_MACHINE_EARNINGS_PER_PERIOD = 5;
var LEMONADE_MACHINE_COST = 100;

var moneyDisplayElement = document.querySelector('#money-display');
var machineCountDisplayElement = document.querySelector('#machine-count-display');
var machineEarningsProgressElement = document.querySelector('#machine-earnings-progress');

var money = 0;
var lemonadeMachineCount = 0;
var lemonadeMachinePeriodCounterMillis = 0;

function main() {
  window.setInterval(tick, TICK_RATE_MILLIS);
}

function reset() {
  money = 0;
  lemonadeMachineCount = 0;
  lemonadeMachinePeriodCounterMillis = 0;
  machineEarningsProgressElement.value = 0;

  render();
}

function makeLemonade() {
  money += 5;
}

function buyLemonadeMachine() {
  if (money < LEMONADE_MACHINE_COST) {
    console.log('Insufficient funds');
    return;
  }

  money -= LEMONADE_MACHINE_COST;

  lemonadeMachineCount += 1;

  lemonadeMachinePeriodCounterMillis = 0;
}

function tick() {
  lemonadeMachinePeriodCounterMillis += TICK_RATE_MILLIS;

  render();

  if (lemonadeMachinePeriodCounterMillis >= LEMONADE_MACHINE_EARNING_PERIOD_MILLIS) {
    lemonadeMachinePeriodCounterMillis = 0;

    money += (lemonadeMachineCount * LEMONADE_MACHINE_EARNINGS_PER_PERIOD);
  }
}

function render() {
  moneyDisplayElement.innerHTML = money;

  machineCountDisplayElement.innerHTML = lemonadeMachineCount;

  if (lemonadeMachineCount < 1) return;

  machineEarningsProgressElement.value
    = (lemonadeMachinePeriodCounterMillis / LEMONADE_MACHINE_EARNING_PERIOD_MILLIS) * 100;
}

main();
