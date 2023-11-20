let result = document.querySelector('.result')
let sumFib = document.querySelector('.sumFib')


let n1 = 0, n2 = 1

let fibonacci = []

let n = 20

for (let i = 0; i < n; i++) {
    let p = document.createElement('p')
    result.appendChild(p)
    sum = n1 + n2

    fibonacci.push(n1)
    p.innerHTML = n1

    n1 = n2
    n2 = sum
}

sumFib.innerHTML = `Sum of 20 number Fibonacci of first numbers is ${fibonacci.reduce((prev, cur) => prev + cur, 0)}` 
