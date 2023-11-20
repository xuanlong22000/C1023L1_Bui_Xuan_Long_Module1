let prime = document.querySelector('#prime')
let result = document.querySelector('.result')
let btn = document.querySelector('.btn')

let count = 0

const isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}

btn.addEventListener('click', function () {

    result.innerHTML = ''

    for (let i = 2; ; i++) {

        if (isPrime(i)) {
            let p = document.createElement('p')
            result.appendChild(p)
            p.innerHTML = i
            count++
        }

        if (count === +prime.value) {
            count = 0
            break
        }
    }

})
