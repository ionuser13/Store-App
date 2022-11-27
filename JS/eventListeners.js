import { menuEmail } from "./main-selectors.js";
import { desktopMenu } from "./main-selectors.js";
import { burgerBtn } from "./main-selectors.js";
import { mobileMenu } from "./main-selectors.js";
import { menuCartIcon } from "./main-selectors.js";
import { shoppingCartContainer } from "./main-selectors.js";
import { body } from "./main-selectors.js";
import { productDetailContainer } from "./main-selectors.js";
import { productDetailClose } from "./main-selectors.js";
import { closeCart } from "./main-selectors.js";
import { cardsContainer } from "./main-selectors.js";
import { myOrders } from "./main-selectors.js";

export {toggleCartAside, toggleMenu, toggleMobile, openProductDetail, closeAside, closeShopCart, openMyOrders}

function toggleCartAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains("slide-right");
    const isDesktopEmailClosed = desktopMenu.classList.contains("inactive");

    if(!isDesktopEmailClosed){
        desktopMenu.classList.add("inactive");
    }

    if(!isMobileMenuClosed){
        mobileMenu.classList.add("slide-right")
    }
    const isProductDetailClosed = productDetailContainer.classList.contains("slide-left");
    if(!isProductDetailClosed){
        productDetailContainer.classList.add("slide-left");
    }
    if(!myOrders.classList.contains("slide-left")) {
        myOrders.classList.add("slide-left")
    }
    shoppingCartContainer.classList.toggle("slide-left");
}

function toggleMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains("slide-left")
    if(!isAsideClosed){
        shoppingCartContainer.classList.add("slide-left")
    }
    if(!myOrders.classList.contains("slide-left")) {
        myOrders.classList.add("slide-left")
    }
    desktopMenu.classList.toggle("inactive")
}

function toggleMobile() {
    const isAsideClosed = shoppingCartContainer.classList.contains("slide-left")
    if(!isAsideClosed){
        shoppingCartContainer.classList.add("slide-left")
    }
    if(!myOrders.classList.contains("slide-left")) {
        myOrders.classList.add("slide-left")
    }
    mobileMenu.classList.toggle("slide-right")
    productDetailContainer.classList.add("slide-left");
    
}

function openProductDetail() {
    productDetailContainer.classList.remove("slide-left");
    shoppingCartContainer.classList.add("slide-left");
    if(!myOrders.classList.contains("slide-left")) {
        myOrders.classList.add("slide-left")
    }
}//opens the aside when clicking an image from the store

function closeAside(){
    productDetailContainer.classList.add("slide-left");
}

function closeShopCart(){
    shoppingCartContainer.classList.add("slide-left");
    myOrders.classList.add("slide-left");
}

function openMyOrders() {
    toggleMenu()
    toggleMobile()
    myOrders.classList.remove("slide-left")
}

function removeItem() {
    
}