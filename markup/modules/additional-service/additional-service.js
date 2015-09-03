jQuery(document).ready(function ($) {
    $('.additional-service-list').slick({
        accessibility: false,
        autoplay: false,
        autoplaySpeed: 3000,
        speed: 1000,
        infinite: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: 0,
        pauseOnHover: false,
        centerMode: true,
        prevArrow: '<span class="slick-prev slick-nav slick-nav--prev" aria-label="previous"></span>',
        nextArrow: '<span class="slick-next slick-nav slick-nav--next" aria-label="next"></span>',
        responsive: [{
            breakpoint: 960,
            settings: {
                arrows: true,
                slidesToShow: 1,
                centerMode: false,
                draggable: true
            }
        }]
    });
});
