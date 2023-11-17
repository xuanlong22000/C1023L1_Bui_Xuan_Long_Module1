let salary = document.querySelector('#salary')


let btn = document.querySelector('.btn')

let result = document.querySelector('.result')

btn.addEventListener('click', () => {

    if (+salary.value <= 5000000) {
        result.innerHTML = +salary.value * 5 / 100
    }

    if (+salary.value > 5000000 && +salary.value <= 10000000) {
        result.innerHTML = (+salary.value * 10 / 100) - 250000
    }

    if (+salary.value > 10000000 && +salary.value <= 18000000) {
        result.innerHTML = (+salary.value * 15 / 100) - 750000
    }

    if (+salary.value > 18000000 && +salary.value <= 32000000) {
        result.innerHTML = (+salary.value * 20 / 100) - 1650000
    }

    if (+salary.value > 32000000 && +salary.value <= 52000000) {
        result.innerHTML = (+salary.value * 25 / 100) - 3250000
    }

    if (+salary.value > 52000000 && +salary.value <= 80000000) {
        result.innerHTML = (+salary.value * 30 / 100) - 5850000
    }

    if (+salary.value > 80000000) {
        result.innerHTML = (+salary.value * 35 / 100) - 9850000
    }
})