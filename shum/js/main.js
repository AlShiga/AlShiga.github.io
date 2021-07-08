
document.addEventListener("DOMContentLoaded", function(e) {
  console.log("[eq")
  let accord = document.querySelectorAll(".accordion-container")
  initAccordeon(accord);
  scrollTr();
  pageLoad = true;

  if(document.querySelector(".modal")){
    let modal = new VanillaModal.default();
  }
  initBurgerMenu()

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

function initBurgerMenu(){
  let burg = document.querySelector('.burger')
  let menuBg = document.querySelector('.menuBg')
  let body = document.querySelector('body')
  burg.addEventListener("click", ()=>{
    body.classList.toggle("menu-opened")
  })
  menuBg.addEventListener("click", ()=>{
    body.classList.toggle("menu-opened")
  })
}


function scrollTr(){
  document.querySelectorAll(".imgPar").forEach(el=>{
    gsap.to(el.querySelector('img'), {
      scrollTrigger: {
        trigger: el,
        // scroller: "[data-scroll-container]",
        scrub: 0.5,
        start: "top bottom",
        end: "bottom top",
        // onUpdate: self => console.log(self.direction)
      },
      translateY: "-25%",
      transformOrigin: "center center",
      markers: {startColor: "green", endColor: "red", fontSize: "12px"},
      // delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
      ease:  "none" // the ease of the snap animation ("power3" by default)
    });
  })


  if(document.querySelector(".mPortfolio")){

    gsap.to(document.querySelector('.mPortfolio__col1'), {
      scrollTrigger: {
        trigger: document.querySelector('.mPortfolio__col3'),
        // scroller: "[data-scroll-container]",
        scrub: 0.5,
        start: "top bottom",
        end: "bottom top",
        // onUpdate: self => console.log(self.direction)
      },
      translateY: "-50%",
      transformOrigin: "center center",
      // markers: {startColor: "green", endColor: "red", fontSize: "12px"},
      // delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
      ease:  "none" // the ease of the snap animation ("power3" by default)
    });
    gsap.to(document.querySelector('.mPortfolio__col2'), {
      scrollTrigger: {
        trigger: document.querySelector('.mPortfolio__col3'),
        // scroller: "[data-scroll-container]",
        scrub: 0.8,
        start: "top bottom",
        end: "bottom top",
        // onUpdate: self => console.log(self.direction)
      },
      translateY: "-40%",
      transformOrigin: "center center",
      // markers: {startColor: "green", endColor: "red", fontSize: "12px"},
      // delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
      ease:  "none" // the ease of the snap animation ("power3" by default)
    });


  }
  if(document.querySelector(".mFirst") && innerWidth >1024){
    gsap.to(document.querySelector('.mFirst__vid '), {
      scrollTrigger: {
        trigger: document.querySelector('.mFirst'),
        // scroller: "[data-scroll-container]",
        scrub: 0.5,
        start: "top top",
        end: () => "+=" + document.querySelector('.mFirst').offsetWidth,
				scrub: true,
				pin: true,
        anticipatePin: 1
      },
      onEnter: ({progress, direction, isActive}) => (console.log("start")),
      width: "100%",
      transformOrigin: "center center",
      // markers: {startColor: "green", endColor: "red", fontSize: "12px"},
      // delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
      ease:  "none" // the ease of the snap animation ("power3" by default)
    });

    document.querySelectorAll(".mFirst__title").forEach((el)=>{
      gsap.to(el, {
        scrollTrigger: {
          trigger: document.querySelector('.mFirst'),
          // scroller: "[data-scroll-container]",
          scrub: 0.5,
          start: "top top",
          end: () => "+=" + document.querySelector('.mFirst').offsetWidth,
          scrub: true,
          pin: true,
          anticipatePin: 1
        },
        onEnter: ({progress, direction, isActive}) => (console.log("start")),
        width: "0",
        // className:  " box",
        transformOrigin: "center center",
        // markers: {startColor: "green", endColor: "red", fontSize: "12px"},
        // delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
        ease:  "none" // the ease of the snap animation ("power3" by default)
      });
    })
  }

  document.querySelectorAll(".line").forEach(el=>{
    gsap.to(el, {
      scrollTrigger: el, // start the animation when ".box" enters the viewport (once)
      x: 0
    });
  })

  document.querySelectorAll(".showDown").forEach(el=>{
    gsap.to(el, {
      scrollTrigger: el, // start the animation when ".box" enters the viewport (once)
      y: 0,
      opacity:1,
    });
  })
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