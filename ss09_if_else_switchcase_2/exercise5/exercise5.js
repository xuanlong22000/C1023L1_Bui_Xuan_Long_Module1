let sidea = document.querySelector('#sidea')

let sideb = document.querySelector('#sideb')

let btn = document.querySelector('.btn')

let result = document.querySelector('.result')

btn.addEventListener('click', () => {
    result.innerHTML = `The area of right triangle is ${(+sidea.value * +sideb.value) / 2}`
})