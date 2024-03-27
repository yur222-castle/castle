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
        $('.tabcon').hide();
        $('.tabcon').eq(t).show();
    });

    $('.open').click(function () {
        $('.popup').show();
    });
    $('button').click(function () {
        $('.popup').hide();
    });


    let c = 0;
    setInterval(function () {
        let n = (c + 1) % 3;
        $('.slider').eq(c).fadeOut(1000);
        $('.slider').eq(n).fadeIn(1000);
        c = n;
    }, 3000);

    // let p = 0;

    // setInterval(function () {
    //     let q = (p + 1) % 3;
    //     $('.slider>p').eq(p).fadeOut(1000);
    //     $('.slider>p').eq(q).fadeIn(1000);
    //     p = q;
    // }, 3000);
});
