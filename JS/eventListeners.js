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

export {toggleCartAside, toggleMenu, toggleMobile, openProductDetail, closeAside, closeShopCart}

function toggleCartAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains("slide-right");
    const isDesktopEmailClosed = desktopMenu.classList.contains("inactive");

    if(!isDesktopEmailClosed){
        desktopMenu.classList.add("inactive");
    }

    if(!isMobileMenuClosed){
        mobileMenu.classList.add("slide-right")
    }

    if(!shoppingCartContainer.classList.contains("slide-left")){
        body.classList.remove("height")
    }
    else{
        body.classList.add("height")
    }
    
    const isProductDetailClosed = productDetailContainer.classList.contains("slide-left");
    if(!isProductDetailClosed){
        productDetailContainer.classList.add("slide-left");
    }
    shoppingCartContainer.classList.toggle("slide-left");
    shoppingCartContainer.classList.toggle("height2");
}

function toggleMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains("slide-left")
    if(!isAsideClosed){
        shoppingCartContainer.classList.add("slide-left")
    }
    desktopMenu.classList.toggle("inactive")
}

function toggleMobile() {
    const isAsideClosed = shoppingCartContainer.classList.contains("slide-left")
    if(!isAsideClosed){
        shoppingCartContainer.classList.add("slide-left")
    }
    if(!mobileMenu.classList.contains("slide-right")){
        body.classList.remove("height")
    }
    else{
        body.classList.add("height")
    }
    mobileMenu.classList.toggle("slide-right")
    mobileMenu.classList.toggle("height2")
    productDetailContainer.classList.add("slide-left");
    
}

function openProductDetail() {
    productDetailContainer.classList.remove("slide-left");
    productDetailContainer.classList.add("height2");
    shoppingCartContainer.classList.add("slide-left");
    body.classList.add("height")
}

function closeAside(){
    productDetailContainer.classList.add("slide-left");
    productDetailContainer.classList.remove("height2");
    body.classList.remove("height");
}

function closeShopCart(){
    shoppingCartContainer.classList.add("slide-left");
}

