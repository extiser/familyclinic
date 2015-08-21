jQuery(document).ready(function ($) {
    $('.prices-content-item').click(function () {
        $(this).toggleClass('active').siblings().removeClass('active');
    });
});