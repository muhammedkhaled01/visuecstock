$(document).ready(function () {
    $('.header').height($(window).height());
    $(window).resize(function () {
        $('.header').height($(window).height());

    })

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 5,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 1500,
        autoplayHoverPause: true
    });
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: true,
                loop: false
            }
        }
    })
    $(".owl-carousel").owlCarousel();
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,

        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: true,
                loop: false
            }
        }
    })


});

