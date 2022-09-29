const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu")
menuEmail.addEventListener("click", toggleMenu);
function toggleMenu(){
    desktopMenu.classList.toggle("inactive")
}

const burgerBtn = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu")
burgerBtn.addEventListener("click", toggleMobile)
function toggleMobile() {
    mobileMenu.classList.toggle("slide-right")
}