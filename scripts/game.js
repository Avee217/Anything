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
      setStorageDisplay("woodAmount", event.detail.newValue);
    });
    //Trap change Listener
    window.addEventListener("trap", function (event) {
      setStorageDisplay("trapAmount", event.detail.newValue);
    });
    //Fur change Listener
    window.addEventListener("fur", function (event) {
      setStorageDisplay("furAmount", event.detail.newValue);
    });
    //Meat change Listener
    window.addEventListener("meat", function (event) {
      setStorageDisplay("meatAmount", event.detail.newValue);
    });
    requestAnimationFrame(Game.render);
  }

  static render() {
    if (window.state.getValue("wood") >= 10) {
      const element = document.getElementById("createTrapButton");
      element.classList.add("visible");
      element.classList.remove("invisible");
    } else {
      const element = document.getElementById("createTrapButton");
      element.classList.add("invisible");
      element.classList.remove("visible");
    }
    if (window.state.getValue("trap") >= 1) {
      const element = document.getElementById("gatherFromTrapButton");
      element.classList.add("visible");
      element.classList.remove("invisible");
    } else {
      const element = document.getElementById("gatherFromTrapButton");
      element.classList.add("invisible");
      element.classList.remove("visible");
    }
    requestAnimationFrame(Game.render);
  }

  decreaseRoomTemperature() {
    window.state.changeValue("temperature", -10);
  }
}
window.Game = Game;
