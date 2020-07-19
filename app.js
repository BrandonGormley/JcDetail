// navbar background color change on scroll

window.scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll < 300) {
        $('.bg-dark').css('background', 'transparent!important');
    } else {
        $('.bg-dark').css('background', 'rgba(23, 162, 184, 0.9)!important');
    }
});