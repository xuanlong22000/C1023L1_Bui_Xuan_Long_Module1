const number = document.querySelector('#number')

const result = document.querySelector('.result')



function ToResult() {

    if (+number.value % 2 === 0) {
        result.innerHTML = 'So chan'
    } else {
        result.innerHTML = 'So le'
    }
}