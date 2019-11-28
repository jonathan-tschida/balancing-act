var greeting = document.getElementById('greeting');
var closeButton = document.getElementById('greeting-close');
var dashboardIcon = document.getElementById('dashboard-icon');
var walletIcon = document.getElementById('wallet-icon');
var profileIcon = document.getElementById('profile-icon');
var dashboard = document.getElementById('dashboard');

function dismissGreeting() {
  greeting.style.display = 'none';
}

function highlightDashboard() {
  dashboardIcon.classList.add('highlight');
  walletIcon.classList.remove('highlight');
  profileIcon.classList.remove('highlight');
}

function highlightWallet() {
  dashboardIcon.classList.remove('highlight');
  walletIcon.classList.add('highlight');
  profileIcon.classList.remove('highlight');
}

function highlightProfile() {
  dashboardIcon.classList.remove('highlight');
  walletIcon.classList.remove('highlight');
  profileIcon.classList.add('highlight');
}

function toggleDashboard() {
  highlightDashboard();
  dashboard.classList.remove('hidden');
  wallet.classList.add('hidden');
  profile.classList.add('hidden');
}

function toggleWallet() {
  highlightWallet();
  dashboard.classList.add('hidden');
  wallet.classList.remove('hidden');
  profile.classList.add('hidden');
}

function toggleProfile() {
  highlightProfile();
  dashboard.classList.add('hidden');
  wallet.classList.add('hidden');
  profile.classList.remove('hidden');
}

closeButton.addEventListener('click', dismissGreeting);

dashboardIcon.addEventListener('click', toggleDashboard);
walletIcon.addEventListener('click', toggleWallet);
profileIcon.addEventListener('click', toggleProfile);
