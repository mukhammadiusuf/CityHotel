let menuIcon = document.querySelector(".menu-icon");
let menu = document.querySelector("#menu");

menuIcon.onclick = () => {
    menu.classList.toggle("toggole-menu");
}