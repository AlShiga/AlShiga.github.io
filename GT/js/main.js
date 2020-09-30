let bodyEl = document.querySelector("body")


let docHeight = window.innerHeight;
console.log(docHeight);

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => removePreload(), 300);
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

    setTimeout(() => {
        bodyEl.classList.remove("step0");
        bodyEl.classList.add("step5");
        setTimeout(() => {
            bodyEl.classList.remove("step5");
            bodyEl.classList.add("step8");
            headerEl.style.transform = "translateY(0%)";
            headerEl.style.transition = "0.2s cubic-bezier(.19,0,.51,1)";
            bgLeftEl.style.opacity = "1";
            rectEl.style.height = "216px";
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
SmoothScroll({
    stepSize: 40,
    accelerationDelta: 500,
    accelerationMax: 3,
})


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

let btnNext = document.querySelector(".btnNext__time");

btnNext.onclick = function() {
    // smoothScroll(".sectionVideo");
    var elm = document.querySelector(".sectionVideo");

    elm.scrollIntoView({ block: "start", behavior: "smooth" });
};
// window.onscroll = function(e) {
//     var elm = document.querySelector(".sectionVideo");

//     elm.scrollIntoView({ block: "start", behavior: "smooth" });

//     // if (window.pageYOffset < docHeight) {
//     //     smoothScroll(".sectionVideo");
//     // }
// };

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


let firstEl = document.querySelector(".firstSection");

addOnWheel(firstEl, function(e) {
    var elm = document.querySelector(".sectionVideo");
    console.log("Круть")
        // отменим прокрутку
    e.preventDefault();
    elm.scrollIntoView({ block: "start", behavior: "smooth" });

});



































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