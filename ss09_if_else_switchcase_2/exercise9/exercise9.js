let sideA = document.querySelector('#sideA')
let sideB = document.querySelector('#sideB')
let sideC = document.querySelector('#sideC')


let btn = document.querySelector('.btn')

let result = document.querySelector('.result')

btn.addEventListener('click', () => {
    if ((+sideA.value > 0 && +sideB.value > 0 && +sideC.value > 0)
        && ((+sideA.value + +sideB.value > +sideC.value)
            || (+sideB.value + +sideC.value > +sideA.value)
            || (+sideA.value + +sideC.value > +sideB.value))) {

        result.innerHTML = 'Hinh tam giac'

    } else {
        result.innerHTML = 'Khong phai tam giac'
    }
})