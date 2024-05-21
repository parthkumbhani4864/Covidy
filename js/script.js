$(window).scroll(function(){
    var sticky = $('.sticky'),
    scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});

$('.menu li > a').click(function(){
    $('.menu li a').removeClass('active');
    $(this).addClass('active')
});



$(document).ready(function(){
    setTimeout (function(){
        $('.preloader').fadeOut();
    },2000)
})