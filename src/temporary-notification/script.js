var NOTIFICATION_DURATION_MILLIS = 2000;

var motivationElement = document.querySelector('#motivation');

function doTheThing() {
  showNotification();

  window.setTimeout(hideNotification, NOTIFICATION_DURATION_MILLIS);
}

function showNotification() {
  motivationElement.hidden = false;
}

function hideNotification() {
  motivationElement.hidden = true;
}
