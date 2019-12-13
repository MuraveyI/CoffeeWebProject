$('.mobile-menu').on('click',function (e) {
    e.preventDefault();
    $('.menu-btn').toggleClass('menu-active')
    $('#mobile-menu').toggleClass('model-menu')
})
