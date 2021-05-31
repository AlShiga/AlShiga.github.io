const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  repeat: true,
  smooth: true,
  lerp: 0.1,
});
new Accordion('.accordion-container',{
  duration: 400,
  showMultiple: true,
  onOpen: function() {
    scroll.update();
  },
  onClose: function() {
    scroll.update();
  }
});
scroll.update();
let head = document.querySelector('header')
function hideMenu(head){
  if(!head)return;
  scroll.on("scroll", function(t) {
  // console.log(t.delta.y)
  t.delta.y<200? 
    !head.classList.contains('header_full')?
    head.classList.add('header_full'):"":
    head.classList.contains('header_full')?
      head.classList.remove('header_full'):'';
})
}
hideMenu(head)

const animBtn={
  btn: document.querySelectorAll(".btn1"),
  btnC: [],
  btnT: [],
  btnB: [],
  isAnim: true,
  init: function(){
     if(innerWidth>1024 && animBtn.btn.length){
      setInterval(()=>{
        animBtn.isAnim=true;
      },100)
      animBtn.btn.forEach((el, i) => {
        animBtn.btnC[i]=el.querySelector(".btn1__cirkle");
        animBtn.btnT[i]=el.querySelector(".btn1__svg");
        animBtn.btnB[i]=el.querySelector(".btn1__bg");
      })
      animBtn.btnB.forEach((el, i) => {
          el.addEventListener('mousemove', (e) => {
          if(!animBtn.isAnim) return;
          animBtn.anim(e, i);
          animBtn.isAnim=false;
          });
          el.addEventListener('mouseout', (e) => {
            animBtn.animEnd(e, i);
          });
      })
      animBtn.btnC.forEach((el, i)=>{
        el.addEventListener("mouseenter", function() {
          animBtn.animText(animBtn.btnC[i], animBtn.btnT[i]);
        });
      });
     }
  },
  anim: function(e, i){
      let xA = e.offsetX==undefined?e.layerX:e.offsetX;
      let yA = e.offsetY==undefined?e.layerY:e.offsetY;
      let w = e.target.clientWidth;
      let h = e.target.clientHeight;
      let x = xA-w/2;
      let y = yA-w/2;
    
      // console.log(y+'x'+x);
      // console.log(w+'x'+h);
      gsap.to(animBtn.btnC[i], {
        duration: 0.5,
        x: Math.cbrt(x)*4,
        y: Math.cbrt(y)*4,
        scaleX:0.95, 
        scaleY:0.95,
        ease: "ease"
      });
      gsap.to(animBtn.btnT[i], {
         duration: 0.5,
         x: Math.cbrt(x)*2,
         y: Math.cbrt(y)*2,
         ease: "ease",
         rotation:45,
         transformOrigin:"center"
       });
  },
  animEnd: function(e, i){
    gsap.to(animBtn.btnC[i], {
     duration: 1,
     x: 0,
     y: 0,
     scaleX:1, 
     scaleY:1,
     ease: "ease"
    });
    gsap.to(animBtn.btnT[i], {
     duration: 1,
     x: 0,
     y: 0,
     ease: "ease",
     rotation:0,
     transformOrigin:"center"
    });
  },
  animText: function(target, el){
    // console.log(target)
    // console.log(el)
    
  }
}
animBtn.init();
