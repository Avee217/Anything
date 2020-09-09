function gatherWood() {
  window.state.changeValue("wood", 5);
  addNotification(5 + " wood has been gathered");
  const gatherWoodButton = document.getElementById("gatherWoodButton");

  gatherWoodButton.setAttribute("disabled", true);

  window.setTimeout(function () {
    gatherWoodButton.removeAttribute("disabled");
  }, 2000);
}
