let formSubmit = document.querySelector('.form')

let amount = document.querySelector('#amount')

let fromValue = document.querySelector('#from')

let toValue = document.querySelector('#to')

let result = document.querySelector('#result')

let display = ''

formSubmit.addEventListener('submit', function (e) {
    e.preventDefault()

    if (fromValue.value === 'VND' && toValue.value === 'USD') {

        display = amount.value / 23000

        result.innerHTML = `Result: ${display} Dollar`

        display = ''
        amount.value = ''
        amount.focus()
    }

    if (fromValue.value === 'USD' && toValue.value === 'VND') {
        display = amount.value * 23000

        result.innerHTML = `Result: ${display} VND`

        display = ''

        amount.value = ''
        amount.focus()
    }

    if (fromValue.value === toValue.value) {
        display = amount.value

        result.innerHTML = `Result: ${display} ${fromValue === 'VND' ? 'VND' : 'Dollar'}`

        display = ''

        amount.value = ''
        amount.focus()
    }


})






