$(function () {
    ////////////////////////// Elements////////////////////










    ////////////////////////// Elements////////////////////


    ////////////// Services Slider
    $(".services__slider").slick({
        arrows: false,
        dots: true,

    });

    // Services slider dots naming
    $("#services #slick-slide-control00").text("All");
    $("#services #slick-slide-control01").text("Modelling");
    $("#services #slick-slide-control02").text("Acting");
    $("#services #slick-slide-control03").text("Corporate");
    $("#services #slick-slide-control04").text("Business");
    $("#services #slick-slide-control05").text("Professional");
    $("#services #slick-slide-control06").text("Group");
    $("#services #slick-slide-control07").text("Company");
    $("#services #slick-slide-control08").text("Officer");

    //Inner SLider
    var block = $(".block__item");
    var block0 = $(".block__item[data-index=0]");
    var block1 = $(".block__item[data-index=1]");
    var block2 = $(".block__item[data-index=2]");
    var block3 = $(".block__item[data-index=3]");
    var blocks = [block0, block1, block2, block3];

    var blockIndex = 0
    block0.addClass("active");

    block.on("click", function () {
        block.removeClass("active");
        $(this).addClass("active");
        blockIndex = parseInt($(this).attr("data-index"), 10);
        var img = blockIndex + 1
        var source = "./img/services" + img + ".jpg";
        $(".services__img").attr("src", source);
    });

    $(".inner__arrow-left").on("click", function () {
        if (blockIndex == 0) {
            blockIndex = 3
        } else {
            blockIndex--
        }
        block.removeClass("active");
        blocks[blockIndex].addClass("active");
        var img = blockIndex + 1;
        var source = "./img/services" + img + ".jpg";
        $(".services__img").attr("src", source);
    });

    $(".inner__arrow-right").on("click", function () {
        if (blockIndex == 3) {
            blockIndex = 0
        } else {
            blockIndex++
        }
        block.removeClass("active");
        blocks[blockIndex].addClass("active");
        var img = blockIndex + 1;
        var source = "./img/services" + img + ".jpg";
        $(".services__img").attr("src", source);
    });


    /////////////// Clients Slider
    $(".clients__slider").slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 720,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    })


    //////////////////Nav Links Scroll (Header and Footer)
    $("[data-section]").click(function (e) {
        e.preventDefault();
        var section = $(this).data("section");
        var sectionOffset = $(section).offset().top - 80;
        $("html, body").animate({ scrollTop: sectionOffset }, 700);
    });



    /////////////////// Active Header
    const header = $("header");
    $(window).on("load scroll resize", function () {
        var scrollPos = $(window).scrollTop();
        if (scrollPos > 300) {
            header.addClass("active");
        } else {
            header.removeClass("active");
        }
    });


    ///////////////////// Header NavBar   Open / Close
    const burger = $(".header__burger");
    const navBar = $(".header__nav");
    const navLinks = $(".header__nav a");
    burger.click(function () {
        navBar.toggleClass("active");
        burger.toggleClass("active");
    });
    navLinks.click(function () {
        navBar.removeClass("active");
        burger.removeClass("active");
    });







    ///////////////////// Blog Section Effect

    const blogSection = $("#blog");
    $(window).on("scroll resize load", function () {
        var windowBottom = $(window).scrollTop() + $(window).height();
        var windowFraction = $(window).height() / 2;
        var blogPoint = blogSection.offset().top + windowFraction;
        if (windowBottom > blogPoint) {
            blogSection.addClass("active");
        } else {
            blogSection.removeClass("active");
        }
    });


});
