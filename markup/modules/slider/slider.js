jQuery(document).ready(function ($) {
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1000,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        initialSlide: 0
    });
});