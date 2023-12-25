let a1 = [0, 3, 4, 5, 6, 7, 8]

let b1 = []

let sum = 0

for (let i = 0; i < a1.length; i++) {
    sum += a1[i]
    b1.push(sum)
}

console.log(b1);