// const bodyEl = document.querySelector("body");
// const burger = document.querySelectorAll(".burger");
// const menu = document.querySelector(".nav");
// let noScroll = false;

// let docHeight = window.innerHeight;

// document.addEventListener("DOMContentLoaded", function() {
//     setTimeout(() => removePreload(), 1000);
//     wow = new WOW({
//         boxClass: 'wow',
//         animateClass: 'animated',
//         offset: 100,
//         mobile: true,
//         live: true
//     })
//     wow.init();

//     let modal = new VanillaModal.default();

//     let swiper = new Swiper('.swiper-container', {
//         // direction: 'vertical',
//         slidesPerView: 1,
//         mousewheel: true,
//         clickable: true,
//         loop: true,
//         autoplay: {
//             delay: 5000,
//         },
//         pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//             renderBullet: function(index, className) {
//                 return '<span class="' + className + '">' + (index + 1) + '</span>';
//             },
//         },
//     });
//     if (window.innerWidth < 1025) {
//         let myElement = document.querySelector(".header_fixed");
//         // construct an instance of Headroom, passing the element
//         let headroom = new Headroom(myElement);
//         // initialise
//         headroom.init();
//     }
//     SmoothScroll({
//         // Время скролла 400 = 0.4 секунды
//         animationTime: 800,
//         // Размер шага в пикселях 
//         stepSize: 75,

//         // Дополнительные настройки:

//         // Ускорение 
//         accelerationDelta: 30,
//         // Максимальное ускорение
//         accelerationMax: 2,

//         // Поддержка клавиатуры
//         keyboardSupport: true,
//         // Шаг скролла стрелками на клавиатуре в пикселях
//         arrowScroll: 50,

//         // Pulse (less tweakable)
//         // ratio of "tail" to "acceleration"
//         pulseAlgorithm: true,
//         pulseScale: 4,
//         pulseNormalize: 1,

//         // Поддержка тачпада
//         touchpadSupport: true,
//     });
// });

// function removePreload() {
//     const preloader = document.querySelector(".preloader")
//     const preloaderLogo = document.querySelector(".preloader__logo")
//     if (preloader) {
//         bodyEl.classList.add("step0");
//         bodyEl.classList.add("anim");
//         preloaderLogo.style.transition = "0.5s";
//         preloaderLogo.style.transform = "translateY(-100%)";
//         preloaderLogo.style.opacity = "0";
//         setTimeout(() => {
//             preloader.style.transition = "1s";
//             preloader.style.transform = "translateY(-100%)";
//             // preloader.style.opacity = "0";
//             showStartAnim();
//         }, 400);
//     }
// }

// function showStartAnim() {
//     const headerEl = document.querySelector(".header");
//     const headerElContent = document.querySelector(".header > div");
//     const bgLeftEl = document.querySelector(".firstSection__bgLeft");
//     const rectEl = document.querySelector(".firstSection__blur");
//     const nameEl = document.querySelector(".firstSection__name");
//     const sloganEl = document.querySelector(".firstSection__slogan");
//     let widthScreen = window.innerWidth;
//     let rectH = '';
//     (widthScreen > 1400) ? rectH = "216px": '';
//     (widthScreen < 1400 && widthScreen >= 1025) ? rectH = "130px": "";
//     (widthScreen < 1025 && widthScreen >= 768) ? rectH = "188px": "";
//     (widthScreen < 768) ? rectH = "75px": "";

//     setTimeout(step5, 1000);
//     setTimeout(step8, 1500);
//     setTimeout(step10, 1700);
//     setTimeout(step15, 2200);
//     setTimeout(step20, 2700);

//     function step5() {
//         bodyEl.classList.remove("step0");
//         bodyEl.classList.add("step5");
//     }

//     function step8() {
//         bodyEl.classList.remove("step5");
//         bodyEl.classList.add("step8");
//         headerEl.style.transform = "translateY(0%)";
//         headerEl.style.transition = "0.2s cubic-bezier(.19,0,.51,1)";
//         bgLeftEl.style.opacity = "1";
//         // bgLeftEl.style.transition = "0.2s cubic-bezier(.19,0,.51,1)";
//         rectEl.style.height = rectH;
//         // rectEl.style.transition = "0.5s cubic-bezier(.19,0,.51,1) 0.2s";
//     }

//     function step10() {
//         bodyEl.classList.remove("step8");
//         bodyEl.classList.add("step10");
//         nameEl.style.transform = "translateY(0%)";
//         // nameEl.style.transition = "0.5s cubic-bezier(.19,0,.51,1) 0.3s";
//         sloganEl.style.transform = "translateY(0%)";
//         sloganEl.style.opacity = "1";
//         // sloganEl.style.transition = "0.5s cubic-bezier(.19,0,.51,1) 0.1s";
//     }

//     function step15() {
//         bodyEl.classList.remove("step10");
//         bodyEl.classList.add("step15");
//     }

//     function step20() {
//         bodyEl.classList.remove("step15");
//         bodyEl.classList.add("step20");
//         headerElContent.style.transform = "translateY(0%)";
//         headerElContent.style.opacity = "1";
//         headerElContent.style.transition = "0.5s cubic-bezier(.19,0,.51,1)";
//     }
// }

// burger.forEach(function(item) {
//     item.addEventListener('click', function(e) {
//         menu.classList.toggle("nav_active")
//     })
// });
// document.querySelector(".nav__bg").addEventListener('click', function(e) {
//     menu.classList.toggle("nav_active")
// })



// //Скролл ко второмц блоку
// const firstEl = document.querySelector(".firstSection");
// const btnNextFirstEl = firstEl.querySelector(".btnNext");
// const secVideo = document.querySelector(".sectionVideo");
// const btnNextSecVideo = secVideo.querySelector(".btnNext");

// btnNextFirstEl.onclick = function() {
//     const elm = document.querySelector(".sectionVideo");
//     document.querySelector(".burgerFixed").classList.remove("burgerFixed_hide");
//     // elm.scrollIntoView({ block: "start", behavior: "smooth" });
//     smoothScroll(secVideo)
//     btnNextHide(firstEl);
// };

// let firstScroll = new WheelIndicator({
//     elem: firstEl,
//     callback: function(e) {
//         if (!noScroll) {
//             noScroll = true;
//             if (e.direction == "down") {
//                 setTimeout(() => {
//                     document.querySelector(".burgerFixed").classList.remove("burgerFixed_hide");
//                     noScroll = false;
//                     // secVideo.scrollIntoView({ block: "start", behavior: "smooth" });
//                     smoothScroll(secVideo)

//                     noScroll = true;
//                     btnNextHide(firstEl);
//                     document.querySelector(".btnNext_video .btnNext__time path").style.strokeDashoffset = 900;
//                     setTimeout(() => {
//                         noScroll = false;
//                     }, 700);
//                 }, 100);

//             } else {
//                 setTimeout(() => {
//                     // firstEl.scrollIntoView({ block: "start", behavior: "smooth" });
//                     smoothScroll(firstEl)

//                     btnNextHide(secVideo);
//                     setTimeout(() => {
//                         noScroll = false;
//                     }, 700);
//                 }, 100);
//             }
//         }
//     }
// });
// btnNextSecVideo.onclick = function() {
//     const elm = document.querySelector(".sectionAbout");
//     // elm.scrollIntoView({ block: "start", behavior: "smooth" });
//     smoothScroll(elm)
//     btnNextHide(secVideo);
// };
// let secondScroll = new WheelIndicator({
//     elem: secVideo,
//     callback: function(e) {
//         if (!noScroll) {
//             noScroll = true;
//             if (e.direction == "down") {
//                 setTimeout(() => {
//                     const elm = document.querySelector(".sectionAbout");
//                     // elm.scrollIntoView({ block: "start", behavior: "smooth" });
//                     smoothScroll(elm)
//                     btnNextHide(secVideo);
//                     setTimeout(() => {
//                         noScroll = false;
//                     }, 700);
//                 }, 100);

//             } else {
//                 setTimeout(() => {
//                     document.querySelector(".burgerFixed").classList.add("burgerFixed_hide");
//                     // firstEl.scrollIntoView({ block: "start", behavior: "smooth" });
//                     smoothScroll(firstEl)
//                     btnNextHide(secVideo);
//                     setTimeout(() => {
//                         noScroll = false;
//                     }, 700);
//                 }, 100);
//             }
//         }
//     }
// });

// function btnNextHide(section) {
//     let btn = section.querySelector(".btnNext");
//     btn.style.transition = "1s";
//     btn.style.transform = "scale(3)";
//     btn.style.opacity = "0";
//     btn.style.pointerEvents = "none";
// }

// // Slider offer
// let slider = document.querySelector(".sliderSecvices");
// let sliderItem = document.querySelectorAll(".sliderSecvices__item");

// document.addEventListener("DOMContentLoaded", function() {
//     sliderItem[0].click();
// });
// sliderItem.forEach(function(item) {
//     item.addEventListener('click', function(e) {
//         if (!slider.classList.contains("anim") && !this.classList.contains("active")) {
//             slider.classList.add("anim");
//             sliderItem.forEach(function(slide) {
//                 slide.classList.remove("active");
//                 if (slider.classList.contains("animated")) {
//                     slide.style.transition = "1s";
//                     slide.style.transitionDelay = "0.2s";
//                 }

//             });
//             e.target.classList.add("active");
//             if (window.innerWidth > 1025) {
//                 sliderItem.forEach(function(slide) {
//                     slide.style.flexGrow = "1";
//                 });
//                 if (e.target.nextElementSibling) {
//                     e.target.nextElementSibling.style.flexGrow = "3";
//                     if (e.target.nextElementSibling.nextElementSibling) {
//                         e.target.nextElementSibling.nextElementSibling.style.flexGrow = "2";
//                     }
//                 }
//                 if (e.target.previousElementSibling) {
//                     e.target.previousElementSibling.style.flexGrow = "3";
//                     if (e.target.previousElementSibling.previousElementSibling) {
//                         e.target.previousElementSibling.previousElementSibling.style.flexGrow = "2";
//                     }
//                 }
//                 e.target.style.flexGrow = "6";
//             } else {
//                 sliderItem.forEach(function(slide) {
//                     slide.style.flexGrow = "0";
//                 });
//                 if (e.target.nextElementSibling) {
//                     e.target.nextElementSibling.style.flexGrow = "2";

//                 }
//                 if (e.target.previousElementSibling) {
//                     e.target.previousElementSibling.style.flexGrow = "2";
//                 }
//                 e.target.style.flexGrow = "8";
//             }

//             slider.classList.remove("anim");
//         }
//     })
// })
// const secServ = document.querySelector(".sectionSecvices");
// const btnNextSecServ = secServ.querySelector(".btnNext");
// btnNextSecServ.onclick = function() {
//     const elm = document.querySelector(".map");
//     // elm.scrollIntoView({ block: "start", behavior: "smooth" });
//     smoothScroll(elm)
//     btnNextHide(secServ);
// };

// // Карта
// mapPoint = document.querySelectorAll(".map__point");
// cartMap = document.querySelector(".map__detailsInner");
// cartMapName = document.querySelector(".map__detailsName");
// cartMapText = document.querySelector(".map__detailsText");

// mapPoint.forEach(function(item) {
//     item.addEventListener('click', function(e) {
//         mapPoint.forEach(function(slide) {
//             slide.classList.remove("active");
//         });
//         let object = arrObjects.find(item => item.name == this.dataset.target);
//         changeCartMap(object);
//         this.classList.add("active");
//     })
// });

// function changeCartMap(object) {
//     cartMap.style.transform = "translateX(-100%)"
//     setTimeout(() => {
//         cartMapName.innerText = object.name;
//         if (object.contacts !== "") {
//             cartMapText.innerHTML = object.contacts;
//         } else {
//             document.querySelector("html").style.scrollBehavior = "smooth"
//             cartMapText.innerHTML = "<a href='#project' class='btn3' >Узнать больше</a>";
//         }
//         setTimeout(() => {
//             cartMap.style.transform = "translateX(0%)"
//         }, 300);
//     }, 300);
// }

// tippy('[data-tippy-content]', {
//     allowHTML: true,
//     arrow: false,
//     delay: [100, 400],
//     trigger: "click",
//     placement: 'top-end',
//     zIndex: 99,
//     theme: 'gt',
// });



// //Слайдер проекты
// const sliderPWrap = document.querySelector(".sliderP");
// const sliderPItem = document.querySelectorAll(".sliderP__item");
// let sliderActiveNum = 0;
// let sliderImgTern = setTimeout(imgTern, 5000);
// //Смена картинки в слайдере
// function imgTern() {
//     let el = document.querySelector(".sliderP__item.active .sliderP__img")
//     if (el) {
//         if (el.classList.contains("sliderP__img_right")) {
//             el.classList.remove("sliderP__img_right");
//         } else {
//             el.classList.add("sliderP__img_right");
//         }
//     }
//     sliderImgTern = setTimeout(imgTern, 5000); // (*)
// }
// //Переключение слайдера по скролу
// let sliderPScroll = new WheelIndicator({
//     elem: document.querySelector(".projectBody"),
//     callback: function(e) {
//         if (!noScroll) {
//             noScroll = true;
//             sliderPItem.forEach(function(item, i, arr) {
//                 if (item.classList.contains('active')) {
//                     sliderActiveNum = i;
//                     sliderPHideSlide()
//                     item.classList.remove('active')
//                 }
//             });
//             if (e.direction == "down") {
//                 if (sliderActiveNum == sliderPItem.length - 1) {
//                     // document.querySelector(".seaBig").scrollIntoView({ block: "start", behavior: "smooth" });
//                     smoothScroll(document.querySelector(".seaBig"))
//                     sliderPNum(1, false);

//                     setTimeout(() => {
//                         noScroll = false;
//                     }, 1200);
//                     return false;
//                 }

//                 setTimeout(() => {
//                     sliderPNum(sliderActiveNum + 1);
//                     sliderPItem[sliderActiveNum + 1].classList.add("active");
//                     // sliderPItem[sliderActiveNum + 1].scrollIntoView({ block: "center", behavior: "smooth" });
//                     smoothScroll(sliderPItem[sliderActiveNum + 1], true)
//                     setTimeout(() => {
//                         sliderPShowSlide();
//                         setTimeout(() => {
//                             noScroll = false;
//                         }, 1200);
//                     }, 300);
//                 }, 500);

//             } else {
//                 if (sliderActiveNum == 0) {
//                     // document.querySelector(".projectHead").scrollIntoView({ block: "end", behavior: "smooth" });
//                     smoothScroll(document.querySelector(".projectHead"))
//                     sliderPNum(1, false);
//                     setTimeout(() => {
//                         noScroll = false;
//                     }, 1200);
//                     return false;
//                 }

//                 setTimeout(() => {
//                     sliderPNum(sliderActiveNum - 1);
//                     sliderPItem[sliderActiveNum - 1].classList.add("active");
//                     // sliderPItem[sliderActiveNum - 1].scrollIntoView({ block: "center", behavior: "smooth" });
//                     smoothScroll(sliderPItem[sliderActiveNum - 1], true)
//                     setTimeout(() => {
//                         sliderPShowSlide();
//                         setTimeout(() => {
//                             noScroll = false;
//                         }, 1200);
//                     }, 300);
//                 }, 500);
//             }
//         }
//     }
// });

// let seaScroll = new WheelIndicator({
//     elem: document.querySelector(".seaBig"),
//     callback: function(e) {
//         seaScroll.setOptions({
//             preventMouse: false,
//         })
//         if (!noScroll) {
//             if (e.direction == "up") {
//                 noScroll = true;
//                 seaScroll.setOptions({
//                     preventMouse: true,
//                 })
//                 if (document.querySelector(".seaBig").getBoundingClientRect().y < -50) {
//                     smoothScroll(document.querySelector(".seaBig"))
//                     setTimeout(() => {
//                         noScroll = false;
//                     }, 800);
//                 } else {
//                     sliderPItem.forEach(function(item, i, arr) {
//                         if (item.classList.contains('active')) {
//                             sliderActiveNum = i;
//                             sliderPHideSlide()
//                             item.classList.remove('active')
//                         }
//                     });
//                     sliderPNum(sliderPItem.length - 1);
//                     // sliderPItem[sliderPItem.length - 1].scrollIntoView({ block: "center", behavior: "smooth" });
//                     smoothScroll(sliderPItem[sliderPItem.length - 1], true)
//                     sliderPItem[sliderPItem.length - 1].classList.add("active");
//                     setTimeout(() => {
//                         sliderPShowSlide();
//                         setTimeout(() => {
//                             noScroll = false;
//                         }, 1200);
//                     }, 300);
//                 }
//             }
//         } else {
//             seaScroll.setOptions({
//                 preventMouse: true,
//             })
//         }
//     },
//     preventMouse: false,
// });

// let projectHeadScroll = new WheelIndicator({
//     elem: document.querySelector(".projectHead"),
//     callback: function(e) {
//         projectHeadScroll.setOptions({
//             preventMouse: false,
//         })
//         if (!noScroll) {
//             if (e.direction == "down") { // "up" or "down"
//                 noScroll = true;
//                 projectHeadScroll.setOptions({
//                     preventMouse: true,
//                 })

//                 sliderPItem.forEach(function(item, i, arr) {
//                     if (item.classList.contains('active')) {
//                         sliderActiveNum = i;
//                         sliderPHideSlide()
//                         item.classList.remove('active')
//                     }
//                 });
//                 // sliderPItem[0].scrollIntoView({ block: "center", behavior: "smooth" });
//                 if (document.querySelector(".projectHead").getBoundingClientRect().y > 50) {
//                     smoothScroll(document.querySelector(".projectHead"))
//                     setTimeout(() => {
//                         noScroll = false;
//                     }, 800);
//                 } else {
//                     smoothScroll(sliderPItem[0], true)
//                     btnNextHide(document.querySelector(".projectHead"));
//                     sliderPNum(0);
//                     sliderPItem[0].classList.add("active");
//                     setTimeout(() => {
//                         sliderPShowSlide();
//                         setTimeout(() => {
//                             noScroll = false;
//                         }, 1200);
//                     }, 300);
//                 }
//             } else {}
//         } else {
//             projectHeadScroll.setOptions({
//                 preventMouse: true,
//             })
//         }
//     },
//     preventMouse: false,
// });

// function sliderPHideSlide() {
//     const slide = document.querySelector(".sliderP__item.active");
//     if (slide) {
//         const slideDescriptionWrap = slide.querySelector(".sliderP__descriptionWrap");
//         const slideDescription = slide.querySelector(".sliderP__description");
//         const slideBorder = slide.querySelector(".sliderP__border");
//         const slideImgW = slide.querySelector(".sliderP__img");
//         // let slideImg = slide.querySelector(".sliderP__img>img");
//         slideDescription.style.transition = "0.6s ease-out";
//         slideDescription.style.transform = "translateY(-100%)";
//         slideBorder.style.transition = "0.6s ease-out";
//         slideBorder.style.transform = "";
//         slideImgW.style.transition = "1s ease-out 0.4s";
//         slideImgW.style.transform = "scale(1)";
//         slideImgW.style.opacity = "0.3";
//         setTimeout(() => {
//             slideDescriptionWrap.style.transition = "";
//             slideDescription.style.transition = "";
//             slideDescriptionWrap.style.transform = "";
//             slideDescription.style.transform = "";
//             slideImgW.style.transition = "";
//             slideImgW.style.transform = "";
//             slideImgW.style.opacity = "";
//             slideBorder.style.transition = "";
//         }, 1300);
//     }
// }

// function sliderPShowSlide() {
//     clearTimeout(sliderImgTern);
//     sliderImgTern = setTimeout(imgTern, 5000);
//     const slide = document.querySelector(".sliderP__item.active");
//     if (slide) {
//         const slideDescriptionWrap = slide.querySelector(".sliderP__descriptionWrap");
//         // let slideDescription = slide.querySelector(".sliderP__slideDescription");
//         const slideBorder = slide.querySelector(".sliderP__border");
//         const slideImgW = slide.querySelector(".sliderP__img");
//         // let slideImg = slide.querySelector(".sliderP__img > img");
//         slideDescriptionWrap.style.transition = "1s ease-out 0.4s";
//         slideDescriptionWrap.style.transform = "translateX(0)";
//         slideBorder.style.transition = "1s ease-out 0.7s";
//         slideBorder.style.transform = "translateX(0)";
//         slideImgW.style.transition = "1s ease-out 0s";
//         slideImgW.style.transform = "scale(1.3)";
//         slideImgW.style.opacity = "1";
//     }
// }

// const sliderPcount = document.querySelector(".counter")
// const sliderPcountInner = document.querySelector(".counter__inner")
// const sliderPcountItems = document.querySelectorAll(".counter__num")

// function sliderPNum(active, show = true) {
//     if (show) {
//         sliderPcount.classList.remove("counter_hide");
//         sliderPcountItems.forEach(function(num) {
//             num.classList.remove("active");
//         });
//         let x = 80 * active;
//         sliderPcountItems[active].classList.add("active");
//         sliderPcountInner.style.transform = "translateY(-" + x + "px)";
//     } else {
//         sliderPcount.classList.add("counter_hide");
//         sliderPcountItems.forEach(function(num) {
//             num.classList.remove("active");
//         });
//     }
// }

// window.onscroll = function(e) {
//     // let scrMy = window.pageYOffset;
//     let aboutTop = document.querySelector(".sectionAbout ").getBoundingClientRect();
//     let licensesTop = document.querySelector(".licenses  ").getBoundingClientRect();
//     let partnersTop = document.querySelector(".partners  ").getBoundingClientRect();
//     let projectTop = document.querySelector(".projectBody").getBoundingClientRect();
//     if (-aboutTop.top > 0 && -aboutTop.top < aboutTop.height && window.innerWidth > 1024) {
//         paralaxAbout()
//     }
//     if (-licensesTop.top > 0 && -licensesTop.top < licensesTop.height && window.innerWidth > 1024) {
//         paralaxLicenses()
//     }
//     if (-partnersTop.top > 0 && -partnersTop.top < partnersTop.height) {
//         paralaxPartners()
//     }
//     if (-projectTop.top < -window.innerHeight * 2 || -projectTop.top > projectTop.height + window.innerHeight * 1.2) {
//         document.querySelector(".counter").classList.add("counter_hide");
//     }
//     if (window.pageYOffset < 500) {
//         document.querySelector(".burgerFixed").classList.add("burgerFixed_hide");
//     } else {
//         document.querySelector(".burgerFixed").classList.remove("burgerFixed_hide");
//     }
// };

// function paralaxAbout() {
//     let aboutTop = document.querySelector(".sectionAbout ").getBoundingClientRect()
//     document.querySelector(".sectionAbout__scr1").style.top = -aboutTop.top / 5 + "px";
//     document.querySelector(".sectionAbout__scr1").style.transition = "0.5s ease-out";
//     document.querySelector(".sectionAbout__scr2").style.top = -aboutTop.top / 10 + "px";
//     document.querySelector(".sectionAbout__scr2").style.transition = "0.6s ease-out";
// }

// function paralaxLicenses() {
//     let licensesTop = document.querySelector(".licenses  ").getBoundingClientRect();
//     let coef = -licensesTop.top / licensesTop.height - 0.5;
//     let images = document.querySelectorAll(".licenses__img");
//     images.forEach(function(img) {
//         img.style.transform = "scale(1.15)translateY(" + 10 * coef + "% )";
//         // img.style.transition = "0.5s ease-out";
//     });
// }

// function paralaxPartners() {
//     let partnersTop = document.querySelector(".partners  ").getBoundingClientRect().top;
//     let lines = document.querySelectorAll(".partners__line");
//     let x = (partnersTop) / 5;
//     lines.forEach(function(line, i) {
//         let rev = 1;
//         (i % 2) ? rev = -1: '';
//         line.style.transform = "translateX(" + rev * x + "px )";
//         // line.style.transition = "none";
//     });;
// }


// // ! function() {
// //     "use strict";

// //     function o() {
// //         var o = window,
// //             t = document;
// //         if (!("scrollBehavior" in t.documentElement.style && !0 !== o.__forceSmoothScrollPolyfill__)) {
// //             var l, e = o.HTMLElement || o.Element,
// //                 r = 468,
// //                 i = { scroll: o.scroll || o.scrollTo, scrollBy: o.scrollBy, elementScroll: e.prototype.scroll || n, scrollIntoView: e.prototype.scrollIntoView },
// //                 s = o.performance && o.performance.now ? o.performance.now.bind(o.performance) : Date.now,
// //                 c = (l = o.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(l) ? 1 : 0);
// //             o.scroll = o.scrollTo = function() { void 0 !== arguments[0] && (!0 !== f(arguments[0]) ? h.call(o, t.body, void 0 !== arguments[0].left ? ~~arguments[0].left : o.scrollX || o.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : o.scrollY || o.pageYOffset) : i.scroll.call(o, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : o.scrollX || o.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : o.scrollY || o.pageYOffset)) }, o.scrollBy = function() { void 0 !== arguments[0] && (f(arguments[0]) ? i.scrollBy.call(o, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : h.call(o, t.body, ~~arguments[0].left + (o.scrollX || o.pageXOffset), ~~arguments[0].top + (o.scrollY || o.pageYOffset))) }, e.prototype.scroll = e.prototype.scrollTo = function() {
// //                 if (void 0 !== arguments[0])
// //                     if (!0 !== f(arguments[0])) {
// //                         var o = arguments[0].left,
// //                             t = arguments[0].top;
// //                         h.call(this, this, void 0 === o ? this.scrollLeft : ~~o, void 0 === t ? this.scrollTop : ~~t)
// //                     } else {
// //                         if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
// //                         i.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
// //                     }
// //             }, e.prototype.scrollBy = function() { void 0 !== arguments[0] && (!0 !== f(arguments[0]) ? this.scroll({ left: ~~arguments[0].left + this.scrollLeft, top: ~~arguments[0].top + this.scrollTop, behavior: arguments[0].behavior }) : i.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop)) }, e.prototype.scrollIntoView = function() {
// //                 if (!0 !== f(arguments[0])) {
// //                     var l = function(o) { for (; o !== t.body && !1 === (e = p(l = o, "Y") && a(l, "Y"), r = p(l, "X") && a(l, "X"), e || r);) o = o.parentNode || o.host; var l, e, r; return o }(this),
// //                         e = l.getBoundingClientRect(),
// //                         r = this.getBoundingClientRect();
// //                     l !== t.body ? (h.call(this, l, l.scrollLeft + r.left - e.left, l.scrollTop + r.top - e.top), "fixed" !== o.getComputedStyle(l).position && o.scrollBy({ left: e.left, top: e.top, behavior: "smooth" })) : o.scrollBy({ left: r.left, top: r.top, behavior: "smooth" })
// //                 } else i.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
// //             }
// //         }

// //         function n(o, t) { this.scrollLeft = o, this.scrollTop = t }

// //         function f(o) { if (null === o || "object" != typeof o || void 0 === o.behavior || "auto" === o.behavior || "instant" === o.behavior) return !0; if ("object" == typeof o && "smooth" === o.behavior) return !1; throw new TypeError("behavior member of ScrollOptions " + o.behavior + " is not a valid value for enumeration ScrollBehavior.") }

// //         function p(o, t) { return "Y" === t ? o.clientHeight + c < o.scrollHeight : "X" === t ? o.clientWidth + c < o.scrollWidth : void 0 }

// //         function a(t, l) { var e = o.getComputedStyle(t, null)["overflow" + l]; return "auto" === e || "scroll" === e }

// //         function d(t) {
// //             var l, e, i, c, n = (s() - t.startTime) / r;
// //             c = n = n > 1 ? 1 : n, l = .5 * (1 - Math.cos(Math.PI * c)), e = t.startX + (t.x - t.startX) * l, i = t.startY + (t.y - t.startY) * l, t.method.call(t.scrollable, e, i), e === t.x && i === t.y || o.requestAnimationFrame(d.bind(o, t))
// //         }

// //         function h(l, e, r) {
// //             var c, f, p, a, h = s();
// //             l === t.body ? (c = o, f = o.scrollX || o.pageXOffset, p = o.scrollY || o.pageYOffset, a = i.scroll) : (c = l, f = l.scrollLeft, p = l.scrollTop, a = n), d({ scrollable: c, method: a, startTime: h, startX: f, startY: p, x: e, y: r })
// //         }
// //     }
// //     "object" == typeof exports && "undefined" != typeof module ? module.exports = { polyfill: o } : o()
// // }();


// let arrObjects = [{
//         name: 'ООО "НПФ "ГТ ИНСПЕКТ"',
//         contacts: `ул. Есенина 5Б-60Н, Санкт-Петербург, 194354 Россия<br>
//     тел. +7 (812) 3373037<br>
//     e-mail: info@gtcorporation.com
//     `
//     },
//     {
//         name: 'OOО "ГТ-КАЛИНИНГРАД"',
//         contacts: `ул. Чайковского 58, Калининград, 236022 Россия<br>
//     тел. +7 (4012) 916680<br>
//     e-mail: gt-kaliningrad@gtcorporation.com
//     `
//     },
//     {
//         name: 'ООО "ГТ Север"',
//         contacts: `ул. Железнодорожная 37,Северодвинск, 164521 Россия<br>
//     тел./факс +7 (8184) 565010<br>
//     e-mail: gtseverodvinsk@gtcorporation.com
//     `
//     },
//     {
//         name: 'Южное отделение OOO "НПФ "ГТ ИНСПЕКТ"',
//         contacts: `Сухумское шоссе 57,<br>
//     Новороссийск, 353900 Россия<br>
//     тел. +7 (928) 4482901<br>
//     e-mail: gtnovoros@yandex.ru
//     `
//     },
//     {
//         name: 'Причалы в посёлке Ижевское',
//         contacts: '',
//         about1: `В 2000-2002 годах реконструированы причалы № 1,2,3 и построен причал № 6 на базе обеспечения ООО «ЛУКОЙЛ-Калининградморнефть» в поселке Ижевское, Калининградской области.  База создавалась  для строительства и эксплуатации стационарных морских нефтедобывающих платформ в российской Балтике. `,
//         about2: `ГТ ИНСПЕКТ также участвовал в восстановлении антикоррозионного лакокрасочного покрытия незаконченного с советских времен опорного блока ОБ-1, на шельфе Балтийского моря. Осуществлял монтаж и спуск на воду блока ОБ-2 платформы Д-6 месторождения Кравцовское. Осуществлял монтаж и спуск на воду блока ОБ-2 платформы Д-6 месторождения Кравцовское.`
//     },
//     {
//         name: 'Подводная установка грунтовых анкеров',
//         contacts: '',
//         about1: `ГТ ИНСПЕКТ одним из первых спроектировал применил подводную установку грунтовых анкеров для
//     реконструкции и усиления портовых гидротехнических сооружений. `,
//         about2: `Отработанная в порту Вентспилс
//     технология была успешно применена в 2008 году при реконструкции Причалов № 1-4 угольного порта
//     Высоцк в сложнейших геологических условиях и при усилении оградительных молов порта Северодвинск.`
//     },
//     {
//         name: 'Реконструкция портов в Сочи',
//         contacts: '',
//         about1: `По заданию ФГУП «РОСМОРПОРТ» приступили к ремонту портовых сооружений Сочи еще до того как
//     стартовала основная строительная программа подготовили к Олимпийским играм и к 2013 году были
//     отремонтированы, реконструированы и переоборудованы все старые причалы порта Сочи, `,
//         about2: `построены
//     причальные и оградительные сооружения в новом порту Имеретинский (Адлер) и проведена
//     реконструкция круизных пассажирских портопунктов Большого Сочи.`
//     },
//     {
//         name: 'Подводное основание в порту Северодвинск',
//         contacts: '',
//         about1: `В 2004-2005 годах реконструирован котлован в порту Северодвинск. Устроил подводную постель на
//     глубине – 22,5 метра для строительства морской ледостойкой нефтедобывающей платформы -
//     «Приразломная». Для выполнения отсыпки и тщательного равнения постели был сконструирован и
//     построен специальный подводный планировщик на базе самоподъемной платформы `,
//         about2: `в уникальной
//     кольцевой сборке.
//     В 2006 году это оборудование и технологии были нами использованы для равнения и крепления от
//     размыва дна у причальных сооружений в порту Приморск Ленинградской области. А в 2007 году, для создания подводной постели для посадки на дно погружной баржи, перевозящей опорный блок рейдового терминалва Варандей.`
//     },
//     {
//         name: 'Реконструкция входных молов',
//         contacts: '',
//         about1: `В период 2007-2009 годах проведена реконструкция входных молов Калининградского морского
//     канала. Реализация проекта потребовала привлечения значительного количества плавсредств и
//     строительных производственных мощностей. `,
//         about2: `Для доставки более чем 100 тыс. кубов фигурных бетонных
//     массивов на молы даже повторили идею немецких инженеров-строителей и проложили по голове
//     Южного мола узкоколейную железную дорогу. В эти же годы был реконструирован оградительный мол
//     рыбного порта Пионерский в Калининградской области.`
//     },
//     {
//         name: 'Мониторинг и ремонт',
//         contacts: '',
//         about1: `С 1992 года постоянно ведем работы по мониторингу сооружений, восстановлению
//     антикоррозионного покрытия и ремонту причальных сооружений в зоне переменного уровня воды с
//     применением гермокамер самых различных конфигураций, применяем лучшие лакокрасочные
//     материалы и ремонтные составы мировых брендов. `,
//         about2: `Реновируем отбойное и швартовное, рельсовое
//     оборудование причалов.
//     Испытательный центр выполняет обследования и освидетельствования гидротехнических сооружений,
//     выпуск и обновление паспортов объектов, инженерные расчеты сооружений во всех программных
//     комплексах.`
//     },
//     {
//         name: 'Пирс комплекса Тамань',
//         contacts: '',
//         about1: `В 2010 построили свайное основание зернового терминала порта Тамань. Для приёма судов расчётного тоннажа пирс уходит далеко в Чёрное море.`,
//         about2: ``
//     },
//     {
//         name: 'Реконструкция в порту Балтийск',
//         contacts: '',
//         about1: `В период с 2003 по 2008 года по заказу ФГУП «РОСМОРПОРТ» была произведена реконструкция старых
//     военных и строительство новых причальных сооружений в порту Балтийск, которые обеспечили прямое
//     без транзитное автомобильное и железнодорожное сообщение между Калининградской и
//     Ленинградской областями (порт Усть-Луга). `,
//         about2: `В состав порта Балтийск входят: грузопассажирский
//     автопаромный терминал, универсальный автомобильно-железнодорожный паромный терминал и
//     контейнерный терминал.`
//     },
//     {
//         name: 'Комплекс причальных сооружений',
//         contacts: '',
//         about1: `В рамках освоения нефтяных месторождений Северного Каспия для судостроительного завода
//     «Красные Баррикады» в Астраханской области в 2006-2007 годах спроектирован и построен комплекс
//     причальных сооружений для перегрузки тяжеловесных модулей нефтедобывающих платформ
//     месторождения им. Н. Корчагина. `,
//         about2: ``
//     },
// ]

// // firstEl.addEventListener("onwheel", onWheel, { passive: false });
// // firstEl.addEventListener("mousewheel", onWheel, { passive: false });
// // firstEl.addEventListener("MozMousePixelScroll", onWheel, { passive: false });

// // function onWheel(e) {
// //     e = e || window.event;
// //     if (e.preventDefault)
// //         e.preventDefault();
// //     e.returnValue = false;
// // }

// function smoothScroll(elm, center) {
//     let startY = currentYPosition();
//     let stopY = elmYPosition(elm);
//     if (center) {
//         const padding = (document.documentElement.clientHeight - elm.getBoundingClientRect().height) / 2
//         stopY = stopY - padding
//     }
//     let distance = stopY > startY ? stopY - startY : startY - stopY;
//     if (distance < 100) {
//         scrollTo(0, stopY);
//         return;
//     }
//     let speed = Math.round(distance / 30);
//     if (speed >= 20) speed = 20;
//     let step = Math.round(distance / 25);
//     let leapY = stopY > startY ? startY + step : startY - step;
//     let timer = 0;
//     if (stopY > startY) {
//         for (let i = startY; i < stopY; i += step) {
//             setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
//             leapY += step;
//             if (leapY > stopY) leapY = stopY;
//             timer++;
//         }
//         return;
//     }
//     for (let i = startY; i > stopY; i -= step) {
//         setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
//         leapY -= step;
//         if (leapY < stopY) leapY = stopY;
//         timer++;
//     }
// }

// function currentYPosition() {
//     // Firefox, Chrome, Opera, Safari
//     if (self.pageYOffset) return self.pageYOffset;
//     // Internet Explorer 6 - standards mode
//     if (document.documentElement && document.documentElement.scrollTop)
//         return document.documentElement.scrollTop;
//     // Internet Explorer 6, 7 and 8
//     if (document.body.scrollTop) return document.body.scrollTop;
//     return 0;
// }

// function elmYPosition(elm) {
//     let y = elm.offsetTop;
//     let node = elm;
//     while (node.offsetParent && node.offsetParent != document.body) {
//         node = node.offsetParent;
//         y += node.offsetTop;
//     }
//     return y;
// }

// const smoothLinks = document.querySelectorAll('a[href^="#"]');
// for (let smoothLink of smoothLinks) {
//     smoothLink.addEventListener('click', function(e) {
//         e.preventDefault();
//         const id = smoothLink.getAttribute('href');
//         document.querySelector(id).scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         });
//         const menu = document.querySelector(".nav");
//         if (menu.classList.contains("nav_active")) {
//             menu.classList.remove("nav_active")
//         }
//     });
// };