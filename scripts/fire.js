import * as notification from './notification';
import game from './game';


function lightFire() {

    game.changeRoomTemperature(25);

    notification.addNotification("The Fire Has Started");

    const x = document.getElementById("fireButton");

    x.setAttribute("disabled", true);

    window.setTimeout(function () { x.removeAttribute("disabled") }, 1000);


}
