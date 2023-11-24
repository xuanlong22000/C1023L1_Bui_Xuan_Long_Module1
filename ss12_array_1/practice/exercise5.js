const string = '-14982ha-2-3'

const arr = string.split('')

for (let i = 0; i < arr.length; i++) {

    if (arr[i] === '-' && typeof JSON.parse(arr[i + 1]) === 'number') {
        arr[i + 1] = arr[i] + arr[i + 1]

        arr[i + 1] = JSON.parse(arr[i + 1])
        arr.splice(i, 1)
    }

}

console.log('Length of -number in string :', arr.filter(item => item < 0 && typeof item === 'number').length);