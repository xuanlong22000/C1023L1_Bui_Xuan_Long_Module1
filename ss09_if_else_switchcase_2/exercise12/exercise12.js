let money = document.querySelector('#money')

let rate = document.querySelector('#rate')

let month = document.querySelector('#month')



let btn = document.querySelector('.btn')

let result = document.querySelector('.result')

btn.addEventListener('click', () => {

    result.innerHTML = `Bank Rate is ${((+money.value * (+rate.value / 100)) / +month.value).toFixed(2)} VND`
})