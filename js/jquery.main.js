(function ($) {
    $(window).load(function () { });
    $(function () {
        myfunload();
    });
})(jQuery);
$(document).ready(function(){
});
$(window).resize(function(){
});
function myfunload() {
    $(".panel-a").mobilepanel();
    $("#menu > li").not(".home").clone().appendTo($("#menuMobiles"));
    $("#menuMobiles input").remove();
    $("#menuMobiles > li > a").append('<span class="fa fa-chevron-circle-right iconar"></span>');
    $("#menuMobiles li li a").append('<span class="fa fa-angle-right iconl"></span>');
    $("#menu > li:last-child").addClass("last");
    $("#menu > li:first-child").addClass("fisrt");

    
    $('.banner-carousel').owlCarousel({
        loop: true,
        autoplaySpeed: 2000,
        margin: 0,
        nav: true,
		navText: true,
        dots:true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
		transitionStyle : "fade",
        items: 1
    });
	
	
	
    $(".list-cate-carousel").owlCarousel({
        loop: true,
        autoplaySpeed: 2000,
        autoWidth:true,
        margin: 0,
        nav: true,
		navText: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 7000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2
            },
            480: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 5
            },
            1200: {
                items: 6
            }
        }
    });
	
	
}

$(window).ready(function () {
    scollTop(this);
    headerfixed(this);
});
$(window).scroll(function () {
    scollTop(this);
    headerfixed(this);
});
function scollTop(e) {
    if ($(e).scrollTop() > 100) {
        $('.scroll-to-top').fadeIn();
    } else {
        $('.scroll-to-top').fadeOut();
    }
}
function headerfixed(e) {
    if ($(e).scrollTop() > 100) {
        $(".wrap-menu").addClass("menuFixed");
    } else {
        $(".wrap-menu").removeClass("menuFixed");
    }
}

$('.scroll-to-top').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
});
