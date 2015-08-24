jQuery(document).ready(function ($) {
    $('.top-menu__mobile').click(function () {
        $(this).toggleClass('active');
        $('.top-menu__list').toggleClass('active');
    });

    $('.top-menu__item > a').click(function () {
        $(this).toggleClass('active').parent().find('.top-menu-inside').toggleClass('active');
        $('.mask').addClass('active');
    });

    $('.mask').click(function () {
        $('.mask, .top-menu-inside, .top-menu__item > a').removeClass('active');
    });
});