class ElectricLamp {
    constructor() {
        this.status = false
    }

    turnOff() {
        this.status = false
    }

    turnOn() {
        this.status = true
    }
}

class SwitchButton {
    constructor() {
        this.status
        this.lamp
    }

    connectToLamp(lamp) {
        this.lamp = lamp
    }

    switchOff() {
        this.lamp.turnOff()
        console.log(this.lamp.status);
    }

    switchOn() {
        this.lamp.turnOn()
        console.log(this.lamp.status);
    }
}

let lamp1 = new ElectricLamp()
let switchButton1 = new SwitchButton()

switchButton1.connectToLamp(lamp1)

for (let i = 0; i < 10; i++) {
    switchButton1.switchOn()
    switchButton1.switchOff()
}
