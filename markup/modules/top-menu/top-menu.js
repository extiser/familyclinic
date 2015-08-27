jQuery(document).ready(function ($) {
    $('.top-menu__mobile').click(function () {
        $(this).toggleClass('active');
        $('.top-menu__list, .mask').toggleClass('active');
    });

    $('.mask').click(function () {
        $('.mask, .top-menu__list, .top-menu__mobile').removeClass('active');
    });

    $('.top-menu__item > a').click(function () {
        $(this).toggleClass('active').parent().find('.top-menu-inside').toggleClass('active');
        $('.mask').addClass('active');
    });
});