jQuery(document).ready(function ($) {
    $('.header-call__mobile').click(function () {
        $(this).toggleClass('active');
        $('.header-call__list, .mask').toggleClass('active');
    });

    $('.mask').click(function () {
        $('.mask, .header-call__list, .header-call__mobile').removeClass('active');
    });
});