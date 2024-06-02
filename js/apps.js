let snreApp = document.querySelector('.snre');

function openSNRE() {
  if (snreApp.style.display === 'none') {
    closeOtherApps();
    snreApp.style.display = 'block';
  } else  {
    snreApp.style.display = 'none';
  }
}

function closeOtherApps() {
  snreApp.style.display = 'none';
}