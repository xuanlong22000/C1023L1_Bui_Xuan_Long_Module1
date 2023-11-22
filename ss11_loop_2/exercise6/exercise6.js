let rectangle = document.querySelector('.rectangle')

const widthLength = 21
const heightLength = 7

let star = ''

for (let i = 0; i < widthLength; i++) {

    star += '*'

}

for (let j = 0; j < heightLength; j++) {

    let p = document.createElement('p')
    rectangle.appendChild(p)

    if (j === 0 || j === heightLength - 1) {

        p.innerHTML = star
    } else {

        let arr = star.split('')

        for (let z = 1; z < widthLength - 1; z++) {
            arr[z] = '&nbsp; '
        }

        p.innerHTML = arr.join('')

    }

}
