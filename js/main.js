$('.menu-toggle').on('click', function() {

    $('.menu').toggleClass('open')
    $('.menu2').toggleClass('open2')

    return false

})

let vh = window.innerHeight * 0.01;

document.documentElement.style.setProperty('--vh', `${vh}px`);