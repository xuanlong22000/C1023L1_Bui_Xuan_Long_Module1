const positiveIntegers = (number) => {
    return (number % 1 === 0 && number > 0) ? true : false
}

console.log(positiveIntegers(2.9));