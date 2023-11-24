const data = [60, 4, 5, 6, 72, 23, 4, 22, 12, 10]

for (let i = 0; i < data.length; i++) {

    let tmp
    for (let j = 0; j < data.length; j++) {
        if (data[j] > data[j + 1]) {
            tmp = data[j]
            data[j] = data[j + 1]
            data[j + 1] = tmp
        }
    }

}

console.log(data);

// console.log(data.sort((a, b) => a - b));