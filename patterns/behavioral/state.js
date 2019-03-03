class State {
    constructor(player) {
        this.player = player;
    }

    on() {}

    play() {}

    pause() {}

    off() {}
}

class OnState extends State {
    play() {
        this.player.setState(this.player.playingState);
        this.player.startPlaying();
    }

    off() {
        this.player.state = this.player.offState;
    }

    toString() {
        return 'ON';
    }
}

class OffState extends State {
    on() {
        this.player.state = this.player.onState;
    }

    toString() {
        return 'OFF';
    }
}

class PlayingState extends State {
    pause() {
        this.player.state = this.player.pauseState;
    }

    off() {
        this.player.state = this.player.offState;
    }

    toString() {
        return 'PLAY';
    }
}

class PauseState extends State {
    play() {
        this.player.state = this.player.playingState;
        this.player.startPlaying();
    }

    off() {
        this.player.state = this.player.offState;
    }

    toString() {
        return 'PAUSE';
    }
}

class Player {
    constructor() {
        this.onState = new OnState(this);
        this.offState = new OffState(this);
        this.playingState = new PlayingState(this);
        this.pauseState = new PauseState(this);
        this.state = new OffState(this);
    }

    setState(state) {
        this.state = state;
    }

    on() {
        this.state.on();
    }

    play() {
        this.state.play();
    }

    pause() {
        this.state.pause();
    }

    off() {
        this.state.off();
    }

    startPlaying() {

    }
}

const player = new Player();

console.log(player.state);

player.on();
console.log(player.state);

player.play();
console.log(player.state);

player.pause();
console.log(player.state);

player.play();
console.log(player.state);

player.off();
console.log(player.state);
