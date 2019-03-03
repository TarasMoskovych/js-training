// 1
class Subject {
    constructor() {
        this.events = {};
    }

    on(event, listener) {
        this.events[event] = this.events[event] || new Set();
        this.events[event].add(listener);
    }

    off(event, listener) {
        if (this.events[event].has(listener)) {
            this.events[event].delete(listener);
        }
    }

    emit(event, ...args) {
        for (let listener of this.events[event]) {
            listener.update(...args);
        }
    }
}

class YouTubeChannel extends Subject {
    publish(title) {
        this.emit('publish', title);
    }
}

const channel = new YouTubeChannel();
const subscriber1 = {
    update(title) {
        console.log('Watching', title);
    }
};

channel.on('publish', subscriber1);
channel.publish('JavaScript Design Patterns');

// 2
class Store {
    constructor(state) {
        this.state = state;
        this.observers = new Set();
    }

    addObserver(observer) {
        this.observers.add(observer);
    }

    removeObserver(observer) {
        this.observers.delete(observer);
    }

    updateState(updater) {
        this.state = updater(this.state);
        this.notifyObservers();
    }

    notifyObservers() {
        for (let observer of this.observers) {
            observer(this.state);
        }
    }
}

const store = new Store([]);

store.addObserver(state => console.log('STATE UPDATED: ', state));

store.updateState(state => [...state, 1]);
store.updateState(state => [...state, 2]);
store.updateState(state => [...state, 3]);
