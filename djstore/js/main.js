const btnOpenMenu = document.querySelector(".buttonMenu");
const menu = document.querySelector(".menu");

const btnOpenModal = document.querySelectorAll(".modalOpen");
const modalForm = document.querySelector(".modalForm");
const overlayModalForm = document.querySelector(".modalOverlay");
const btnCloseModal = document.querySelectorAll(".modalClose");

const sendForm = document.querySelector(".sendForm");
const inputForm = document.querySelectorAll(".inputForm");

btnOpenModal.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    openModal();
  });
});

btnCloseModal.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      closeModal();
    });
  });

inputForm.forEach((el) => {
    el.addEventListener("click", (e) => {
        el.classList.remove('form__input-red')
    });
  });

btnOpenMenu.onclick = function () {
  menu.classList.toggle("menu-open");
  btnOpenMenu.classList.toggle("buttonMenu-close");
};

overlayModalForm.onclick = closeModal;
btnOpenModal.onclick = openModal;

// submit.addEventListener('click', function(e) {
//     console.log('123')
// })

sendForm.onclick = (event) => {
  event.preventDefault();
  let valid = validateForm(inputForm)
  console.log(valid)
  if(valid){
    sendMyForm(inputForm)
  }
  else{
      console.log('no')
  }
};

function validateForm(arr){
    let out = true
    arr.forEach((el) =>{
        if (el.value.length==0){
            el.classList.add('form__input-red');
            out = false;
        }
    })
    return out
}
function sendMyForm(arr){
    arr.forEach((el) =>{
           console.log(el.value)
    })
    modalForm.classList.add('modalForm-success')
    arr.forEach((el) =>{
        el.value='';
 })
}

function openModal() {
  modalForm.style.display = "block";
}
function closeModal() {
  modalForm.style.display = "none";
}
