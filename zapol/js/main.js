const moveBtn = {
  btn2: document.querySelectorAll(".btn2"),
  parentBtn2: [],
  btn2Arr: [],
  btn2Circle1: [],
  btn2Circle2: [],
  animBtn: false,
  anim: function (e, i){
    let pos = moveBtn.btn2[i].getBoundingClientRect();
    let x = pos.x+pos.width/2;
    let y = pos.y+pos.height/2;
    let xM = e.clientX;
    let yM = e.clientY;
    let posX = x-xM;
    let posY = y-yM;
    if(Math.abs(posY)<300 && Math.abs(posX)<300){
      gsap.to(moveBtn.btn2Circle1[i], {
        duration: 1,
        x: -posX/15,
        y: -posY/15,
        ease: "ease"
      });
      gsap.to(moveBtn.btn2Circle2[i], {
          duration: 1,
          x: -posX/10,
          y: -posY/10,
          ease: "ease"
        });
      gsap.to(moveBtn.btn2Arr[i], {
        duration: 1,
        x: -posX/35,
        y: -posY/35,
        ease: "ease"
      });
      } else {
      gsap.to(moveBtn.btn2Circle1[i], {
        duration: 2.5,
        x: 0,
        y: 0,
        ease: "ease"
      });
      gsap.to(moveBtn.btn2Circle2[i], {
        duration: 2.5,
        x: 0,
        y: 0,
        ease: "ease"
      });
      gsap.to(moveBtn.btn2Arr[i], {
        duration: 2.5,
        x: 0,
        y: 0,
        ease: "ease"
      });
    }
  },
  init: function (){
    if(innerWidth>1024 && moveBtn.btn2.length){
      moveBtn.btn2.forEach(el => {
        moveBtn.parentBtn2.push(el.closest("section")||el.closest("footer")|| document);
        moveBtn.btn2Arr.push(el.querySelector(".btn2__arr"));
        moveBtn.btn2Circle2.push(el.querySelector(".btn2__c2"));
        moveBtn.btn2Circle1.push(el.querySelector(".btn2__c1"));
      });
      moveBtn.parentBtn2.forEach((el, i) => {
          el.addEventListener('mousemove', (e) => {
              if(moveBtn.animBtn){
                moveBtn.animBtn = false;
                moveBtn.anim(e, i);
              }
          });
      });
      setInterval(() => {
        moveBtn.animBtn = true;
      }, 60);
    }
  }
}
moveBtn.init();



const invertEl = {
  elWr: document.querySelector("section.mInv"),
  el: document.querySelector(".cirkle"),
  elBg: document.querySelector(".cirkleBg"),
  scrW:  0,
  scrH:  0,
  mPosX: 0,
  mPosY: 0,
  onWindowMouseMove: function(event) {
    invertEl.mPosX = event.pageX-invertEl.elWr.offsetLeft ;
    invertEl.mPosY = event.pageY-invertEl.elWr.offsetTop ;
  },
  render: function (event) {
    if(invertEl.mPosX<100 ||  invertEl.mPosY<100 || invertEl.mPosX > invertEl.scrW-100 ||  invertEl.mPosY > invertEl.scrH-250){
      invertEl.el.style.width="0";
      invertEl.el.style.height="0";
    } else {
      invertEl.el.style.width="";
      invertEl.el.style.height="";
      invertEl.el.style.transform="translate("+ (-120 + invertEl.mPosX) + "px, "+ (-120 + invertEl.mPosY) +"px)";
      invertEl.elBg.style.transform="translate("+ (120 - invertEl.mPosX) + "px, "+ (120 - invertEl.mPosY) +"px)";
    }
    requestAnimationFrame(invertEl.render);
    // console.log('z')
  },
  initInv: function (){
    if(invertEl.elWr){
      invertEl.scrW = document.querySelector("section.mInv").offsetWidth;
      invertEl.scrH = document.querySelector("section.mInv").offsetHeight;
      invertEl.elBg.style.width= invertEl.elWr.scrollWidth+"px"
      invertEl.elBg.style.offsetHeight= invertEl.elWr.scrollHeight+"px"
      invertEl.elWr.addEventListener('mousemove', invertEl.onWindowMouseMove);
      window.addEventListener('resize', invertEl.reload);
      invertEl.render();

    }
  },
  reload: function (){
    if(invertEl.elWr){
      invertEl.scrW = document.querySelector("section.mInv").offsetWidth;
      invertEl.scrH = document.querySelector("section.mInv").offsetHeight;
      invertEl.elBg.style.width= invertEl.elWr.scrollWidth+"px"
      invertEl.elBg.style.offsetHeight= invertEl.elWr.scrollHeight+"px"

      invertEl.elWr.addEventListener('mousemove', invertEl.onWindowMouseMove);
      invertEl.render();
    }
  },

}
invertEl.initInv();



(function magicScr(){
  let controller = new ScrollMagic.Controller({addIndicators: true});

  let secVideo  = document.querySelector(".mVideo");

  if(secVideo){
    let secVideoHeight = secVideo.offsetHeight;
    (function projectAnim(){
      let video = secVideo.querySelector(".mVideo__wrap")
      let timeline = gsap.timeline()
      // .add(TweenLite.to(grid,1, { yPercent: -20}),0)
      .add(TweenLite.fromTo(video, 0.7, {width:"20%"}, {width:"100%"}),0)
      .add(TweenLite.fromTo(video, 0.4, {height:"20%"}, {height:"100%"}),0)
      .add(TweenLite.fromTo(video, 0.7, {borderRadius: "100%"}, {borderRadius: "0%"}),0)
      var scene1 = new ScrollMagic.Scene({triggerElement: secVideo, duration: secVideoHeight/4*3, offset: -secVideoHeight/4 , tweenChanges: true})
      scene1.setTween(timeline);
      // scene1.addIndicators({name: "Project"}) // add indicators (requires plugin);
      scene1.addTo(controller);
    }());
  }

  let lineText  = document.querySelectorAll(".textLine");
  if(lineText.length){
    lineText.forEach(el => {
      let lineTextHeight = el.offsetHeight;
      let l1 = el.querySelector(".textLine__top");
      let l2 = el.querySelector(".textLine__bottom");
      (function projectAnim(){
        let timeline = gsap.timeline()
        .add(TweenLite.fromTo(l1, 1, {transform: "translateX(0px)"}, {transform: "translateX(-500px)"}),0)
        .add(TweenLite.fromTo(l2, 1, {transform: "translateX(0px)"}, {transform: "translateX(-500px)"}),0)
        var scene1 = new ScrollMagic.Scene({triggerElement: el, duration: innerHeight*3/2, offset: -innerHeight/2 , tweenChanges: true})
        scene1.setTween(timeline);
        // scene1.addIndicators({name: "Project"}) // add indicators (requires plugin);
        scene1.addTo(controller);
      }());
    });
  }

  let mImgPra  = document.querySelector(".mImgPra");
  if(mImgPra){
    let mImgPraHeihgt = mImgPra.offsetHeight;
    (function projectAnim(){
      let img = mImgPra.querySelector("img")
      let timeline = gsap.timeline()
      .add(TweenLite.fromTo(img, 1, {yPercent: 0}, {yPercent: -40}),0)
      var scene1 = new ScrollMagic.Scene({triggerElement: mImgPra, duration: innerHeight*3/2, offset: -innerHeight/3 , tweenChanges: true})
      scene1.setTween(timeline);
      // scene1.addIndicators({name: "Project"}) // add indicators (requires plugin);
      scene1.addTo(controller);
    }());
  }

}());

if(document.querySelector(".prel svg")){
  const prelSvg = document.querySelector(".prel svg");
  const prelBg = document.querySelector(".prel__bg");
  const prelBgImg = document.querySelector(".prel__bgImg");
  let prelImgOnLoad = false;
  const prelInterval = setInterval(() => {
    // prelSvg.classList.toggle("prel__logo_hide")
    if(!prelSvg.classList.contains("prel__logo_hide")){
      prelSvg.classList.add("prel__logo_hide");
    } else{
      prelSvg.classList.remove("prel__logo_hide");
      if(true){
        prelBg.classList.add("prel__bg_show");
        clearTimeout(prelInterval);
        setTimeout(() => {
          prelSvg.classList.add("prel__logo_hide");
          prelBg.classList.add("prel__bg_hide");
        }, 2000);
      }
    }
  }, 2000);

  document.querySelector(".prel__bgImg").addEventListener('load', (e)=>{
    prelImgOnLoad = true;
  });
}