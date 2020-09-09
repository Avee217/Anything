function createTrap() {
  if (window.state.getValue("wood") >= 10) {
    window.state.changeValue("wood", -10);
    window.state.changeValue("trap", 1);

    addNotification("A trap is placed");

    const createTrapButton = document.getElementById("createTrapButton");
    createTrapButton.setAttribute("disabled", true);
    window.setTimeout(function () {
      createTrapButton.removeAttribute("disabled");
    }, 1000);
  } else addNotification("Gather " + (10 - window.state.getValue("wood")) + " Wood");
}

function gatherFromTrap() {
  if (window.state.getValue("trap") >= 1) {
    const multiplier = window.state.getValue("trap");
    window.state.changeValue("meat", multiplier * Math.round(Math.random() * 10));
    window.state.changeValue("fur", multiplier * Math.round(Math.random() * 10));

    const gatherFromTrapButton = document.getElementById("gatherFromTrapButton");
    gatherFromTrapButton.setAttribute("disabled", true);
    window.setTimeout(function () {
      gatherFromTrapButton.removeAttribute("disabled");
    }, 1000);
  } else addNotification("Create Trap first");
}
