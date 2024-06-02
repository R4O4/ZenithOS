let closeWindow = document.querySelector('#close-window');
let minimizeWindow = document.querySelector('#minimize-window');
let maximizeWindow = document.querySelector('#maximize-window');
let appWindow = document.querySelector('.app-window');

closeWindow.addEventListener('click', () => {
  appWindow.style.display = 'none';
});

minimizeWindow.addEventListener('click', () => {
  appWindow.style.top = "10%";
  appWindow.style.left = "20%";
  appWindow.style.right = "20%";
  appWindow.style.bottom = "10%";
});

maximizeWindow.addEventListener('click', () => {
  appWindow.style.top = "5px";
  appWindow.style.left = "5px";
  appWindow.style.right = "5px";
  appWindow.style.bottom = "5px";
});
