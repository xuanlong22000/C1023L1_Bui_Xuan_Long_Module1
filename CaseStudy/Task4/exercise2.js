function differentSymbolsNaive(s) {

    let arr = s.split('')

    return [...new Set(arr)].length
}

console.log(differentSymbolsNaive('cabca'));