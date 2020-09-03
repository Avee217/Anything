function gatherWood() {
  this.woodAmount += 5;
  addNotification(5 + " wood has been gathered");
  const x = document.getElementById("gatherWoodButton");

  x.setAttribute("disabled", true);

  window.setTimeout(function () {
    x.removeAttribute("disabled");
  }, 2000);
}
