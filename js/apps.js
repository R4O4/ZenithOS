let textedit = document.querySelector('.textedit');

function openApp(app) {
  if (document.getElementsByClassName(app)[0].style.display === 'none') {
    closeOtherApps();
    document.getElementsByClassName(app)[0].style.display = 'block';
  } else {
    document.getElementsByClassName(app)[0].style.display = 'none';
  }
}

function closeOtherApps() {
  textedit.style.display = 'none';
}