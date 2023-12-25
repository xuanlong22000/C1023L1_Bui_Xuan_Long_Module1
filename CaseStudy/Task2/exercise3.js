let h3 = 5

/*

i 0 4
j 0 9

i=3 j=1 5-1-1
i=3 j=2
i=3 j=3
...
i=3 j=7

*/

for (let i = 0; i < h3; i++) {
    let star = ''

    for (let j = 0; j < h3 * 2 - 1; j++) {
        j === h3 - 1 - i || j === h3 - 1 + i || i === h3 - 1 ? star += '*' : star += ' '
    }

    console.log(star);

}