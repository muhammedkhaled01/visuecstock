$(document).ready(function () {

    $('.header-enterprise').height($(window).height());
    $(window).resize(function () {
        $('.header-enterprise').height($(window).height());

    })
    $(".check-tap .item").click(function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        // $(this).addClass("active").siblings('item').removeClass("active");
        // console.log("hi");
    });

});

