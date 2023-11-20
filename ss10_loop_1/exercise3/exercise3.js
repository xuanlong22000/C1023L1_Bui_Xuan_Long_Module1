let result = document.querySelector('.result')

for (let i = 0; i < 100; i++) {
    let p = document.createElement('p')
    result.appendChild(p)
    p.innerHTML = i

    if (i === 99) {
        alert('Completed')
    }
}