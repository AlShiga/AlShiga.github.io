$(window).load(function() {
    setTimeout(() => removePreload(), 1000);
});

function removePreload() {
    $('.preloader').addClass('preloader_close');
    setTimeout(() => $('.first').addClass('show'), 2000);
}