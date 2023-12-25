
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

function findMax(arr) {
    let arrCheck = []
    for (let i = 0; i < arr.length; i++) {
        arrCheck.push(Math.max(...arr[i]))
    }

    return Math.max(...arrCheck)
}

function findMin(arr) {
    let arrCheck = []
    for (let i = 0; i < arr.length; i++) {
        arrCheck.push(Math.min(...arr[i]))
    }

    return Math.min(...arrCheck)
}

let max = findMax(arr)
let min = findMin(arr)


result.innerHTML = `Min is ${min} and Max is ${max}`

console.log(arr);