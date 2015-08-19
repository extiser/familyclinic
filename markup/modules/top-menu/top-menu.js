jQuery(document).ready(function ($) {
    $('.top-menu__mobile').click(function () {
        $(this).toggleClass('active');
        $('.top-menu__list').toggleClass('active');
    });
});