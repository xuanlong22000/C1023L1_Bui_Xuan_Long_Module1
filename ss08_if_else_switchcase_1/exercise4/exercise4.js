let age = document.querySelector('#age')

let btn = document.querySelector('.btn')

let result = document.querySelector('.result')


btn.addEventListener('click', () => {

    if (+age.value === 15 || +age.value === 16) {
        result.innerHTML = 'Ban la hoc sinh lop 10'
    } else {
        result.innerHTML = 'Ban khong phai la hoc sinh lop 10'

    }
})