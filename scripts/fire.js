function lightFire() {
  if (window.state.getValue("wood") > 0) {
    window.state.changeValue("temperature", 25);
    window.state.changeValue("wood", -1);

    addNotification("The Fire Has Started");

    const fireButton = document.getElementById("fireButton");
    fireButton.setAttribute("disabled", true);
    window.setTimeout(function () {
      fireButton.removeAttribute("disabled");
    }, 1000);
  } else addNotification("Gather wood first");
}
