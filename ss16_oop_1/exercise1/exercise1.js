class Rectangle {

    constructor(width, height) {
        this.width = width
        this.height = height
    }

    acreage() {
        return this.width * this.height
    }

    perimeter() {
        return (this.width + this.height) * 2
    }

    art() {
        let rectangle = document.getElementById("rectangle").getContext("2d");

        rectangle.beginPath();
        rectangle.rect(0, 0, this.width, this.height);
        rectangle.stroke();

    }
}

let rectangle1 = new Rectangle(300, 150)
rectangle1.art()
document.querySelector('.acreage').innerHTML = `Dien tich : ${rectangle1.acreage()}`
document.querySelector('.perimeter').innerHTML = `Chu vi ${rectangle1.perimeter()}`

