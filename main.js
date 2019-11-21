function dismissWelcome() {
  document.getElementById("welcome").style.display = "none";
};

document.getElementByID("welcome-close").addEventListener("click", dismissWelcome);
