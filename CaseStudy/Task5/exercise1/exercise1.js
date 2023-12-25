
const m = +prompt('Nhap row')
const n = +prompt('Nhap column')

const result = document.querySelector('.result')

let arr = []

for (let i = 0; i < m; i++) {

    arr.push([])

    for (let j = 0; j < n; j++) {
        arr[i][j] = +prompt(`Nhap row ${i} va column ${j}`)
    }

}

function sumEven(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] % 2 === 0) {
                sum += arr[i][j]
            }
        }
    }

    return sum
}

let sum = sumEven(arr)

result.innerHTML = `Sum is ${sum}`

console.log(arr);