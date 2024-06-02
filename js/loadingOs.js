let powerBtn = document.querySelector('.power-btn');
let progress = document.querySelector('.progress');
let progressBar = document.querySelector('.progress-bar');
let checkbox = document.querySelector('#checkbox');
let loadingOs = document.querySelector('.loading-os');

powerBtn.addEventListener('click', () => {
  progress.classList.add('progress-animated');
  setTimeout(() => {
    progressBar.style.display = 'none';
    checkbox.disabled = true;
    document.location.href = "src/ZenithOS/login.php";
  }, 1500);
});



