
document.addEventListener("DOMContentLoaded", function(e) {
  console.log("[eq")
  let accord = document.querySelectorAll(".accordion-container")
  initAccordeon(accord)
})

function initAccordeon(accord){
  if(!accord.length)return;
  new Accordion('.accordion-container',{
    duration: 400,
    showMultiple: false,
    onOpen: function() {

    },
    onClose: function() {

    }
  });

}

var swiperH = new Swiper(".histSwiper", {
  initialSlide:1,
  grabCursor: true,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },
  // loop: true,
});
var swiperT1 = new Swiper(".team1Swiper", {
  initialSlide:0,
  grabCursor: true,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },
  // loop: true,
});
var swiperT2 = new Swiper(".team2Swiper", {
  initialSlide:0,
  grabCursor: true,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },
  // loop: true,
});

document.querySelectorAll('.team1Swiper__pers').forEach((el)=>{
  el.addEventListener('click',()=>{
    console.log('click')
  })
})