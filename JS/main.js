//menu desktop
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu")
//mobile menu vars
const burgerBtn = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu")
//shopping cart aside vars
const menuCartIcon = document.querySelector(".navbar-shopping-cart")
const aside = document.querySelector(".product-detail")
//events
//to open desktop menu and close the cart menu if this is open
menuEmail.addEventListener("click", toggleMenu);
function toggleMenu(){
    const isAsideClosed = aside.classList.contains("slide-left")
    if(!isAsideClosed){
        aside.classList.add("slide-left")
    }
    desktopMenu.classList.toggle("inactive")
}
//to open mobile menu and close cart menu if this is open
burgerBtn.addEventListener("click", toggleMobile)
function toggleMobile() {
    const isAsideClosed = aside.classList.contains("slide-left")
    if(!isAsideClosed){
        aside.classList.add("slide-left")
    }
    mobileMenu.classList.toggle("slide-right")
}
//to open cart menu and close mobile menu or desktop menu if one of them is open
menuCartIcon.addEventListener("click", toggleCartAside)
function toggleCartAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains("slide-right");
    const isDesktopEmailClosed = desktopMenu.classList.contains("inactive");
    if(!isDesktopEmailClosed){
        desktopMenu.classList.add("inactive");
    }
    if(!isMobileMenuClosed){
        mobileMenu.classList.add("slide-right")
    }
    aside.classList.toggle("slide-left")
}


