
const m = +prompt('Nhap row')
const n = +prompt('Nhap column')

const result = document.querySelector('.result')
let sum = 0
let resultX = []

let arr = []

function isPrime(number) {

    if (number === 1) {
        return false
    } else if (number === 2) {
        return true
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false
        }
    }

    return true
}

for (let i = 0; i < m; i++) {

    arr.push([])

    for (let j = 0; j < n; j++) {
        arr[i][j] = +prompt(`Nhap row ${i} va column ${j}`)
    }

}

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        if (isPrime(arr[i][j])) {
            resultX.push(arr[i][j])
        }
    }
}

console.log(resultX);

let html = resultX.map((item, index) => `<li> So nguyen to thu ${index + 1} la ${item}</li>`).join('')

result.innerHTML = html