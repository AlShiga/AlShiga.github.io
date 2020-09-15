$(window).load(function() {
    setTimeout(() => removePreload(), 1000);
});

function removePreload() {
    if ($(".preloader").length) {
        $('.preloader').addClass('preloader_close');
        setTimeout(() => $('body').addClass('show'), 2000);
    } else {
        setTimeout(() => $('body').addClass('show'), 200);
    }

}