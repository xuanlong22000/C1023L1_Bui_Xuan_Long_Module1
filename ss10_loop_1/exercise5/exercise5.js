let result = document.querySelector('.result')

let n1 = 0, n2 = 1

let n = 20

for (let i = 0; i < n; i++) {
    let p = document.createElement('p')
    result.appendChild(p)
    sum = n1 + n2
    p.innerHTML = n1
    n1 = n2
    n2 = sum
}