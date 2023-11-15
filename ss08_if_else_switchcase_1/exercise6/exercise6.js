let firstMark = document.querySelector('#firstMark')
let secondMark = document.querySelector('#secondMark')
let thirdMark = document.querySelector('#thirdMark')

let btn = document.querySelector('.btn')

let result = document.querySelector('.result')

let avg

btn.addEventListener('click', () => {
    avg = (+firstMark.value + +secondMark.value * 2 + +thirdMark.value * 3) / 6

    if (avg < 5) {
        result.innerHTML = `Mark: ${avg.toFixed(1)} -> Type: D`
    }

    if (avg >= 5 && avg < 6.5) {
        result.innerHTML = `Mark: ${avg.toFixed(1)} -> Type: C`

    }
    if (avg >= 6.5 && avg < 8) {
        result.innerHTML = `Mark: ${avg.toFixed(1)} -> Type: B`

    }

    if (avg >= 8) {
        result.innerHTML = `Mark: ${avg.toFixed(1)} -> Type: A`
    }
})