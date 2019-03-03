class Light {
    constructor() {
        this.isOn = false;
    }

    on() {
        this.isOn = true;
        console.log('On');
    }

    off() {
        this.isOn = false;
        console.log('Off');
    }

    toggle() {
        if (this.isOn) {
            this.off();
        } else {
            this.on();
        }
    }
}

class LightCommand {
    constructor(light) {
        this.light = light;
    }

    execute() {
        this.light.toggle();
    }
}

class Switch {
    constructor(command) {
        this.command = command;
    }

    on() {
        this.command.execute();
    }

    off() {
        this.command.execute();
    }
}

const light = new Light();
const command = new LightCommand(light);
const lightSwitch = new Switch(command);

lightSwitch.on();
lightSwitch.off();
