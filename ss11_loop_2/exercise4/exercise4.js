let number = document.querySelector('#number')

let result = document.querySelector('.result')

let btn = document.querySelector('.btn')

let numberGiaithua = 1

btn.addEventListener('click', () => {
    numberGiaithua = 1

    for (let i = 1; i <= +number.value; i++) {
        numberGiaithua *= i
    }

    result.innerHTML = numberGiaithua

})

