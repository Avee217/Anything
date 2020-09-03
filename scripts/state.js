class State {
  constructor() {
    this.temperature = 0;
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
      this.temperature = this.temperature;
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

  notifyEvent(eventName, data = {}) {
    console.log({
      detail: { ...data },
    });
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
