class State {
  constructor() {
    this.temperature = 0;
    this.wood = 0;
    this.trap = 0;
  }

  setValue(key, value) {
    this[key] = value;
  }
  getValue(key) {
    return this[key];
  }

  changeValue(key, value) {
    const oldValue = this[key];
    this[key] += value;
    if (this[key] > 100) {
      this[key] = 100;
    }
    if (this[key] < 0) {
      this[key] = 0;
    }

    this.notifyEvent(key, { oldValue: oldValue, newValue: this.getValue(key) });
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
