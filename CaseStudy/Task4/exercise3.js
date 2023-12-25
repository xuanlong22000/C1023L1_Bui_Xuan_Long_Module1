function commonCharacterCount(s1, s2) {
    let arr1 = s1.split('').sort((a, b) => a.localeCompare(b))
    let arr2 = s2.split('').sort((a, b) => a.localeCompare(b))

    let count = 0

    for (let i = 0; i < (arr1.length > arr2.length ? arr1.length : arr2.length); i++) {
        if (arr1[i] === arr2[i]) {
            count++
        }
    }

    return count
}

console.log(commonCharacterCount("aabcc", "adcaa"));