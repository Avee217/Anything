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
