class Game {
  constructor() {
    // Decrease temperature every 10 seconds
    window.setInterval(this.decreaseRoomTemperature, 10 * 1000);

    // Temperature change listener
    window.addEventListener("temperature", function (event) {
      const oldRoomStatus = getTemperatureState(event.detail.oldValue);
      const newRoomStatus = getTemperatureState(event.detail.newValue);
      if (oldRoomStatus !== newRoomStatus) {
        addNotification("The temperature is " + newRoomStatus);
      }
    });

    // Wood change listener
    window.addEventListener("wood", function (event) {
      setWoodAmount(event.detail.newValue);
    });
    //Trap change Listener
    window.addEventListener("trap", function (event) {
      setTrapAmount(event.detail.newValue);
    });
  }

  decreaseRoomTemperature() {
    window.state.changeValue("temperature", -10);
  }
}
window.Game = Game;
