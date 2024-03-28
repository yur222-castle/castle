$(function () {

    $('.main').mouseover(function () {
        $('.sub, .bg').stop().slideDown();
    });

    $('.main').mouseout(function () {
        $('.sub, .bg').stop().slideUp();
    });



    let s = 0;
    $('.slideWrap').append($('.slider').first().clone(true));
    setInterval(function () {
        s++;
        $('.slideWrap').animate({ marginLeft: -100 * s + "%" }, 1000);
        if (s == 3) {
            setTimeout(function () {
                $('.slideWrap').animate({ marginLeft: 0 }, 0)
                s = 0;
            }, 800);
        }
    }, 3000);


    let t = 0;

    $('.tabmenu>p').click(function () {
        $('.tabmenu>p').removeClass('on');
        $(this).addClass('on');

        t = $(this).index();
        $('.con').hide();
        $('.con').eq(t).show();

    });

    $('.open').click(function () {
        $('.popup').show();
    });
    $('button').click(function () {
        $('.popup').hide();
    });

});