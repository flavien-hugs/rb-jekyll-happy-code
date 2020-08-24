$(function () {

    /* =====================
        TESTIMONIALS SLIDER
    ======================== */

    $('.testimonials-slider').owlCarousel({
        items: 1,
        loop: true,
        margin: 30,
        autoplay: true,
        smartSpeed: 1000,
    });

    /* ===================
        DISABLE DEMO LINKS
    ====================== */

    $('[href="#"]').on('click', function (e) {
        e.preventDefault();
    });


    /* ==================
        SCROLL TOP BUTTON
    ===================== */

    $('#scrollTop').on('click', function () {
        $('html, body').animate({ scrollTop: 0}, 1000);
    });

    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 1000) {
            $('#scrollTop').addClass('active');
        } else {
            $('#scrollTop').removeClass('active');
        }
    });
});
