let starValue = prompt('Input Star :')

const star = ['Polaris', 'Aldebaran', 'Deneb', 'Vega', 'Altair', 'Dubhe', 'Regulus']

const starGroup = ['Ursa Minor', 'Tarurus', 'Cygnus', 'Lyra', 'Aquila', 'Ursa Major', 'Leo']

function check(starName) {

    if (star.includes(starName)) {
        document.write(starGroup[star.indexOf(starName)])
    } else {
        document.write('Không tìm thấy sao')

    }

}

check(starValue)