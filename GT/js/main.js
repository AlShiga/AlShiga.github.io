let bodyEl = document.querySelector("body")


let docHeight = window.innerHeight;
console.log(docHeight);

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => removePreload(), 300);
    var modal = new VanillaModal.default();
});

function removePreload() {
    let preloader = document.querySelector(".preloader")
    let preloaderLogo = document.querySelector(".preloader__logo")
    if (preloader) {
        bodyEl.classList.add("step0");
        bodyEl.classList.add("anim");
        preloaderLogo.style.transition = "0.5s";
        preloaderLogo.style.transform = "translateY(-100%)";
        preloaderLogo.style.opacity = "0";
        setTimeout(() => {
            preloader.style.transition = "1s";
            preloader.style.transform = "translateY(-100%)";
            // preloader.style.opacity = "0";
            showStartAnim();
        }, 400);
    }
}

function showStartAnim() {
    let headerEl = document.querySelector(".header");
    let headerElContent = document.querySelector(".header > div");
    let bgLeftEl = document.querySelector(".firstSection__bgLeft");
    let rectEl = document.querySelector(".firstSection__blur");
    let nameEl = document.querySelector(".firstSection__name");
    let sloganEl = document.querySelector(".firstSection__slogan");
    let widthScreen = window.innerWidth;
    let rectH = '';
    (widthScreen > 1400) ? rectH = "216px": '';
    (widthScreen < 1400 && widthScreen >= 1025) ? rectH = "130px": "";
    (widthScreen < 1025 && widthScreen >= 768) ? rectH = "188px": "";
    (widthScreen < 768) ? rectH = "75px": "";
    setTimeout(() => {
        bodyEl.classList.remove("step0");
        bodyEl.classList.add("step5");
        setTimeout(() => {
            bodyEl.classList.remove("step5");
            bodyEl.classList.add("step8");
            headerEl.style.transform = "translateY(0%)";
            headerEl.style.transition = "0.2s cubic-bezier(.19,0,.51,1)";
            bgLeftEl.style.opacity = "1";
            rectEl.style.height = rectH;

            rectEl.style.transition = "0.5s cubic-bezier(.19,0,.51,1)";
            rectEl.style.transitionDelay = "0.2s";
            setTimeout(() => {
                bodyEl.classList.remove("step8");
                bodyEl.classList.add("step10");
                nameEl.style.transform = "translateY(0%)";
                nameEl.style.transition = "0.5s cubic-bezier(.19,0,.51,1)";
                nameEl.style.transitionDelay = "0.3s";
                sloganEl.style.transform = "translateY(0%)";
                sloganEl.style.opacity = "1";
                sloganEl.style.transition = "0.5s cubic-bezier(.19,0,.51,1)";
                sloganEl.style.transitionDelay = "0.1s";
                setTimeout(() => {
                    bodyEl.classList.remove("step10");
                    bodyEl.classList.add("step15");
                    setTimeout(() => {
                        bodyEl.classList.remove("step15");
                        bodyEl.classList.add("step20");
                        headerElContent.style.transform = "translateY(0%)";
                        headerElContent.style.opacity = "1";
                        headerElContent.style.transition = "0.5s cubic-bezier(.19,0,.51,1)";
                    }, 500);
                }, 500);
            }, 200);
        }, 500);
    }, 1000);
    addEventListener('scroll', function() {
        // window.scrollTop =docHeight;
        // window.scrollTo(0, docHeight)
    });


}


// SmoothScroll({
//     stepSize: 40,
//     accelerationDelta: 500,
//     accelerationMax: 3,
// })


// let y = 0

// document.body.addEventListener('wheel', (e) => {
//     const height = document.body.offsetHeight

//     y = y + e.wheelDeltaY

//     if (y < -height + window.innerHeight) {
//         y = -height + window.innerHeight
//     }

//     if (y > 0) {
//         y = 0
//     }

//     const tr = `translateY(${y}px)`
//     document.body.style.transform = tr

// })



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


// function elmYPosition(eID) {
//     var elm = document.querySelector(eID);
//     var y = elm.offsetTop;
//     var node = elm;
//     while (node.offsetParent && node.offsetParent != document.body) {
//         node = node.offsetParent;
//         y += node.offsetTop;
//     }
//     return y;
// }


// function smoothScroll(eID) {
//     var startY = currentYPosition();
//     var stopY = elmYPosition(eID);
//     var distance = stopY > startY ? stopY - startY : startY - stopY;
//     if (distance < 100) {
//         scrollTo(0, stopY);
//         return;
//     }
//     var speed = Math.round(distance / 10);
//     if (speed >= 20) speed = 100;
//     var step = Math.round(distance / 25);
//     var leapY = stopY > startY ? startY + step : startY - step;
//     var timer = 0;
//     if (stopY > startY) {
//         for (var i = startY; i < stopY; i += step) {
//             setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
//             leapY += step;
//             if (leapY > stopY) leapY = stopY;
//             timer++;
//         }
//         return;
//     }
//     for (var i = startY; i > stopY; i -= step) {
//         setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
//         leapY -= step;
//         if (leapY < stopY) leapY = stopY;
//         timer++;
//     }
// }



//Скролл ко второмц блоку
let firstEl = document.querySelector(".firstSection");
let btnNextFirstEl = firstEl.querySelector(".btnNext");

btnNextFirstEl.onclick = function() {
    var elm = document.querySelector(".sectionVideo");
    elm.scrollIntoView({ block: "start", behavior: "smooth" });
    btnNextHide(firstEl);
};
addOnWheel(firstEl, function(e) {
    var delta = e.deltaY || e.detail || e.wheelDelta;
    if (delta > 0) {
        e.preventDefault();

        if (!bodyEl.classList.contains("scroll")) {
            bodyEl.classList.add("scroll");
            var elm = document.querySelector(".sectionVideo");
            elm.scrollIntoView({ block: "start", behavior: "smooth" });
            btnNextHide(firstEl);
            setTimeout(() => {
                bodyEl.classList.remove("scroll");
            }, 2000);
        }
    }
});



let secVideo = document.querySelector(".sectionVideo");
let btnNextSecVideo = secVideo.querySelector(".btnNext");
btnNextSecVideo.onclick = function() {
    var elm = document.querySelector(".sectionAbout");
    elm.scrollIntoView({ block: "start", behavior: "smooth" });
    btnNextHide(secVideo);
};
addOnWheel(secVideo, function(e) {


    var delta = e.deltaY || e.detail || e.wheelDelta;
    if (delta > 0) {
        e.preventDefault();

        if (!bodyEl.classList.contains("scroll")) {
            bodyEl.classList.add("scroll");
            var elm = document.querySelector(".sectionAbout");
            elm.scrollIntoView({ block: "start", behavior: "smooth" });
            btnNextHide(secVideo);
        }
        setTimeout(() => {
            bodyEl.classList.remove("scroll");
        }, 300);
    }
});


function btnNextHide(section) {
    let btn = section.querySelector(".btnNext");
    btn.style.transition = "1s";
    btn.style.transform = "scale(3)";
    btn.style.opacity = "0";
    btn.style.pointerEvents = "none";
}



// Slider offer
let slider = document.querySelector(".sliderSecvices");
let sliderItem = document.querySelectorAll(".sliderSecvices__item");

document.addEventListener("DOMContentLoaded", function() {
    sliderItem[0].click();
});
sliderItem.forEach(function(item) {
    item.addEventListener('click', function(e) {
        // console.log("прив")
        if (!slider.classList.contains("anim") && !this.classList.contains("active")) {
            slider.classList.add("anim");
            sliderItem.forEach(function(slide) {
                slide.classList.remove("active");
                if (slider.classList.contains("animated")) {
                    slide.style.transition = "1s";
                    slide.style.transitionDelay = "0.2s";
                }

            });
            e.target.classList.add("active");
            if (window.innerWidth > 1025) {
                sliderItem.forEach(function(slide) {
                    slide.style.flexGrow = "1";
                });
                if (e.target.nextElementSibling) {
                    e.target.nextElementSibling.style.flexGrow = "3";
                    if (e.target.nextElementSibling.nextElementSibling) {
                        e.target.nextElementSibling.nextElementSibling.style.flexGrow = "2";
                    }
                }
                if (e.target.previousElementSibling) {
                    e.target.previousElementSibling.style.flexGrow = "3";
                    if (e.target.previousElementSibling.previousElementSibling) {
                        e.target.previousElementSibling.previousElementSibling.style.flexGrow = "2";
                    }
                }
                e.target.style.flexGrow = "6";
            } else {
                sliderItem.forEach(function(slide) {
                    slide.style.flexGrow = "0";
                });
                if (e.target.nextElementSibling) {
                    e.target.nextElementSibling.style.flexGrow = "2";

                }
                if (e.target.previousElementSibling) {
                    e.target.previousElementSibling.style.flexGrow = "2";
                }
                e.target.style.flexGrow = "8";
            }

            slider.classList.remove("anim");
        }
    })
})

// Карта
mapPoint = document.querySelectorAll(".map__point");
cartMap = document.querySelector(".map__detailsInner");
cartMapName = document.querySelector(".map__detailsName");
cartMapText = document.querySelector(".map__detailsText");

mapPoint.forEach(function(item) {
    item.addEventListener('click', function(e) {
        mapPoint.forEach(function(slide) {
            slide.classList.remove("active");
        });
        // console.log(this.dataset.target)
        let object = arrObjects.find(item => item.name == this.dataset.target);
        console.log(object)
        changeCartMap(object);
        this.classList.add("active");
    })
});

function changeCartMap(object) {
    cartMap.style.transform = "translateX(-100%)"
    setTimeout(() => {
        cartMapName.innerText = object.name;
        if (object.contacts !== "") {
            cartMapText.innerHTML = object.contacts;
        } else {
            cartMapText.innerHTML = "<button class='btn3' >Узнать больше</button";
        }
        setTimeout(() => {
            cartMap.style.transform = "translateX(0%)"
        }, 300);
    }, 300);
}

tippy('[data-tippy-content]', {
    allowHTML: true,
    arrow: false,
    delay: [100, 400],
    trigger: "click",
    zIndex: 99,
    theme: 'gt',
});




let sliderPWrap = document.querySelector(".sliderP");
let sliderPItem = document.querySelectorAll(".sliderP__item");
let sliderActiveNum = 0;

// let firstEl = document.querySelector(".firstSection");

//Переключение слайдера по скролу
addOnWheel(sliderPWrap, function(e) {
    e.preventDefault()
    if (!bodyEl.classList.contains("animSl")) {
        bodyEl.classList.add("animSl");
        var delta = e.deltaY || e.detail || e.wheelDelta;

        sliderPItem.forEach(function(item, i, arr) {
            if (item.classList.contains('active')) {
                sliderActiveNum = i;
                return false
            }
            // console.log("Прив")
        });
        if (delta > 0) {
            if (sliderActiveNum == sliderPItem.length - 1) {
                document.querySelector(".seaBig").scrollIntoView({ block: "center", behavior: "smooth" });
                bodyEl.classList.remove("animSl");
                return false;
            }

            sliderPHideSlide()
            sliderPItem[sliderActiveNum].classList.remove("active");
            setTimeout(() => {
                sliderPItem[sliderActiveNum + 1].classList.add("active");
                sliderPItem[sliderActiveNum + 1].scrollIntoView({ block: "center", behavior: "smooth" });
                setTimeout(() => {
                    sliderPShowSlide();
                    setTimeout(() => {
                        bodyEl.classList.remove("animSl");
                    }, 1000);
                }, 300);
            }, 500);
        } else {
            if (sliderActiveNum == 0) {
                document.querySelector(".projectHead").scrollIntoView({ block: "center", behavior: "smooth" });
                bodyEl.classList.remove("animSl");
                return false;
            }
            sliderPHideSlide()
            sliderPItem[sliderActiveNum].classList.remove("active");
            setTimeout(() => {
                sliderPItem[sliderActiveNum - 1].classList.add("active");
                sliderPItem[sliderActiveNum - 1].scrollIntoView({ block: "center", behavior: "smooth" });
                setTimeout(() => {
                    sliderPShowSlide();
                    setTimeout(() => {
                        bodyEl.classList.remove("animSl");
                    }, 1000);
                }, 300);
            }, 500);
        };
    };
});

addOnWheel(document.querySelector(".seaBig"), function(e) {
    console.log(e)
    var delta = e.deltaY || e.detail || e.wheelDelta;
    if (delta < 0) {
        e.preventDefault()
        sliderPItem.forEach(function(item, i, arr) {
            item.classList.remove("active");
        });
        sliderPItem[sliderPItem.length - 1].scrollIntoView({ block: "center", behavior: "smooth" });
        sliderPItem[sliderPItem.length - 1].classList.add("active");
        setTimeout(() => {
            sliderPShowSlide();
        }, 300);
        return false;
    }
});
addOnWheel(document.querySelector(".projectHead"), function(e) {
    sliderPItem.forEach(function(item, i, arr) {
        item.classList.remove("active");
    });
    sliderPItem[0].classList.add("active");
    setTimeout(() => {
        sliderPShowSlide();
    }, 300);
    return false;

});

sliderPWrap.onclick = function() {
    if (!bodyEl.classList.contains("animSl")) {
        bodyEl.classList.add("animSl");
        sliderPItem.forEach(function(item, i, arr) {
            if (item.classList.contains('active')) {
                sliderActiveNum = i;
                return false
            }
        });
        if (sliderActiveNum == sliderPItem.length - 1) {
            document.querySelector(".seaBig").scrollIntoView({ block: "center", behavior: "smooth" });
            bodyEl.classList.remove("animSl");
            return false;
        }

        sliderPHideSlide()
        sliderPItem[sliderActiveNum].classList.remove("active");
        setTimeout(() => {
            sliderPItem[sliderActiveNum + 1].classList.add("active");
            sliderPItem[sliderActiveNum + 1].scrollIntoView({ block: "center", behavior: "smooth" });
            setTimeout(() => {
                sliderPShowSlide();
                setTimeout(() => {
                    bodyEl.classList.remove("animSl");
                }, 1000);
            }, 300);
        }, 500);
    }
};

function sliderPHideSlide() {
    let slide = document.querySelector(".sliderP__item.active");
    if (slide) {
        let slideContent = slide.querySelector(".sliderP__content");
        let slideText = slide.querySelector(".sliderP__textWrap");
        let slideImgW = slide.querySelector(".sliderP__img");
        let slideImg = slide.querySelector(".sliderP__img>img");
        let slideBg = slide.querySelector(".sliderP__bg");
        slideBg.style.transition = "1s ease-out";
        slideBg.style.opacity = "1";
        slideText.style.height = "0";
        slideContent.style.transition = "1s";
        slideContent.style.opacity = "0";
        slideImgW.style.transition = "1s";
        slideImgW.style.opacity = "0";
        setTimeout(() => {
            slideText.style.transition = "0";
            slideText.style.height = "";
            slideText.style.transform = "";
            slideImg.style.transition = "0s";
            slideImg.style.height = "0vh";
        }, 1000);
    }
}

function sliderPShowSlide() {
    let slide = document.querySelector(".sliderP__item.active");
    if (slide) {
        let slideContent = slide.querySelector(".sliderP__content");
        let slideText = slide.querySelector(".sliderP__textWrap");
        let slideImgW = slide.querySelector(".sliderP__img");
        let slideImg = slide.querySelector(".sliderP__img > img");
        let slideBg = slide.querySelector(".sliderP__bg");
        slideBg.style.transition = "1s ease-out";
        slideBg.style.opacity = "0";
        slideContent.style.opacity = "1";
        slideImgW.style.transition = "1s ease-out";
        slideImgW.style.opacity = "1";
        slideText.style.transition = "1s ease-out 0.4s";
        slideText.style.transform = "translateX(0)";
        slideImg.style.transition = "1s ease-out";
        slideImg.style.height = "40vh";

    }
}


window.onscroll = function(e) {
    let scrMy = window.pageYOffset;
    let aboutTop = document.querySelector(".sectionAbout ").getBoundingClientRect();
    let licensesTop = document.querySelector(".licenses  ").getBoundingClientRect();
    let partnersTop = document.querySelector(".partners  ").getBoundingClientRect();
    if (-aboutTop.top > 0 && -aboutTop.top < aboutTop.height) {
        paralaxAbout()
    }
    if (-licensesTop.top > 0 && -licensesTop.top < licensesTop.height) {
        paralaxLicenses()
    }
    if (-partnersTop.top > 0 && -partnersTop.top < partnersTop.height) {
        paralaxPartners()
    }
};

function paralaxAbout() {
    let aboutTop = document.querySelector(".sectionAbout ").getBoundingClientRect()
    document.querySelector(".sectionAbout__scr1").style.transform = "translateY(" + -aboutTop.top / 5 + "px )";
    document.querySelector(".sectionAbout__scr1").style.transition = "0.5s ease-out";
    document.querySelector(".sectionAbout__scr2").style.transform = "translateY(" + -aboutTop.top / 10 + "px )";
    document.querySelector(".sectionAbout__scr2").style.transition = "0.5s ease-out";
}

function paralaxLicenses() {
    let licensesTop = document.querySelector(".licenses  ").getBoundingClientRect();
    let coef = -licensesTop.top / licensesTop.height - 0.5;
    let imges = document.querySelectorAll(".licenses__img");
    imges.forEach(function(img) {
        img.style.transform = "scale(1.15)translateY(" + 10 * coef + "% )";
        img.style.transition = "0.5s ease-out";
    });
}

function paralaxPartners() {
    let partnersTop = document.querySelector(".partners  ").getBoundingClientRect().top;
    let lines = document.querySelectorAll(".partners__line");
    let x = (partnersTop) / 5;
    console.log(x)
    lines.forEach(function(line, i) {
        console.log(line)
        let rev = 1;
        (i % 2) ? rev = -1: '';
        line.style.transform = "translateX(" + rev * x + "px )";
    });;
}







//Скролл к блоку
function addOnWheel(elem, handler) {
    if (elem.addEventListener) {
        if ('onwheel' in document) {
            // IE9+, FF17+
            elem.addEventListener("wheel", handler);
        } else if ('onmousewheel' in document) {
            // устаревший вариант события
            elem.addEventListener("mousewheel", handler);
        } else {
            // 3.5 <= Firefox < 17, более старое событие DOMMouseScroll пропустим
            elem.addEventListener("MozMousePixelScroll", handler);
        }
    } else { // IE8-
        text.attachEvent("onmousewheel", handler);
    }
}

! function() {
    "use strict";

    function o() {
        var o = window,
            t = document;
        if (!("scrollBehavior" in t.documentElement.style && !0 !== o.__forceSmoothScrollPolyfill__)) {
            var l, e = o.HTMLElement || o.Element,
                r = 468,
                i = { scroll: o.scroll || o.scrollTo, scrollBy: o.scrollBy, elementScroll: e.prototype.scroll || n, scrollIntoView: e.prototype.scrollIntoView },
                s = o.performance && o.performance.now ? o.performance.now.bind(o.performance) : Date.now,
                c = (l = o.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(l) ? 1 : 0);
            o.scroll = o.scrollTo = function() { void 0 !== arguments[0] && (!0 !== f(arguments[0]) ? h.call(o, t.body, void 0 !== arguments[0].left ? ~~arguments[0].left : o.scrollX || o.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : o.scrollY || o.pageYOffset) : i.scroll.call(o, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : o.scrollX || o.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : o.scrollY || o.pageYOffset)) }, o.scrollBy = function() { void 0 !== arguments[0] && (f(arguments[0]) ? i.scrollBy.call(o, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : h.call(o, t.body, ~~arguments[0].left + (o.scrollX || o.pageXOffset), ~~arguments[0].top + (o.scrollY || o.pageYOffset))) }, e.prototype.scroll = e.prototype.scrollTo = function() {
                if (void 0 !== arguments[0])
                    if (!0 !== f(arguments[0])) {
                        var o = arguments[0].left,
                            t = arguments[0].top;
                        h.call(this, this, void 0 === o ? this.scrollLeft : ~~o, void 0 === t ? this.scrollTop : ~~t)
                    } else {
                        if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
                        i.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                    }
            }, e.prototype.scrollBy = function() { void 0 !== arguments[0] && (!0 !== f(arguments[0]) ? this.scroll({ left: ~~arguments[0].left + this.scrollLeft, top: ~~arguments[0].top + this.scrollTop, behavior: arguments[0].behavior }) : i.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop)) }, e.prototype.scrollIntoView = function() {
                if (!0 !== f(arguments[0])) {
                    var l = function(o) { for (; o !== t.body && !1 === (e = p(l = o, "Y") && a(l, "Y"), r = p(l, "X") && a(l, "X"), e || r);) o = o.parentNode || o.host; var l, e, r; return o }(this),
                        e = l.getBoundingClientRect(),
                        r = this.getBoundingClientRect();
                    l !== t.body ? (h.call(this, l, l.scrollLeft + r.left - e.left, l.scrollTop + r.top - e.top), "fixed" !== o.getComputedStyle(l).position && o.scrollBy({ left: e.left, top: e.top, behavior: "smooth" })) : o.scrollBy({ left: r.left, top: r.top, behavior: "smooth" })
                } else i.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
            }
        }

        function n(o, t) { this.scrollLeft = o, this.scrollTop = t }

        function f(o) { if (null === o || "object" != typeof o || void 0 === o.behavior || "auto" === o.behavior || "instant" === o.behavior) return !0; if ("object" == typeof o && "smooth" === o.behavior) return !1; throw new TypeError("behavior member of ScrollOptions " + o.behavior + " is not a valid value for enumeration ScrollBehavior.") }

        function p(o, t) { return "Y" === t ? o.clientHeight + c < o.scrollHeight : "X" === t ? o.clientWidth + c < o.scrollWidth : void 0 }

        function a(t, l) { var e = o.getComputedStyle(t, null)["overflow" + l]; return "auto" === e || "scroll" === e }

        function d(t) {
            var l, e, i, c, n = (s() - t.startTime) / r;
            c = n = n > 1 ? 1 : n, l = .5 * (1 - Math.cos(Math.PI * c)), e = t.startX + (t.x - t.startX) * l, i = t.startY + (t.y - t.startY) * l, t.method.call(t.scrollable, e, i), e === t.x && i === t.y || o.requestAnimationFrame(d.bind(o, t))
        }

        function h(l, e, r) {
            var c, f, p, a, h = s();
            l === t.body ? (c = o, f = o.scrollX || o.pageXOffset, p = o.scrollY || o.pageYOffset, a = i.scroll) : (c = l, f = l.scrollLeft, p = l.scrollTop, a = n), d({ scrollable: c, method: a, startTime: h, startX: f, startY: p, x: e, y: r })
        }
    }
    "object" == typeof exports && "undefined" != typeof module ? module.exports = { polyfill: o } : o()
}();


let arrObjects = [{
        name: 'ООО "НПФ "ГТ ИНСПЕКТ"',
        contacts: `ул. Есенина 5Б-60Н, Санкт-Петербург, 194354 Россия<br>
    тел. +7 (812) 3373037<br>
    e-mail: info@gtcorporation.com
    `
    },
    {
        name: 'OOО "ГТ-КАЛИНИНГРАД"',
        contacts: `ул. Чайковского 58, Калининград, 236022 Россия<br>
    тел. +7 (4012) 916680<br>
    e-mail: gt-kaliningrad@gtcorporation.com
    `
    },
    {
        name: 'ООО "ГТ Север"',
        contacts: `ул. Железнодорожная 37,Северодвинск, 164521 Россия<br>
    тел./факс +7 (8184) 565010<br>
    e-mail: gtseverodvinsk@gtcorporation.com
    `
    },
    {
        name: 'Южное отделение OOO "НПФ "ГТ ИНСПЕКТ"',
        contacts: `Сухумское шоссе 57,<br>
    Новороссийск, 353900 Россия<br>
    тел. +7 (928) 4482901<br>
    e-mail: gtnovoros@yandex.ru
    `
    },
    {
        name: 'Причалы в посёлке Ижевское',
        contacts: '',
        about1: `В 2000-2002 годах реконструированы причалы № 1,2,3 и построен причал № 6 на базе обеспечения ООО «ЛУКОЙЛ-Калининградморнефть» в поселке Ижевское, Калининградской области.  База создавалась  для строительства и эксплуатации стационарных морских нефтедобывающих платформ в российской Балтике. `,
        about2: `ГТ ИНСПЕКТ также участвовал в восстановлении антикоррозионного лакокрасочного покрытия незаконченного с советских времен опорного блока ОБ-1, на шельфе Балтийского моря. Осуществлял монтаж и спуск на воду блока ОБ-2 платформы Д-6 месторождения Кравцовское. Осуществлял монтаж и спуск на воду блока ОБ-2 платформы Д-6 месторождения Кравцовское.`
    },
    {
        name: 'Подводная установка грунтовых анкеров',
        contacts: '',
        about1: `ГТ ИНСПЕКТ одним из первых спроектировал применил подводную установку грунтовых анкеров для
    реконструкции и усиления портовых гидротехнических сооружений. `,
        about2: `Отработанная в порту Вентспилс
    технология была успешно применена в 2008 году при реконструкции Причалов № 1-4 угольного порта
    Высоцк в сложнейших геологических условиях и при усилении оградительных молов порта Северодвинск.`
    },
    {
        name: 'Реконструкция портов в Сочи',
        contacts: '',
        about1: `По заданию ФГУП «РОСМОРПОРТ» приступили к ремонту портовых сооружений Сочи еще до того как
    стартовала основная строительная программа подготовили к Олимпийским играм и к 2013 году были
    отремонтированы, реконструированы и переоборудованы все старые причалы порта Сочи, `,
        about2: `построены
    причальные и оградительные сооружения в новом порту Имеретинский (Адлер) и проведена
    реконструкция круизных пассажирских портопунктов Большого Сочи.`
    },
    {
        name: 'Подводное основание в порту Северодвинск',
        contacts: '',
        about1: `В 2004-2005 годах реконструирован котлован в порту Северодвинск. Устроил подводную постель на
    глубине – 22,5 метра для строительства морской ледостойкой нефтедобывающей платформы -
    «Приразломная». Для выполнения отсыпки и тщательного равнения постели был сконструирован и
    построен специальный подводный планировщик на базе самоподъемной платформы `,
        about2: `в уникальной
    кольцевой сборке. 
    В 2006 году это оборудование и технологии были нами использованы для равнения и крепления от
    размыва дна у причальных сооружений в порту Приморск Ленинградской области. А в 2007 году, для создания подводной постели для посадки на дно погружной баржи, перевозящей опорный блок рейдового терминалва Варандей.`
    },
    {
        name: 'Реконструкция входных молов',
        contacts: '',
        about1: `В период 2007-2009 годах проведена реконструкция входных молов Калининградского морского
    канала. Реализация проекта потребовала привлечения значительного количества плавсредств и
    строительных производственных мощностей. `,
        about2: `Для доставки более чем 100 тыс. кубов фигурных бетонных
    массивов на молы даже повторили идею немецких инженеров-строителей и проложили по голове
    Южного мола узкоколейную железную дорогу. В эти же годы был реконструирован оградительный мол
    рыбного порта Пионерский в Калининградской области.`
    },
    {
        name: 'Мониторинг и ремонт',
        contacts: '',
        about1: `С 1992 года постоянно ведем работы по мониторингу сооружений, восстановлению
    антикоррозионного покрытия и ремонту причальных сооружений в зоне переменного уровня воды с
    применением гермокамер самых различных конфигураций, применяем лучшие лакокрасочные
    материалы и ремонтные составы мировых брендов. `,
        about2: `Реновируем отбойное и швартовное, рельсовое
    оборудование причалов.
    Испытательный центр выполняет обследования и освидетельствования гидротехнических сооружений,
    выпуск и обновление паспортов объектов, инженерные расчеты сооружений во всех программных
    комплексах.`
    },
    {
        name: 'Пирс комплекса Тамань',
        contacts: '',
        about1: `В 2010 построили свайное основание зернового терминала порта Тамань. Для приёма судов расчётного тоннажа пирс уходит далеко в Чёрное море.`,
        about2: ``
    },
    {
        name: 'Реконструкция в порту Балтийск',
        contacts: '',
        about1: `В период с 2003 по 2008 года по заказу ФГУП «РОСМОРПОРТ» была произведена реконструкция старых
    военных и строительство новых причальных сооружений в порту Балтийск, которые обеспечили прямое
    без транзитное автомобильное и железнодорожное сообщение между Калининградской и
    Ленинградской областями (порт Усть-Луга). `,
        about2: `В состав порта Балтийск входят: грузопассажирский
    автопаромный терминал, универсальный автомобильно-железнодорожный паромный терминал и
    контейнерный терминал.`
    },
    {
        name: 'Комплекс причальных сооружений',
        contacts: '',
        about1: `В рамках освоения нефтяных месторождений Северного Каспия для судостроительного завода
    «Красные Баррикады» в Астраханской области в 2006-2007 годах спроектирован и построен комплекс
    причальных сооружений для перегрузки тяжеловесных модулей нефтедобывающих платформ
    месторождения им. Н. Корчагина. `,
        about2: ``
    },
]