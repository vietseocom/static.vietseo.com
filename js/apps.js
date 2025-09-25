/* Validation form */

//ValidationFormSelf("validation-newsletter");

// ValidationFormSelf("validation-cart");

// ValidationFormSelf("validation-user");

// ValidationFormSelf("validation-contact");

/* Exists */

$.fn.exists = function(){

    return this.length;

};

if($(".khung-thietke").exists())

{

    $(".khung-thietke").each(function(){

        var id_list = $(this).data('id');

        loadPagingAjax("ajax/ajax_thietke.php?perpage=8&idList="+id_list,".khung-thietke[data-id="+id_list+"] .load-thietke");

    });

    $('body').on('click','.pagination-ajax a', function(){

        var elm = $(this).parents('.khung-thietke');

        $('html,body').animate({

            scrollTop: elm.offset().top - 70

        }, 'slow');

    });

    

}

if($(".load-search").exists())

{

    var key = $(".load-search").data('key');

    var type = $('.tab-search li.active').data('type');

    loadPagingAjax("ajax/ajax_search.php?perpage=16&key="+key+"&type="+type,".load-search");

    $(".tab-search li").click(function(){

        $(this).addClass('active').siblings().removeClass('active');

        type = $(this).data('type');

        loadPagingAjax("ajax/ajax_search.php?perpage=16&key="+key+"&type="+type,".load-search");

    });

}

/* Back to top */

NN_FRAMEWORK.BackToTop = function(){

    $(window).scroll(function(){

        if(!$('.scrollToTop').length) $(".copyright").append('<div class="scrollToTop"><img src="'+GOTOP+'" alt="Go Top"/></div>');

        if($(this).scrollTop() > 100) $('.scrollToTop').fadeIn();

        else $('.scrollToTop').fadeOut();

    });

    $('body').on("click",".scrollToTop",function() {

        $('html, body').animate({scrollTop : 0},800);

        return false; 

    });

};

/* Alt images */

NN_FRAMEWORK.AltImages = function(){

    $('img').each(function(index, element) {

        if(!$(this).attr('alt') || $(this).attr('alt')=='')

        {

            $(this).attr('alt',WEBSITE_NAME);

        }

    });

};

/* Fix menu */

NN_FRAMEWORK.FixMenu = function(){

    $(window).scroll(function(){

        if($(window).scrollTop() >= $('.header').height()) 

        {   

            $(".menu").addClass('fixed');

            $(".header-bot").addClass('fixed');

        }

        else 

        {   

            $(".menu").removeClass('fixed');

            $(".header-bot").removeClass('fixed');

        }

    });

    $().ready(function () {

        setTimeout(function () {

            $(".mask").addClass("hideg");

            $("#loading").fadeOut();

        }, 600);

    });

};

/* Run slick */

NN_FRAMEWORK.run_slick = function(){
    $('.tintuc-slide').slick({     

        autoplay: true,

        autoplaySpeed: 3000,

        dots: false,

        infinite: true,

        speed: 500,

        slidesToShow: 3,

        slidesToScroll: 1,

        vertical: true,

        verticalSwiping: true,

        arrows: false,

        responsive: [

            {

              breakpoint: 750,

              settings: {

                slidesToShow: 3,

              }

            },{

              breakpoint: 360,

              settings: {

                slidesToShow: 3,

              }

            }

        ]

    });
    if(sceen_width < 1000) {

       
        $('.slick-tintuc').slick({     

            autoplay: true,

            autoplaySpeed: 3000,

            dots: false,

            infinite: true,

            speed: 500,

            slidesToShow: 3,

            slidesToScroll: 1,

            vertical: false,

            verticalSwiping: false,

            arrows: false,

            responsive: [

                {

                  breakpoint: 750,

                  settings: {

                    slidesToShow: 2,

                  }

                },{

                  breakpoint: 360,

                  settings: {

                    slidesToShow: 1,

                  }

                }

            ]

        });

        $('.slick-service').slick({     

            autoplay: true,

            autoplaySpeed: 3000,

            dots: false,

            infinite: true,

            speed: 500,

            slidesToShow: 4,

            slidesToScroll: 1,

            vertical: false,

            verticalSwiping: false,

            arrows: false,

            responsive: [

                {

                  breakpoint: 750,

                  settings: {

                    slidesToShow: 3,

                  }

                },{

                  breakpoint: 600,

                  settings: {

                    slidesToShow: 2,

                  }

                }

            ]

        });

    }

    if($('.slick-quangcao').exists())

    {

        $('.slick-quangcao').slick({     

            autoplay: true,

            autoplaySpeed: 3000,

            dots: false,

            infinite: true,

            speed: 500,

            slidesToShow: 1,

            slidesToScroll: 1,

            vertical: false,

            verticalSwiping: false,

            arrows: false,

        });

    }

    if($('.pro-detail-gallery').exists())

    {

        $('.pro-detail-gallery').slick({     

            autoplay: true,

            autoplaySpeed: 3000,

            dots: false,

            infinite: false,

            speed: 500,

            slidesToShow: 6,

            slidesToScroll: 1,

            vertical: false,

            verticalSwiping: false,

            arrows: false,

        });

    }

};

/* pro-detail-tabs */

NN_FRAMEWORK.Tabs = function(){

    if($(".pro-detail-ul").exists())

    {

        $(".pro-detail-ul li").click(function(){

            var tabs = $(this).data("tabs");

            $(".pro-detail-content-tabs, .pro-detail-ul li").removeClass("active");

            $(this).addClass("active");

            $("."+tabs).addClass("active");

        });

    }

};

NN_FRAMEWORK.search_res = function(){

    if($(".icon-search").exists())

    {

        $(".icon-search").click(function(){

            if($(this).hasClass('active'))

            {

                $(this).removeClass('active');

                $(".search-grid").stop(true,true).animate({opacity: "0",width: "0px"}, 200);   

            }

            else

            {

                $(this).addClass('active');                            

                $(".search-grid").stop(true,true).animate({opacity: "1",width: "230px"}, 200);

            }

            document.getElementById($(this).next().find("input").attr('id')).focus();

            $('.icon-search i').toggleClass('fa fa-search fa fa-times');

        });

    }

};

/* Mmenu */

NN_FRAMEWORK.responsive = function(){

    if($("nav#menu_mm").exists())

    {

        $(function() {

            $('nav#menu_mm').mmenu({

              extensions        : [ 'effect-slide-menu', 'shadow-page', 'shadow-panels', 'theme-dark' ],

              keyboardNavigation    : false,

              screenReader      : false,

              counters        : true,

              navbar  : {

                title : 'Menu Mobile'

              }

            });

        });

    }

    if($('.goidien').exists())

    {

        $('.goidien').click(function(event) {

            $(this).toggleClass('actived').siblings().removeClass('actived');

        });

    }

};

/* Nhan Tin */

NN_FRAMEWORK.dknhantin = function(){

    if($('.frm-nhantin').exists())

    {

        $(".frm-nhantin").submit(function(){

            var ten = $('.frm-nhantin .inp[name=ten]').val();

            var email = $('.frm-nhantin .inp[name=email]').val();

            var dienthoai = $('.frm-nhantin .inp[name=dienthoai]').val();

            var noidung = $('.frm-nhantin .inp[name=noidung]').val();

            $('.frm-nhantin .loading').fadeIn();

            grecaptcha.ready(function() {

                grecaptcha.execute(sitekey, {action: 'Newsletter'}).then(function(token) {

                  $.ajax ({

                    type: "POST",

                    url: "ajax/ajax_newsletter.php",

                    data: {ten, dienthoai, email, noidung, recaptcha_response:token},

                    success: function(result) { 

                        if(result==0){

                            $('.frm-nhantin .inp').val('');

                            toastr["success"]("Đăng ký nhận tin thành công. Chúng tôi sẽ liên hệ với bạn sớm.");

                        } else if(result==1){

                            toastr["warning"]("Email này đã đăng ký.");

                            $('.frm-nhantin .inp').val('');

                        } else if(result==2){

                            toastr["warning"]("Đăng ký nhận tin thất bại. Vui lòng thử lại sau.");

                            $('.frm-nhantin .inp').val('');

                        }

                        $('.frm-nhantin .loading').fadeOut();

                    }

                  });

                });

            });

            return false;

        });

    }

};

/* Nhan Tin */

NN_FRAMEWORK.translate = function(){

    if($('.translate').exists())

    {

        $('.translate .icon').click(function(){

            $('.translate .flag').slideToggle( "slow" );

        });

        $('.translate .flag img').click(function(){

            var src = $(this).attr('src');

            $('.translate .icon img').attr('src',src);

            $('.translate .flag').fadeOut();

        });

    }

};

/* Ready */

$(document).ready(function(){

    NN_FRAMEWORK.AltImages();

    NN_FRAMEWORK.BackToTop();

    NN_FRAMEWORK.FixMenu();

    NN_FRAMEWORK.run_slick();

    NN_FRAMEWORK.Tabs();

    NN_FRAMEWORK.search_res();

    NN_FRAMEWORK.responsive();

    NN_FRAMEWORK.dknhantin();

    NN_FRAMEWORK.translate();

});