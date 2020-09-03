<<<<<<< HEAD
function getTemperatureState(temperature) {
  if (temperature <= 29 && temperature >= 0) {
    return "freezing";
  }
  if (temperature <= 59 && temperature >= 30) {
    return "survivable";
  }
  if (temperature <= 89 && temperature >= 60) {
    return "pleasant";
  }
  if (temperature >= 90) {
    return "warm";
  }
}
=======

export function getTemperatureState(temperature) {
    if (temperature <= 29 && temperature >= 0) {
        return 'freezing';
    }
    if (temperature <= 59 && temperature >= 30) {
        return 'survivable';
    }
    if (temperature <= 89 && temperature >= 60) {
        return 'pleasant';
    }
    if (temperature >= 90) {
        return 'warm';
    }
}
>>>>>>> 0d660f1f21eeb6a23cb46a882e70bac8fe264d78
