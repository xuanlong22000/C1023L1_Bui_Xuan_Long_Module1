let display = ''

let text = document.querySelector('.result')


function processOperator(value) {
    display += value

    text.innerHTML = display
}

function calculatorResult() {
    text.innerHTML = eval(display)
    display = eval(display)
}

function clearCalculator() {
    text.innerHTML = 0
    display = ''
}