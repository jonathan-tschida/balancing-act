function dismissGreeting() {
  document.getElementById("greeting").style.display = "none";
};

document.getElementByID("greeting-close").addEventListener("click", dismissGreeting);
