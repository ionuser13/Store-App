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

const api = "https://api.escuelajs.co/api/v1/";
//events
//to open desktop menu and close the cart menu if this is open
menuEmail.addEventListener("click", toggleMenu);
function toggleMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains("slide-left")
    if(!isAsideClosed){
        shoppingCartContainer.classList.add("slide-left")
    }
    desktopMenu.classList.toggle("inactive")
}
//to open mobile menu and close cart menu if this is open
burgerBtn.addEventListener("click", toggleMobile)
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
//opens the aside when clicking an image from the store
function openProductDetail() {
    productDetailContainer.classList.remove("slide-left");
    productDetailContainer.classList.add("height2");
    shoppingCartContainer.classList.add("slide-left");
    body.classList.add("height")
}
//closes the product detail view when clicking
productDetailClose.addEventListener("click", closeAside) 
function closeAside(){
    productDetailContainer.classList.add("slide-left");
    productDetailContainer.classList.remove("height2");
    body.classList.remove("height");
}
//to close the shopping cart from inside
closeCart.addEventListener("click", closeShopCart)
function closeShopCart(){
    shoppingCartContainer.classList.add("slide-left");
}

let productList = [];// simulates the array that JS would return after consulting the API REST
//call to the platzi fakeapi
async function loadProducts() {
    const response = await fetch(`${api}products?offset=0&limit=10`);
    const data = await response.json();
    try {
        productList = data;
        console.log("data")
        console.log(productList)
        renderImage(productList)
    }
    catch (error) {
        console.error(error)
    }
}

function renderImage(arr){
    for (let item of arr){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card")

        const img = document.createElement("img");
        img.setAttribute("src", item.images[0]);
        img.addEventListener("click", openProductDetail)

        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info")
        
        const info = document.createElement("div");

        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + item.price;

        const productName = document.createElement("p");
        productName.innerText = item.title;

        const productInfoFigure = document.createElement("figure");
        
        const productImgCart = document.createElement("img")
        productImgCart.setAttribute("src", "./Assets/Platzi Yard Sale/Icons/bt_add_to_cart.svg");
        productImgCart.classList.add("cart-image")
//we've created created all the elements

//declares which element goes inside another
    productInfoFigure.appendChild(productImgCart);

    info.appendChild(productPrice);
    info.appendChild(productName);

    productInfo.appendChild(info)
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(img)
    productCard.appendChild(productInfo)

    cardsContainer.appendChild(productCard);
}
}

loadProducts()