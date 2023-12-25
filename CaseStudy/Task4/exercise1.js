function convertString(string) {
    let arr = string.split(' ').filter(item => item !== '');

    let result = []

    for (let i = 0; i < arr.length; i++) {
        let stringArr = arr[i].split('')

        for (let j = 0; j < stringArr.length; j++) {
            if (j === 0) {
                stringArr[0] = stringArr[0].toUpperCase()
            } else {
                stringArr[j] = stringArr[j].toLowerCase()
            }
        }

        result.push(stringArr.join(''));
    }

    return result.join(' ')
}


console.log(convertString('tRuong     TaN HAI    '));