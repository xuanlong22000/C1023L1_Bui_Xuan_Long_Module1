let numerators = [5, 2, 5]
let denominators = [6, 3, 4]

let result2 = []

for (let i = 0; i < numerators.length; i++) {
    result2.push(numerators[i] / denominators[i])
}

for (let j = 0; j < numerators.length; j++) {
    if (numerators[j] / denominators[j] === Math.max(...result2)) {
        console.log(`Max Fraction ${numerators[j]}/${denominators[j]}`);
    }
}
