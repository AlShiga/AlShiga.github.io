function scrollPage(target){
  $('html,body').stop().animate({ scrollTop: $(target).offset().top }, 1000);
}
const sceneEl1 = document.querySelector(".section-main"),
      sceneEl2 = document.querySelector(".galery"),
      sceneEl3 = document.querySelector(".section-main"),
      sceneEl4 = document.querySelector(".section-main");

const el1 = document.querySelector(".galery__img"),
      el2 = document.querySelector(".galery__text"),
      el3 = document.querySelector(".section-main"),
      el4 = document.querySelector(".section-main");

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({triggerElement: sceneEl1, duration: 300, offset:400})
							// animate color and top border in relation to scroll position
							.setTween(sceneEl1, {opacity: "0.1"}) // the tween durtion can be omitted and defaults to 1
							.addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)
							.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: sceneEl2, duration: 00, offset:00})
							// animate color and top border in relation to scroll position
							.setTween(el1, {transform: "rotate(180deg)"}) // the tween durtion can be omitted and defaults to 1
							.setTween(el2, {color: "tomato"}) // the tween durtion can be omitted and defaults to 1
							.addIndicators({name: "2 (duration: 000)"}) // add indicators (requires plugin)
							.addTo(controller);

