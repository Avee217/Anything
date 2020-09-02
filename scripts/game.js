import * as temperature from "./temperature.js";
import * as notification from "./notification.js";

class Game {
  constructor() {
    this.roomTemperature = 0;
    window.setInterval(this.changeRoomTemperature.bind(this), 10000, -10);

    window.addEventListener("temperatureChange", function (event) {
      const oldRoomStatus = temperature.getTemperatureState(
        event.detail.oldRoomTemperature
      );
      const newRoomStatus = temperature.getTemperatureState(
        event.detail.newRoomTemperature
      );
      if (oldRoomStatus !== newRoomStatus) {
        notification.addNotification("The temperature is " + newRoomStatus);
      }
    });
  }

  changeRoomTemperature(roomTemperatureChange) {
    const oldRoomTemperature = this.roomTemperature;
    this.roomTemperature += roomTemperatureChange;
    if (this.roomTemperature < 0) {
      this.roomTemperature = 0;
    } else if (this.roomTemperature > +100) {
      this.roomTemperature = 100;
    }
    console.log(this.roomTemperature);
    window.dispatchEvent(
      new CustomEvent("temperatureChange", {
        detail: {
          oldRoomTemperature: oldRoomTemperature,
          newRoomTemperature: this.roomTemperature,
        },
      })
    );
  }

  lightFire() {
    notification.addNotification("The Fire Has Started");

    this.changeRoomTemperature(25);

    const fireButton = document.getElementById("fireButton");
    fireButton.setAttribute("disabled", true);
    window.setTimeout(function () {
      fireButton.removeAttribute("disabled");
    }, 1000);
  }
}
export default Game;
