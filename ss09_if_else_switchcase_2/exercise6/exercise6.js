let inputA = document.querySelector('#inputA')

let inputB = document.querySelector('#inputB')

let btn = document.querySelector('.btn')

let result = document.querySelector('.result')

btn.addEventListener('click', () => {
    result.innerHTML = `X is ${-(+inputB.value) / +inputA.value}`
})