$(document).ready(function () {
    "use strict";

    // Dropdown hover effect
    $("ul.navbar-nav li.dropdown").hover(
        function () {
            $(this).find(".sub-menu").stop(true, true).delay(200).fadeIn(500);
        },
        function () {
            $(this).find(".sub-menu").stop(true, true).delay(200).fadeOut(500);
        }
    );

    // Meanmenu initialization
    $(".mainmenu-area nav").meanmenu();

    // ScrollUp initialization
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: "linear",
        scrollSpeed: 900,
        animation: "fade"
    });

    // Dropdown menu hover effect for wider screens
    if ($(window).width() > 991) {
        $("ul.navbar-nav li.dropdown").hover(
            function () {
                $(this).find(".dropdown-menu").stop(true, true).delay(200).fadeIn(500);
            },
            function () {
                $(this).find(".dropdown-menu").stop(true, true).delay(200).fadeOut(500);
            }
        );
    }

    // WOW.js initialization
    new WOW({
        animateClass: "animated",
        offset: 100
    }).init();

    // Animate numbers on scroll
    $(window).on("load scroll", function () {
        $("#dvLoading").fadeOut("fast");

        $(".animateNumber").each(function () {
            const number = $(this).attr("data-num");
            const viewportBottom = $(document).scrollTop() + $(window).height();
            const elementTop = $(this).offset().top;

            if (viewportBottom > elementTop && !$(this).hasClass("active")) {
                $(this).addClass("active").animateNumber({ number: number }, 2000);
            }
        });

        $(".animateProcent").each(function () {
            const number = $(this).attr("data-num");
            const numberStep = $.animateNumber.numberStepFactories.append("%");
            const viewportBottom = $(document).scrollTop() + $(window).height();
            const elementTop = $(this).offset().top;

            if (viewportBottom > elementTop && !$(this).hasClass("active")) {
                $(this).addClass("active").animateNumber({ number: number, numberStep: numberStep }, 2000);
                $(this).css("width", number + "%");
            }
        });
    });

    // Countdown initialization
    if ($(".count-down").length) {
        const year = parseInt($(".count-down").attr("data-countdown-year"), 10);
        const month = parseInt($(".count-down").attr("data-countdown-month"), 10) - 1;
        const day = parseInt($(".count-down").attr("data-countdown-day"), 10);

        $(".count-down").countdown({
            until: new Date(year, month, day),
            padZeroes: true
        });
    }
});
