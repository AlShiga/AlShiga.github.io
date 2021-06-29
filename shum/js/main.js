
// const accordeon = {
//   init: function(){
//     if(document.querySelector('.accordeon')){
//       accordeon.heads = document.querySelectorAll('.accordeon__head');
//       accordeon.heads.forEach((el)=>{
//         el.addEventListener('click', accordeon.showAcc);
//       })
//     }
//   },
//   showAcc: function(evt){
//       accordeon.heads.forEach((el)=>{
//         el.classList.remove('open');
//       })
//       evt.currentTarget.classList.add('open');
//   }
// }
// document.addEventListener('DOMContentLoaded',()=>{
//   accordeon.init();
//   moveBtn.init();
//   invertEl.initInv();
// });


const accordeon = {
  init: function(){
    this.wrap = document.querySelectorAll('.accordeon');
    if(this.wrap.length){
      this.wrap.forEach((wrapI)=>{
        wrapI.addEventListener('click', (e)=>{
            if(e.target.classList.contains("accordeon__head")|| e.target.closest('.accordeon__head')){

            }
        });
      })
    }
  },
  showAcc: function(evt){
    accWr.querySelectorAll('.accordeon__head').forEach((el)=>{
      el.classList.remove('open');
    })
    console.log(evt)
    console.dir(evt)
    evt.currentTarget.classList.add('open');
  }
}
document.addEventListener('DOMContentLoaded',()=>{
  accordeon.init();
});