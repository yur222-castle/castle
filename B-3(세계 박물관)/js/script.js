$(function () {

    $('.main').mouseover(function () {
        $(this).find('.sub').stop().slideDown();
    });

    $('.main').mouseout(function () {
        $(this).find('.sub').stop().slideUp();
    });



    $('.on').click(function () {
        $('.popup').show();
    });
    $('button').click(function () {
        $('.popup').hide();
    });


    let s = 0;
    $('.slideWrap').append($('.slider').first().clone(true));

    setInterval(function () {
        s++;
        $('.slideWrap').animate({ marginTop: -300 * s + "px" }, 1000);

        if (s == 3) {
            setTimeout(function () {
                $('.slideWrap').animate({ marginTop: 0 }, 0)
                s = 0;
            }, 800);
        }

    }, 3000);
});