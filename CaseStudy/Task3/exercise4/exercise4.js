while (true) {
    const data = [
        {
            id: 1,
            drink: 'cafe'
        },
        {
            id: 2,
            drink: 'cam vắt'
        },
        {
            id: 3,
            drink: 'nước ép cà rốt'
        },
        {
            id: 4,
            drink: 'nước ép cà chua'
        },
        {
            id: 5,
            drink: 'nước lọc'
        },
        {
            id: 6,
            drink: 'nước dừa'
        }
    ]

    let order = prompt('1 (cafe), 2 (cam vắt), 3(nước ép cà rốt), 4(nước ép cà chua),5(nước lọc), 6(nước dừa), 7(thoát gọi món), 1 ly 15k')


    if (+order === 7) {
        break;
    }

    if (data.some(item => item.id === +order)) {

        let numberOfOrder = prompt(`So luong`)

        if (+numberOfOrder) {
            alert(`Prices of total of ${data.find(item => item.id === +order).drink} is ${+numberOfOrder * 15000}`)
        }
    }

}