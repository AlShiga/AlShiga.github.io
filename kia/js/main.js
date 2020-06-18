$(document).ready(function() {

let typed3 = new Typed(".site-subtitle span", {
  strings: [
    "Оригинальные запчасти",
    "Атестованные специалисты",
    "Реальная гарантия",
  ],
  typeSpeed: 150,
  backSpeed: 50,
  smartBackspace: true, // this is a default
  loop: true,
});
let mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  speed: 300,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
  // And if we need scrollbar
});

})
function scrollPage(target) {
    $("html,body")
      .stop()
      .animate({ scrollTop: $(target).offset().top }, 1000);
  }