jQuery(document).ready(function ($) {
    $('.slider').slick({
        accessibility: false,
        autoplay: false,
        autoplaySpeed: 3000,
        speed: 1000,
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: 0,
        pauseOnHover: false,
        initialSlide: 1
        //prevArrow: '<span class="slick-prev slick-nav slick-nav--prev" aria-label="previous"></span>',
        //nextArrow: '<span class="slick-next slick-nav slick-nav--next" aria-label="next"></span>'
    });
});
