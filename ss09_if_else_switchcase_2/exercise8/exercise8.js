let age = document.querySelector('#age')

let btn = document.querySelector('.btn')

let result = document.querySelector('.result')

btn.addEventListener('click', () => {

    if (+age.value % 1 === 0 && +age.value > 0 && +age.value < 120) {
        result.innerHTML = 'Age is suitable'
    } else {
        result.innerHTML = 'Age is not suitable'
    }

})