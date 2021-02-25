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
        moveBtn.parentBtn2.push(el.closest("section") || document);
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