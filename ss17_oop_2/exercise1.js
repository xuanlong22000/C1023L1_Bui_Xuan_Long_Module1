class Apple {
    constructor() {
        this.weight = 10
    }

    decrease() {
        this.weight -= 1
    }

    isEmpty() {
        this.weight > 0 ? true : false
    }

    getWeight() {
        return this.weight
    }
}

class Human {
    constructor() {
        this.name
        this.gender
        this.apple
    }

    setApple(apple) {
        this.apple = apple
    }

    isMale() {
        this.gender === 'male' ? true : false
    }

    setGender(gender) {
        this.gender = gender
    }

    checkApple() {
        this.apple.isEmpty()
    }

    eat() {

        if (!this.checkApple()) {
            this.apple.decrease()
            this.weight += 1
        }

    }

    say() {
        console.log(`${this.name} ate - Apple has ${this.apple.weight} dv - Weight of ${this.name} is ${this.weight}`);
    }

    getName() {
        return this.name
    }

    setName(name) {
        this.name = name
    }

    getWeight() {
        return this.weight
    }

    setWeight(weight) {
        this.weight = weight
    }
}

let apple = new Apple()
let human1 = new Human()
human1.setWeight(50)
human1.setGender('male')
human1.setName('Adam')
human1.setApple(apple)
human1.eat()
human1.eat()
human1.eat()
human1.eat()
human1.eat()
human1.say()