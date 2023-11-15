const weight = document.querySelector('#weight')

const height = document.querySelector('#height')

const result = document.querySelector('.result')

const form = document.querySelector('.form')

let bmi

form.addEventListener('submit', function (e) {
    e.preventDefault()

    bmi = weight.value / (height.value ** 2)

    if (bmi < 18.5) {
        result.innerHTML = 'Underweight'
    }

    if (bmi >= 18.5 && bmi < 25) {
        result.innerHTML = 'Normal'
    }

    if (bmi >= 25 && bmi < 30) {
        result.innerHTML = 'Overweight'
    }

    if (bmi > 30) {
        result.innerHTML = 'Obese'
    }
})