function lightFire() {
  window.state.changeTemperature(25);

  addNotification("The Fire Has Started");

  const fireButton = document.getElementById("fireButton");
  fireButton.setAttribute("disabled", true);
  window.setTimeout(function () {
    fireButton.removeAttribute("disabled");
  }, 1000);
}
