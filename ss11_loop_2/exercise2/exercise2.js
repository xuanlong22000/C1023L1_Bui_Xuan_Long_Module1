let result = document.querySelector('.result')
let sum = document.querySelector('.sum')

for (let i = 0; i <= 100; i++) {
    let p = document.createElement('p')
    result.appendChild(p)

    if (i % 3 === 0) {

        p.innerHTML = 'Fizz'
    }

    if (i % 5 === 0) {
        p.innerHTML = 'Buzz'

    }

    if (i % 3 === 0 && i % 5 === 0) {
        p.innerHTML = 'FizzBuzz'

    }

    if (i % 3 !== 0 && i % 5 !== 0) {
        p.innerHTML = i
    }

}