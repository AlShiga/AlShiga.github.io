function scrollPage(target){
  $('html,body').stop().animate({ scrollTop: $(target).offset().top }, 1000);
}