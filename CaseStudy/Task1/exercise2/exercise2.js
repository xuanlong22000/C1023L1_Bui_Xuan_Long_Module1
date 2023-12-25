const word = document.querySelector('#word')
const check = document.querySelector('.check')
const result = document.querySelector('.result')

check.addEventListener('click', () => {

    switch (word.value) {
        case 'o':
        case 'O':
        case 'u':
        case 'U':
        case 'i':
        case 'I':
        case 'a':
        case 'A':
        case 'e':
        case 'E':
            result.innerHTML = 'Vowel'
            break;
        default:
            result.innerHTML = 'Consonant'
            break;
    }


})
