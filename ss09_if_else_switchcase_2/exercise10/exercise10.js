let kwh = document.querySelector('#kwh')


let btn = document.querySelector('.btn')

let result = document.querySelector('.result')

btn.addEventListener('click', () => {
    if (+kwh.value <= 50) {
        result.innerHTML = `Price of electric ${+kwh.value * 1806} VND`
    }

    else if (+kwh.value > 50 && +kwh.value <= 100) {
        result.innerHTML = `Price of electric ${+kwh.value * 1866} VND`
    }

    else if (+kwh.value > 100 && +kwh.value <= 200) {
        result.innerHTML = `Price of electric ${+kwh.value * 2167} VND`
    }

    else {
        result.innerHTML = 'Kwh is not suitable'
    }
})