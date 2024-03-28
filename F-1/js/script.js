$(function () {


    $('.main').mouseover(function () {
        $(this).find('.sub').stop().slideDown();
    });
    $('.main').mouseout(function () {
        $(this).find('.sub').stop().slideUp();
    });

    let t = 0;
    $('.tab_menu>p').click(function () {
        $('.tab_menu>p').removeClass('on');
        $(this).addClass('on');

        t = $(this).index();
        $('.con').hide();
        $('.con').eq(t).show();
    })


    let c = 0;
    setInterval(function () {
        let n = (c + 1) % 3;
        $('.slider').eq(c).fadeOut(1000);
        $('.slider').eq(n).fadeIn(1000);
        c = n;
    }, 4000);

    $('.open').click(function () {
        $('.popup').show();
    });
    $('button').click(function () {
        $('.popup').hide();
    });

});