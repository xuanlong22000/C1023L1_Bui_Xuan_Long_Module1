let btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    let numberLength = +prompt('Input number : ')

    let listNumber = Array.from(Array(numberLength + 1).keys())


    let randomNumber = listNumber[Math.floor(Math.random() * listNumber.length)]

    for (let i = 0; i < 3; i++) {
        let numberChecked = +prompt('Input number that you want to check :')

        if (randomNumber === numberChecked) {
            alert('True !! Complete')
            document.write('<h1>Win roi</h1>')
            break
        } else if (randomNumber > numberChecked) {
            alert('So nhap vao lon hon')

        } else if (randomNumber < numberChecked) {
            alert('So nhap vao nho hon')

        }

        if (i === 2) {
            alert('Het 3 luot choi')

            document.write('Het 3 luot roi')
        }


    }
})