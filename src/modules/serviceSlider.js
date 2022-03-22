const serviceSlider = () => {
    const serviceItem = document.querySelectorAll('.services-item')
    const arrowRight = document.querySelector('.arrow-right')
    const arrowLeft = document.querySelector('.arrow-left')

    let position = 3 //сколько будет видно карточек
    let start = 0

    //проходимся по карточкам и добавляем display none
    serviceItem.forEach(item => {
        if (start < position) {
            start++
        } else {
            item.style.display = 'none'
        }
    })

    start = 0 // обнуляем
    arrowLeft.addEventListener('click', () => {
        if (start > 0) {
            start = start - 1
            position = position - 1
            serviceItem[start].style.display = 'block'
            serviceItem[position].style.display = 'none'
        }
    })
    arrowRight.addEventListener('click', () => {
        if (position < serviceItem.length) {
            serviceItem[start++].style.display = 'none'
            serviceItem[position++].style.display = 'block'
        }
    })
}

export default serviceSlider