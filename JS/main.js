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

import { toggleCartAside, toggleMenu, toggleMobile, openProductDetail, closeAside, closeShopCart } from "./eventListeners.js";
const api = "https://api.escuelajs.co/api/v1/";

//events
//to open desktop menu and close the cart menu if this is open
menuEmail.addEventListener("click", toggleMenu);

//to open mobile menu and close cart menu if this is open
burgerBtn.addEventListener("click", toggleMobile)

//to open cart menu and close mobile menu or desktop menu if one of them is open
menuCartIcon.addEventListener("click", toggleCartAside)

//opens the aside when clicking an image from the store

//closes the product detail view when clicking
productDetailClose.addEventListener("click", closeAside) 

//to close the shopping cart from inside
closeCart.addEventListener("click", closeShopCart)

let productList = [];// simulates the array that JS would return after consulting the API REST

//call to the platzi fakeapi
async function loadProducts() {
    const response = await fetch(`${api}products?offset=0&limit=10`);
    const data = await response.json();
    try {
        renderImage(data)
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

    info.append(productPrice, productName);

    productInfo.append(info, productInfoFigure)

    productCard.append(img, productInfo)

    cardsContainer.appendChild(productCard);
}
}

loadProducts()