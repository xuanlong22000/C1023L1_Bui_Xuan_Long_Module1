let h1 = 5

for (let i = 0; i < h1; i++) {
    let star = ''

    for (let j = 0; j < h1; j++) {
        j === 0 || j === i || i === h1 - 1 ? star += '*' : star += ' '
    }

    console.log(star);

}