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
window.onscroll = function(e) {
    var elm = document.querySelector(".sectionVideo");

    elm.scrollIntoView({ block: "start", behavior: "smooth" });

    // if (window.pageYOffset < docHeight) {
    //     smoothScroll(".sectionVideo");
    // }
};

function currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
}


function elmYPosition(eID) {
    var elm = document.querySelector(eID);
    var y = elm.offsetTop;
    var node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
    }
    return y;
}


function smoothScroll(eID, speed) {
    var startY = currentYPosition();
    var stopY = elmYPosition(eID);
    var distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
        scrollTo(0, stopY);
        return;
    }
    var speed = Math.round(distance / 10);
    if (speed >= 20) speed = 20;
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    if (stopY > startY) {
        for (var i = startY; i < stopY; i += step) {
            setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
            leapY += step;
            if (leapY > stopY) leapY = stopY;
            timer++;
        }
        return;
    }
    for (var i = startY; i > stopY; i -= step) {
        setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
        leapY -= step;
        if (leapY < stopY) leapY = stopY;
        timer++;
    }
}