import { menuEmail, orderTotal } from "./main-selectors.js";
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
import { loadMore } from "./main-selectors.js";

import { productImageExp } from "./main-selectors.js";
import { productPriceExp } from "./main-selectors.js";
import { productNameExp } from "./main-selectors.js";
import { productDescriptionExp } from "./main-selectors.js";
import { myOrders } from "./main-selectors.js";
import { myOrdersMenu } from "./main-selectors.js";
import { myOrderContent } from "./main-selectors.js";
import { totalPrice } from "./main-selectors.js";

import { toggleCartAside, toggleMenu, toggleMobile, openProductDetail, closeAside, closeShopCart, openMyOrders } from "./eventListeners.js";
export const api = "https://api.escuelajs.co/api/v1/";



//events
//to open desktop menu and close the cart menu if this is open
menuEmail.addEventListener("click", toggleMenu);

//to open mobile menu and close cart menu if this is open
burgerBtn.addEventListener("click", toggleMobile)

//to open cart menu and close mobile menu or desktop menu if one of them is open
menuCartIcon.addEventListener("click", toggleCartAside)

//closes the product detail view when clicking
productDetailClose.addEventListener("click", closeAside) 

//to close the shopping cart from inside
closeCart.forEach(button => {
    button.addEventListener("click", closeShopCart);
})


myOrdersMenu.forEach(button => {
    button.addEventListener("click", openMyOrders)
})

//call to the platzi fakeapi
export async function loadProducts(urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json();
    try {
        renderImage(data)
    }
    catch (error) {
        console.error(error);
        loadProducts(urlApi)
    }
}

let orderProducts = [];
let priceSum = 0;

export function renderImage(arr){
    for (let item of arr){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card")

        const img = document.createElement("img");
        img.setAttribute("src", item.images[0]);
        img.addEventListener("click", () => {
            productImageExp.setAttribute("src", item.images[0]);
            productPriceExp.innerHTML = `$ ${item.price}`;
            productNameExp.innerHTML = item.title;
            productDescriptionExp.innerText = item.description;
            openProductDetail();
        })

        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info")
        
        const info = document.createElement("div");

        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + item.price;

        const productName = document.createElement("p");
        productName.innerText = item.title;

        const productInfoFigure = document.createElement("figure");
        
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./Assets/Platzi Yard Sale/Icons/bt_add_to_cart.svg");
        productImgCart.classList.add("cart-image");
        productImgCart.addEventListener("click", () => {
            orderProducts.push(item);
            priceSum = priceSum + item.price;
            totalPrice.innerText = `$${priceSum}`;
            console.log(priceSum)
            renderOrderProducts(orderProducts)
        })
//we've created created all the elements

//declares which element goes inside another
        productInfoFigure.append(productImgCart);

        info.append(productPrice, productName);

        productInfo.append(info, productInfoFigure)

        productCard.append(img, productInfo)

        cardsContainer.appendChild(productCard);
    }
}

export function renderOrderProducts(arr) {
        const orderItem = document.createElement("div");
        orderItem.classList.add("shopping-cart");

        const itemFigure = document.createElement("figure");
        const itemImage  = document.createElement("img");
        itemImage.setAttribute("src", arr[arr.length -1].images[0]);
        itemFigure.append(itemImage);

        const itemOrderName = document.createElement("p");
        itemOrderName.innerText = arr[arr.length -1].title;

        const itemOrderPrice = document.createElement("p");
        itemOrderPrice.innerText = `$${arr[arr.length -1].price}`;

        const closeIcon = document.createElement("img");
        closeIcon.setAttribute("src", "./Assets/Platzi Yard Sale/Icons/icon_close.png");

        orderItem.append(itemFigure, itemOrderName, itemOrderPrice, closeIcon);
        myOrderContent.append(orderItem)
}

export let offset = 0;
loadMore.addEventListener("click", () => {
    offset+=10;
    loadProducts(`${api}products?offset=${offset}&limit=10`)
})
loadProducts(`${api}products?offset=${offset}&limit=10`)
