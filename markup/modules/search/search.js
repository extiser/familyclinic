jQuery(document).ready(function ($) {
    $('.search__mobile').click(function () {
        $(this).toggleClass('active');
        $('.search__wrapper').toggleClass('active');
        setTimeout(function () {
            $('.search__field').focus();
        }, 400);
    });
});