let table = document.querySelector('.table')

for (let i = 1; i < 10; i++) {
    let tr = document.createElement('tr')
    for (let j = 2; j < 10; j++) {
        let td = document.createElement('td')
        tr.appendChild(td)
        td.innerHTML = `${i} x ${j} = ${i * j}`
    }
    table.appendChild(tr)
}