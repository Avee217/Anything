function lightFire() {
  if (window.state.getWood() > 0) {
    window.state.changeTemperature(25);
    window.state.changeWood(-1);

    addNotification("The Fire Has Started");

    const fireButton = document.getElementById("fireButton");
    fireButton.setAttribute("disabled", true);
    window.setTimeout(function () {
      fireButton.removeAttribute("disabled");
    }, 1000);
  } else addNotification("Gather wood first");
}
