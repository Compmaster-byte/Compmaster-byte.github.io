// mobile burger 
$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .menu').toggleClass('active');
        $('.body').toggleClass('lock');
    });
});
// scroll 
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if ($(this).scrollTop() > 10) { // Scroll up 10px to init fill
        $('.scrolldown').fadeOut(400);
    } else {
        $('.scrolldown').fadeIn(400);
    }
});