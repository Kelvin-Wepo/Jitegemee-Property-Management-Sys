const date = new Date();
document.querySelector('.year').innerHTML = date.getFullYear();



 // :: 3.0 Sliders Active Code
 if ($.fn.owlCarousel) {
    var welcomeSlide = $('.hero-slides');
    var aboutSlide = $('.about-slides');

    welcomeSlide.owlCarousel({
        items: 1,
        margin: 0,
        loop: true,
        nav: true,
        navText: ['Prev', 'Next'],
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000
    });

    welcomeSlide.on('translate.owl.carousel', function () {
        var slideLayer = $("[data-animation]");
        slideLayer.each(function () {
            var anim_name = $(this).data('animation');
            $(this).removeClass('animated ' + anim_name).css('opacity', '0');
        });
    });

    welcomeSlide.on('translated.owl.carousel', function () {
        var slideLayer = welcomeSlide.find('.owl-item.active').find("[data-animation]");
        slideLayer.each(function () {
            var anim_name = $(this).data('animation');
            $(this).addClass('animated ' + anim_name).css('opacity', '1');
        });
    });

    $("[data-delay]").each(function () {
        var anim_del = $(this).data('delay');
        $(this).css('animation-delay', anim_del);
    });

    $("[data-duration]").each(function () {
        var anim_dur = $(this).data('duration');
        $(this).css('animation-duration', anim_dur);
    });

    aboutSlide.owlCarousel({
        items: 1,
        margin: 0,
        loop: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000
    });

    $('.megamenu-slides').owlCarousel({
        items: 1,
        margin: 0,
        loop: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        dots: true,
        autoplay: true,
        autoplayTimeout: 2000,
        smartSpeed: 1000
    });
}