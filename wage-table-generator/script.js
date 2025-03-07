var WORK_HOURS_PER_DAY = 8;
var WORKDAYS_PER_WEEK = 5;
var WEEKS_PER_MONTH = 52;

var outputElement = document.querySelector('#output');

function reset() {
  outputElement.innerHTML = '';
}

function generate() {
  for (var i = 5; i <= 100; i += 5) {
    var earningRate = i;

    var dailyEarnings = earningRate * WORK_HOURS_PER_DAY;
    var weeklyEarnings = dailyEarnings * WORKDAYS_PER_WEEK;
    var monthlyEarnings = weeklyEarnings * 4;
    var annualEarnings = weeklyEarnings * WEEKS_PER_MONTH;

    outputElement.insertAdjacentHTML('beforeend', `
      <tr>
        <td>$${earningRate}</td>
        <td>$${dailyEarnings}</td>
        <td>$${weeklyEarnings}</td>
        <td>$${weeklyEarnings * 2}</td>
        <td>$${monthlyEarnings}</td>
        <td>$${annualEarnings / 4}</td>
        <td>$${annualEarnings / 2}</td>
        <td>$${annualEarnings}</td>
      </tr>
    `);
  }
}
