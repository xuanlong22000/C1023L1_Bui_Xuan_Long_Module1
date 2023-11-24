let word = document.querySelector('#word')

let btn = document.querySelector('.btn')

let result = document.querySelector('.result')



const data = [
    {
        vie: 'chuối',
        eng: 'banana'
    },
    {
        vie: 'táo',
        eng: 'apple'
    },
    {
        vie: 'xe hơi',
        eng: 'car'
    }
]

btn.addEventListener('click', () => {
    result.innerHTML = data.find(item => item.vie === word.value).eng
})