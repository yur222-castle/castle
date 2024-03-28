$(function () {

    $('.main').mouseover(function () {
        $(this).find('.sub').stop().slideDown();
    });
    $('.main').mouseout(function () {
        $(this).find('.sub').stop().slideUp();
    });


    let s = 0;
    $('.slideWrap').append($('.slider').first().clone(true));

    setInterval(function () {
        s++;
        $('.slideWrap').animate({ marginLeft: -100 * s + "%" }, 1000)
        if (s == 3) {
            setTimeout(function () {
                $('.slideWrap').animate({ marginLeft: 0 }, 0)
                s = 0;
            }, 800);
        }
    }, 3000);

    $('.open').click(function () {
        $('.popup').show();
    });
    $('button').click(function () {
        $('.popup').hide();
    });

});