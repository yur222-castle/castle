$(function () {


    // 메뉴 슬라이드
    $('.main').mouseover(function () {
        $('.submenu').stop().slideDown();
    });
    $('.main').mouseout(function () {
        $('.submenu').stop().slideUp();
    });

    // 모달팝업
    $('.popup-open').click(function () {
        $('.popup').show();
    });
    $('button').click(function () {
        $('.popup').hide();
    });

    // 이미지 페이드인앤아웃
    let c = 0;
    setInterval(function () {
        let n = (c + 1) % 3;
        $('#visual ul li').eq(c).fadeOut(1000);
        $('#visual ul li').eq(n).fadeIn(1000);

        c = n

    }, 3000);

    // var n = 0;
    // function visual() {
    //     if (n < 2) {
    //         n++;
    //     }
    //     else {
    //         n = 0;
    //     }
    //     $('#visual ul li').fadeOut(1000);
    //     $('#visual ul li').eq(n).fadeIn(1000);
    // }

    // setInterval(visual, 3000)

});