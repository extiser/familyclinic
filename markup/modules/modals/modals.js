jQuery(document).ready(function ($) {
    $('a[data-click="modal"]').click(function () {
        var modalName = $(this).attr('href');
        $(modalName).addClass('active');
        $('.modal-mask').addClass('active');
    });
    $('.modal-mask, .modal__close').click(function () {
        $('.modal-mask, .modal').removeClass('active');
    });
});