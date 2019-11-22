var greeting = document.getElementById('greeting');
var closeButton = document.getElementById('greeting-close');

function dismissGreeting() {
  greeting.style.display = 'none';
}

closeButton.addEventListener('click', dismissGreeting);
