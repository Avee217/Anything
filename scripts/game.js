class Game {
  constructor() {
    // Decrease temperature every 10 seconds
    window.setInterval(this.decreaseRoomTemperature, 10 * 1000);

    // Temperature change listener
    window.addEventListener("temperatureChange", function (event) {
      const oldRoomStatus = getTemperatureState(event.detail.oldTemperature);
      const newRoomStatus = getTemperatureState(event.detail.newTemperature);
      if (oldRoomStatus !== newRoomStatus) {
        addNotification("The temperature is " + newRoomStatus);
      }
    });
  }

  decreaseRoomTemperature() {
    window.state.changeTemperature(-10);
  }

  // Gather function
  gatherWood() {
    this.woodAmount += 5;
    notification.addNotification(5 + "wood has been gathered");
    console.log(this.woodAmount);
    const x = document.getElementById("gatherWoodButton");

    x.setAttribute("disabled", true);

    window.setTimeout(function () {
      x.removeAttribute("disabled");
    }, 2000);
  }
}
window.Game = Game;
