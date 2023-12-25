let a2 = [7, 2, 5, 3, 5, 3]

let b2 = [7, 2, 5, 4, 6, 3, 5, 3]

let result = []

for (let i = 0; i < b2.length; i++) {
    if (!a2.includes(b2[i])) {
        result.push(b2[i])
    }

}

console.log(result);