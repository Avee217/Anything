function gatherWood() {
  if (window.state.getValue("cart") >= 1) {
    const multiplier = window.state.getValue("cart");
    window.state.changeValue("wood", multiplier * 30);
  } else {
    window.state.changeValue("wood", 5);
  }

  const gatherWoodButton = document.getElementById("gatherWoodButton");
  gatherWoodButton.setAttribute("disabled", true);
  window.setTimeout(function () {
    gatherWoodButton.removeAttribute("disabled");
  }, 1000);
  addNotification(" wood has been gathered");
}
function buildCart() {
  if (window.state.getValue("wood") >= 30) {
    window.state.changeValue("wood", -30);
    window.state.changeValue("cart", 1);

    addNotification("A cart is built");

    const buildCartButton = document.getElementById("buildCartButton");
    buildCartButton.setAttribute("disabled", true);
    window.setTimeout(function () {
      buildCartButton.removeAttribute("disabled");
    }, 1000);
  } else addNotification("Gather " + (30 - window.state.getValue("wood")) + " Wood");
}
