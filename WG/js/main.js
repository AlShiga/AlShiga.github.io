body = document.querySelector('body');
menu = document.querySelector('.header__menuBottom');
btnOpenMenu = document.querySelector('.burger');
console.log(body);
function openMenu(){
    menu.classList.toggle("open");
    if (menu.classList.contains("open")){
        body.classList.add("no-scroll");
    } else{
        body.classList.remove("no-scroll");
    }
}

btnOpenMenu.onclick = openMenu;