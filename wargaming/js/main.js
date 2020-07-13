var body = document.querySelector('body');
var menu = document.querySelector('.header__menuBottom');
var btnOpenMenu = document.querySelector('.burger');
function openMenu(){
    menu.classList.toggle("open");
    if (menu.classList.contains("open")){
        body.classList.add("no-scroll");
    } else{
        body.classList.remove("no-scroll");
    }
}

btnOpenMenu.onclick = openMenu;