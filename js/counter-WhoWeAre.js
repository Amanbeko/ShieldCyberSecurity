let numbers = document.querySelectorAll('.section_2_2_nmb')
numbers.forEach(number => {
    number.innerHTML = 0
    let endValue = number.getAttribute('data-num')
    let increament = endValue / 19
    function changeNumber() {
        let value = +number.innerHTML
        if (value < endValue) {
            value += Math.round(increament)
            number.innerHTML = value
            setTimeout(changeNumber, 100)
        }else(
            number.innerHTML = endValue
        )
    }
    changeNumber()
})