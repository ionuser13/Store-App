//menu desktop
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu")
//mobile menu vars
const burgerBtn = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu")
//shopping cart aside vars
const menuCartIcon = document.querySelector(".navbar-shopping-cart")
const aside = document.querySelector(".product-detail")

menuEmail.addEventListener("click", toggleMenu);
function toggleMenu(){
    const isAsideClosed = aside.classList.contains("slide-left")
    if(!isAsideClosed){
        aside.classList.add("slide-left")
    }
    desktopMenu.classList.toggle("inactive")
}

burgerBtn.addEventListener("click", toggleMobile)
function toggleMobile() {
    const isAsideClosed = aside.classList.contains("slide-left")
    if(!isAsideClosed){
        aside.classList.add("slide-left")
    }
    mobileMenu.classList.toggle("slide-right")
}

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


