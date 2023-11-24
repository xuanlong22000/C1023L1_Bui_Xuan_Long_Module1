// Bai 1

console.log('Bai 1 :');

const myColor = ["Red", "Green", "White", "Black"];

console.log(myColor.join(','));

//Bai 2

console.log('Bai 2 :');

const input1 = '025468224435'

const array = input1.split('')

for (let i = 0; i < array.length; i++) {
    if (+array[i] % 2 === 0 && +array[i + 1] % 2 === 0) {
        array[i] += '-'
    }
}

console.log(array.join(''));

//Bai 3

console.log('Bai 3 :');

const input2 = 'The Quick Brown Fox'

const array2 = input2.split(' ').map(item => {
    const toArray = item.split('')

    for (let j = 0; j < toArray.length; j++) {
        if (toArray[j] === toArray[j].toUpperCase()) {
            toArray[j] = toArray[j].toLowerCase()
        } else {
            toArray[j] = toArray[j].toUpperCase()
        }
    }

    return toArray.join('')
})

console.log(array2.join(' '));

