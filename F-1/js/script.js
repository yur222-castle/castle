$(function () {


    $('.main').mouseover(function () {
        $(this).find('.sub').stop().slideDown();
    });
    $('.main').mouseout(function () {
        $(this).find('.sub').stop().slideUp();
    });



    $('.open').click(function () {
        $('.popup').show();

    });

    $('button').click(function () {
        $('.popup').hide();

    });


    let t = 0;
    $('.tabmenu>p').click(function () {
        $('.tabmenu>p').removeClass('on');
        $(this).addClass('on')

        t = $(this).index();
        $('.con').hide();
        $('.con').eq(t).show();
    });



    let c = 0;
    setInterval(function () {
        let n = (c + 1) % 3;
        $('.slider').eq(c).fadeOut(1200);
        $('.slider').eq(n).fadeIn(1200);
        c = n;
    }, 3000);

});