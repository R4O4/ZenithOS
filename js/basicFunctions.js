// Variables
let homeContexteMenu = document.querySelector(".desktop-home");
let homeButton = document.querySelector(".zenithos-taskbar-left-app");
let powerButton = document.querySelector(".home-power-button");
// Event listener

// Disable right click
document.querySelector('body').oncontextmenu = function() {
  return false;
};
// Disable text selection
document.querySelector('body').onselectstart = function() {
  return false;
};
// Disable drag and drop
document.querySelector('body').ondragstart = function() {
  return false;
};
// Opening zenithOS context menu
document.querySelector('.zenithos-desktop-shortcut').addEventListener("rightclick", (event) => {
  openDesktopContextMenu();
});
// Opening home context menu
homeButton.addEventListener("click", (event) => {
  if (homeContexteMenu.style.display === "none") {
    homeContexteMenu.style.display = "flex";
  } else {
    homeContexteMenu.style.display = "none";
  }
});
// Power button
powerButton.addEventListener("click", (event) => {
  window.location.href = "../ZenithOS/logout.php";
});


// Force full screen
function forceFullScreen() {
  let elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

// Context menu
function openDesktopContextMenu() {
  console.log("Opening context menu");
}

// Check if the screen is too small
if (screen.width < 900) {
  window.location.href = "../ZenithOS/errors-death-screen/error.php?error=incompatible_device";
}
