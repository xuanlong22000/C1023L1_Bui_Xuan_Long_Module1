let h2 = 5

for (let i = 0; i < h2; i++) {
    let star = ''

    for (let j = 0; j < h2 * 2 - 1; j++) {
        (j >= h2 - 1 - i && j <= h2 - 1 + i) || i === h2 - 1 ? star += '*' : star += ' '
    }

    console.log(star);

}