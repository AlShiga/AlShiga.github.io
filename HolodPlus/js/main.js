$(function(){
    $('.img-big-btn').click(function(event) {
        let src = $(this).css('background-image');

        console.log(src)
        src = src.replace('url("file:///', '');
        src = src.replace('")', '');
        console.log(src)
        $('body').append(`<div class="img-big">
         <div class="img-big__overlay">
         </div><div class="img-big__img">
         <img src=${src}>
         <div class="img-big__close">
         <button type="button" class="close" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button></i></div></div></div>`);
        $('.img-big__overlay, .img-big__img').fadeIn('fast');
       });
    
      $('body').on('click', '.img-big__close, .img-big__overlay', function(event) {
        event.preventDefault();
        $('.img-big__overlay, .img-big__img').fadeOut('fast', function() {
          $('.img-big, .img-big__close, .img-big__img, .img-big__overlay').remove();
        });
    
      });
});