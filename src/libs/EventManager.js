class EventManager {
  constructor() {
    this.listeners = new Map();
  }

  on(eventName, listener) {
    if(!this.listeners.has(eventName)) {
      this.listeners.set(eventName, []);
    }

    this.listeners.get(eventName).push(listener);
  }
  
  emit(eventName, payload) {
    if(!this.listeners.has(eventName)) {
      return;
    }

    this.listeners.get(eventName).forEach((listener) => listener(payload));
  }

  removeListener(eventName, listener) {
    if(!this.listeners.has(eventName)) {
      return;
    }

    const listeners = this.listeners.get(eventName);
    this.listeners.set(eventName, listeners.filter(listenerObj => listenerObj !== listener));
  }

}

export default new EventManager();