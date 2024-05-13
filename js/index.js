// h_banner start
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: 5000,//可选选项，自动滑动
        loop : true,
        pagination : '.swiper-pagination',
    });
// h_banner end

// b_top start
    var mySwiper = new Swiper('.t-swiper-container', {
    slidesPerView : 4.5,
    centeredSlides : false,
    });
// b_top end

// b_insert_2 start_com
    var mySwiper = new Swiper('.swiper-container-i2', {
        autoplay: 5000,//可选选项，自动滑动
        loop : true,
        pagination : '.swiper-pagination',
    });
// b_insert_2 end_com

// f_bottom start
( function() {
    var $like = $('.b_gl_wrap');
    var $a1 = $('.f_bottom_wrap .a1');
    var onoff = false;
    $a1.find('.youLike').show();
    $a1.click( function() {
        onoff = !onoff;
        if(onoff) {
            $(this).find('.homePage').show().siblings().hide();
            $('body,html').stop().animate( {scrollTop:$like.offset().top - 250 + 'px'},500 );

        }else{
            $(this).find('.youLike').show().siblings().hide();
            $('body,html').stop().animate( {scrollTop: 0 + 'px'},10 );
        }
    } );
} ) ();
// f_bottom end

// f_right start
( function() {
    var $right_icon = $('.f_right_wrap');
    $(window).scroll( function() {//触发滚动事件
        if($(document).scrollTop()>500) {
            $right_icon.show();
        }else{
            $right_icon.hide();
        }
    } );

    $right_icon.click( function() {
        $(this).hide();
        $('body,html').stop().animate( {scrollTop: 0 + 'px'},10 );

    } );

} ) ();
// f_right end






