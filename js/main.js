$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        items: 1, /*то еоличество, которых можно увидеть*/
        loop: true,
        margin: 214,
        320: {
            items: 1
        }

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


const buttons = document.querySelector('.btn1')
const second = document.querySelector('.btn2')

buttons.addEventListener('click', (e) => {
    second.classList.remove('topical')
    e.target.classList.add('topical')
})

second.addEventListener('click', (e) =>  {
    buttons.classList.remove('topical')
    e.target.classList.add('topical')
})


