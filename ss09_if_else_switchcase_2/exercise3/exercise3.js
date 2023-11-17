let side = document.querySelector('#side')

let btn = document.querySelector('.btn')

let result = document.querySelector('.result')

btn.addEventListener('click', () => {
    result.innerHTML = `The area of square is ${+side.value * +side.value}`
})