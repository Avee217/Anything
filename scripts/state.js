class State {
  constructor() {
    this.temperature = 0;
    this.wood = 0;
  }

  setTemperature(x) {
    this.temperature = x;
  }

  getTemperature() {
    return this.temperature;
  }

  changeTemperature(value) {
    const oldTemperature = this.temperature;
    this.temperature += value;
    if (this.temperature > 100) {
      this.temperature = 100;
    }
    if (this.temperature < 0) {
      this.temperature = 0;
    }
    this.notifyEvent("temperatureChange", {
      oldTemperature: oldTemperature,
      newTemperature: this.getTemperature(),
    });
    return this.temperature;
  }

  setWood(x) {
    this.wood = x;
  }
  getWood() {
    return this.wood;
  }

  changeWood(value) {
    const oldWood = this.wood;
    this.wood += value;
    if (this.wood < 0) {
      this.wood = 0;
    }
    this.notifyEvent("woodChange", {
      oldWood: oldWood,
      newWood: this.getWood(),
    });
  }

  notifyEvent(eventName, data = {}) {
    window.dispatchEvent(
      new CustomEvent(eventName, {
        detail: {
          ...data,
        },
      })
    );
  }
}

const state = new State();
window.state = state;
