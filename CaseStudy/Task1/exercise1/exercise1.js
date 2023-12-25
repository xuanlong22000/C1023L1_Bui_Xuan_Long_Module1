const salary = document.querySelector('#salary')
const calculate = document.querySelector('.calculate')
const result = document.querySelector('.result')


calculate.addEventListener('click', () => {
    if (salary.value < 7000000) {
        let mainResult = salary.value - (salary.value * 5 / 100)

        result.innerHTML = `Salary is ${mainResult}`
    }

    if (salary.value >= 7000000 && salary.value < 15000000) {
        let mainResult = salary.value - (salary.value * 10 / 100)

        result.innerHTML = `Salary is ${mainResult}`
    }

    if (salary.value >= 15000000) {
        let mainResult = salary.value - (salary.value * 20 / 100)

        result.innerHTML = `Salary is ${mainResult}`
    }
})

