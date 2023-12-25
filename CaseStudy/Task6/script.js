const add = document.querySelector('.add')
const change = document.querySelector('.change')
const destroy = document.querySelector('.delete')
const table = document.querySelector('.table')
const rowData = document.querySelector('.rowData')

let checkId = '10'
let number = 1
let beforeId = 'HV-000'
let id = `${beforeId}${number}`

let data = []

const header = `
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Class</th>
        <th>Email</th>
        <th>Dob</th>
        <th>Module</th>
    </tr>
`

function render() {
    const html = data.map(item => `
        <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.classStudent}</td>
            <td>${item.email}</td>
            <td>${item.dob}</td>
            <td>${item.module}</td>
        </tr>
    `).join('')


    table.innerHTML = header + html
    table.style.display = 'table'
}

add.addEventListener('click', function () {
    let name = prompt('Name')
    for (let i = 0; ; i++) {
        if (name.length <= 50) {
            break
        }
        alert('Ten khong duoc qua 50 ki tu')
        name = prompt('Name')

    }

    let classStudent = prompt('Class')
    let email = prompt('Email')
    let dob = prompt('Date Of Birth dd/mm/yyyy')
    let module = prompt('Module')

    for (let i = 0; ; i++) {
        if (module >= 1 && module <= 6) {
            break
        }
        alert('Module phai tu 1 to 6')
        module = prompt('Module')

    }

    data.push({
        id,
        name,
        classStudent,
        email,
        dob,
        module
    })

    render()

    number++

    if (number === +checkId) {
        checkId += '0'
        beforeId = beforeId.replace('0', '')
    }

    id = `${beforeId}${number}`

})

change.addEventListener('click', function () {
    const id = prompt('Input Id')
    const dataFilter = data.find(item => item.id === id)

    if (dataFilter) {

        let name = prompt('Name', dataFilter.name)
        let classStudent = prompt('Class', dataFilter.classStudent)
        let email = prompt('Email', dataFilter.email)
        let dob = prompt('Date Of Birth dd/mm/yyyy', dataFilter.dob)
        let module = prompt('Module', dataFilter.module)

        const index = data.findIndex(item => item.id === id)

        data[index] = {
            id,
            name,
            classStudent,
            email,
            dob,
            module
        }

        render()

    } else {
        alert('User is available')
    }
})

destroy.addEventListener('click', function () {
    const id = prompt('Input Id')
    const dataFilter = data.find(item => item.id === id)

    if (dataFilter) {
        let confirmMain = confirm(`Do you want to delete ${dataFilter.id}`)
        data = confirmMain ? data.filter(item => item.id !== id) : data

        render()
    } else {
        alert('User is available')
    }
})