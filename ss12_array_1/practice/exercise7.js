const data = [60, 4, 5, 6, 72, 23, 4, 22, 12, 10]

const v = 4

for (let i = 0; i < data.length; i++) {
    if (data[i] === v) {
        data.splice(i, 1)
    }
}


console.log(data);