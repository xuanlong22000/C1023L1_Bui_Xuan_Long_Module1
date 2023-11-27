const swapIntegers = (number1, number2) => {
    let tmp
    tmp = number1
    number1 = number2
    number2 = tmp

    return `${number1} ${number2}`
}

console.log(swapIntegers(2, 3));