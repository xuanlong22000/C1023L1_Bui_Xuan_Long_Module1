let btnYes = document.querySelector('.btnYes')
let btnNo = document.querySelector('.btnNo')


btnYes.addEventListener('click', () => {
    alert('<3')
})

btnNo.addEventListener('mouseover', () => {

    btnNo.style.position = 'absolute'
    btnNo.style.top = `${Math.floor(Math.random() * 1000)}px`
    btnNo.style.left = `${Math.floor(Math.random() * 1000)}px`

})
