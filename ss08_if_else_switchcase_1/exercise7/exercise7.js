let sales = document.querySelector('#sales')


let btn = document.querySelector('.btn')

let result = document.querySelector('.result')

let mainSale

btn.addEventListener('click', () => {
    mainSale = +sales.value * 0.2
    result.innerHTML = `Doanh thu voi 0,2 hoa hong la ${mainSale}`
})
