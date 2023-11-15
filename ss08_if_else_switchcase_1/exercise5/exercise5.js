let firstNumber = document.querySelector('#firstNumber')
let secondNumber = document.querySelector('#secondNumber')
let thirdNumber = document.querySelector('#thirdNumber')


let btn = document.querySelector('.btn')

let result = document.querySelector('.result')

btn.addEventListener('click', () => {
    result.innerHTML = `Max Number is ${Math.max(+firstNumber.value, +secondNumber.value, +thirdNumber.value)}`
})
