function changeBurgerMenu() {
    let modalW = document.querySelector('.modal-window')
    modalW.classList.toggle('open-burger')

}

function changeRP() {
    let RP = document.querySelector('.Registration-Page')
    RP.classList.toggle('openRP')
    let arrowModal = document.querySelector('.mw-array');
    arrowModal.classList.toggle('turnArrow')
}

function changeBLOG() {
    let BLOG = document.querySelector('.BLOG')
    BLOG.classList.toggle('openBLOG')
    let arrowModal = document.querySelector('.mw-array2');
    arrowModal.classList.toggle('turnArrow')   
}