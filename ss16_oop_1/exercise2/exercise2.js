class Temperature {

    constructor(degreeC) {
        this.degreeC = degreeC
    }

    toF() {
        return (this.degreeC * 9 / 5) + 32
    }
    toKevin() {
        return this.degreeC + 273.15
    }

}

let temperature1 = new Temperature(33)

document.querySelector('.K').innerHTML = `Degree K : ${temperature1.toKevin()} K`
document.querySelector('.F').innerHTML = `Degree F : ${temperature1.toF()} oF` 
