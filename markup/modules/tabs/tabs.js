jQuery(document).ready(function ($) {
    $('.news').slick({
        accessibility: false,
        autoplay: false,
        autoplaySpeed: 3000,
        speed: 1000,
        infinite: true,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerPadding: 0,
        pauseOnHover: false,
        prevArrow: '<span class="slick-prev slick-nav slick-nav--prev" aria-label="previous"></span>',
        nextArrow: '<span class="slick-next slick-nav slick-nav--next" aria-label="next"></span>',
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: true,
                centerMode: true,
                slidesToShow: 1
            }
        }]
    });

    $('.tabs-header__title').click(function () {
        var itemCount = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.tabs-box').find('.tabs-box__item').eq(itemCount).addClass('active').siblings().removeClass('active');
    });
});
