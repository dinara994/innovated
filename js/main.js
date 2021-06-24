$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        items: 1, /*то еоличество, которых можно увидеть*/
        loop: true,
        margin: 214,

    })
});


const modalBtn = document.querySelector('.modal-btn')
const modalWrapper = document.querySelector('.modal-wrapper')
const modalClose = document.querySelector('.modal-close')

modalBtn.addEventListener('click', () => {
    modalWrapper.classList.add('show')
})

modalClose.addEventListener('click', () => {
    modalWrapper.classList.remove('show')
})

console.log('>>>')

const firstBtn = document.querySelector('.btn1')
const secondBtn = document.querySelector('.btn2')
const modalClose = document.querySelector('.modal-close')


firstBtn.addEventListener('click', (e) => {
    setActive(e)
    console.log('<<<')
})


function setActive(e) {
    e.target.classList.add('active')

}
