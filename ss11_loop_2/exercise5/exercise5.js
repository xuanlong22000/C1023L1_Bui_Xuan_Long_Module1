let first = document.querySelector('.first')
let second = document.querySelector('.second')
let third = document.querySelector('.third')
let fourth = document.querySelector('.fourth')


// Tam giac 1

let p = document.createElement('p')
let star = '*'
first.appendChild(p)
p.innerHTML = star

for (let i = 0; i < 4; i++) {
    let p = document.createElement('p')

    star += '*'

    first.appendChild(p)

    p.innerHTML = star
}

// Tam giac 2

let p2 = document.createElement('p')
let star2 = '*****'
second.appendChild(p2)
p2.innerHTML = star2


for (let i = 0; i < 4; i++) {
    let p2 = document.createElement('p')

    star2 = star2.replace('*', '')

    second.appendChild(p2)

    p2.innerHTML = star2
}

//Tam giac 3

let n = 5

for (let i = 0; i < n; i++) {
    let output = ''
    let p3 = document.createElement('p')
    third.appendChild(p3)


    for (let j = 0; j < n; j++) {
        j < (n - 1 - i) ? output += '&nbsp; ' : output += '*'
    }

    p3.innerHTML = output

}

//Tam giac 4

let n2 = 6

for (let i = 0; i < n2; i++) {
    let output = ''
    let p4 = document.createElement('p')
    fourth.appendChild(p4)


    for (let j = 0; j < n2; j++) {
        j < (n2 - 1 - i) ? output += '*' : output = `&nbsp; ${output}`
    }

    p4.innerHTML = output.replace('&nbsp;', '')

}

