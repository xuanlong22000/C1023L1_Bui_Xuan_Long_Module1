let result = document.querySelector('.result')
let sum = document.querySelector('.sum')


let count = 0

let listNumber = []

for (let i = 0; ; i++) {

    if (i % 7 === 0) {

        let p = document.createElement('p')
        result.appendChild(p)

        p.innerHTML = i
        listNumber.push(i)

        count++
    }

    if (count === 30) {
        count = 0
        break
    }

}

sum.innerHTML = ` Sum of all number is ${listNumber.reduce((prev, cur) => prev + cur, 0)}`