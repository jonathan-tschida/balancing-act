var greeting = document.getElementById('greeting');
var closeButton = document.getElementById('greeting-close');
var dashboardIcon = document.getElementById('dashboard-icon');
var walletIcon = document.getElementById('wallet-icon');
var profileIcon = document.getElementById('profile-icon');
var dashboard = document.getElementById('dashboard');
var wallet = document.getElementById('wallet');
var profile = document.getElementById('profile');

wallet.parentNode.removeChild(wallet);
profile.parentNode.removeChild(profile);

function dismissGreeting() {
  greeting.parentNode.removeChild(greeting);
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

function selectDashboard() {
  var checkWallet = document.getElementById('wallet');
  var checkProfile = document.getElementById('profile');
  highlightDashboard();
  if(checkWallet !== null) {
    wallet = document.getElementById('wallet');
    wallet.parentNode.insertBefore(dashboard, wallet);
    wallet.parentNode.removeChild(wallet);
  } if(checkProfile !== null) {
      profile = document.getElementById('profile');
      profile.parentNode.insertBefore(dashboard, profile);
      profile.parentNode.removeChild(profile);
  }
}

function selectWallet() {
  var checkDashboard = document.getElementById('dashboard');
  var checkProfile = document.getElementById('profile');
  highlightWallet();
  if(checkDashboard !== null) {
    dashboard = document.getElementById('dashboard');
    dashboard.parentNode.insertBefore(wallet, dashboard);
    dashboard.parentNode.removeChild(dashboard);
  } if(checkProfile !== null) {
      profile = document.getElementById('profile');
      profile.parentNode.insertBefore(wallet, profile);
      profile.parentNode.removeChild(profile);
  }
}

function selectProfile() {
  var checkDashboard = document.getElementById('dashboard');
  var checkWallet = document.getElementById('wallet');
  highlightProfile();
  if(checkDashboard !== null) {
    dashboard = document.getElementById('dashboard');
    dashboard.parentNode.insertBefore(profile, dashboard);
    dashboard.parentNode.removeChild(dashboard);
  } if(checkWallet !== null) {
      wallet = document.getElementById('wallet');
      wallet.parentNode.insertBefore(profile, wallet);
      wallet.parentNode.removeChild(wallet);
  }
}

closeButton.addEventListener('click', dismissGreeting);

dashboardIcon.addEventListener('click', selectDashboard);
walletIcon.addEventListener('click', selectWallet);
profileIcon.addEventListener('click', selectProfile);
