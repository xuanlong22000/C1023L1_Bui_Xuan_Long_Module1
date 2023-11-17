let inputA = document.querySelector('#inputA')

let inputB = document.querySelector('#inputB')

let inputC = document.querySelector('#inputC')


let btn = document.querySelector('.btn')

let result = document.querySelector('.result')

let x1

let x2

let delta

btn.addEventListener('click', () => {
    delta = (+inputB.value * +inputB.value) - 4 * (+inputA.value) * (+inputC.value)


    if (delta < 0) {
        result.innerHTML = 'No result of x'
    }

    if (delta > 0) {
        x1 = (-(+inputB.value) + Math.sqrt(delta)) / (2 * (+inputA.value))
        x2 = (+inputB.value + Math.sqrt(delta)) / (2 * (+inputA.value))
        result.innerHTML = `Have 2 result : x1=${x1}, x2=${x2}`
    }

    if (delta === 0) {
        x1 = -(+inputB.value) / 2 * (+inputA.value)

        x2 = x1
        result.innerHTML = `Have 1 result : x=${x1}`
    }

})