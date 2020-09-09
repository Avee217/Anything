function createTrap() {
  if (window.state.getValue("wood") >= 10) {
    window.state.changeValue("wood", -10);
    window.state.changeValue("trap", 1);

    addNotification("A trap is made");

    const createTrapButton = document.getElementById("createtrapButton");
    createTrapButton.setAttribute("disabled", true);
    window.setTimeout(function () {
      createTrapButton.removeAttribute("disabled");
    }, 1000);
  } else
    addNotification("Gather " + (10 - window.state.getValue("wood")) + " Wood");
}

function placeTrap() {
  if (window.state.getValue("trap") >= 1) {
    window.state.changeValue("trap", -1);

    addNotification("A trap is placed");

    const placeTrapButton = document.getElementById("placetrapButton");
    placeTrapButton.setAttribute("disabled", true);
    window.setTimeout(function () {
      placeTrapButton.removeAttribute("disabled");
    }, 1000);
  } else addNotification("Create Trap first");
}

// function checkTrap(){
//     if(window.state.)
// }
