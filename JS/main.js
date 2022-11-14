const api = "https://api.escuelajs.co/api/v1/";

//menu desktop
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu")
//mobile menu vars
const burgerBtn = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu")
//shopping cart aside vars
const menuCartIcon = document.querySelector(".navbar-shopping-cart")
const shoppingCartContainer = document.querySelector("#shoppingCartContainer")
const body = document.querySelector("body")
//product detail selector
const productDetailContainer = document.querySelector("#productDetail");
const productDetailClose = document.querySelector(".product-detail-close");
//close cart
const closeCart = document.querySelector(".close-cart");

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
//for the product containers

// productList.push({
//     name: "bike",
//     price: 120,
//     image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
// }
// )
// productList.push({
//     name: "shoes",
//     price: 40,
//     image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
// }
// )
// productList.push({
//     name: "Monitor",
//     price: 220,
//     image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
// }
// )
// productList.push({
//     name: "Monitor",
//     price: 220,
//     image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
// }
// )
// productList.push({
//     name: "Monitor",
//     price: 220,
//     image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
// }
// )
// productList.push({
//     name: "Monitor",
//     price: 220,
//     image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
// }
// )
// productList.push({
//     name: "Monitor",
//     price: 220,
//     image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
// }
// )
// productList.push({
//     name: "Monitor",
//     price: 220,
//     image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
// }
// )
// productList.push({
//     name: "Monitor",
//     price: 220,
//     image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
// }
// )
// productList.push({
//     name: "Monitor",
//     price: 220,
//     image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
// }
// )
// productList.push({
//     name: "Monitor",
//     price: 220,
//     image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
// }
// )      
// productList.push({
//     name: "Monitor",
//     price: 220,
//     image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
// }
// )   
// productList.push({
//     name: "Monitor",
//     price: 220,
//     image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
// }
// )   
// productList.push({
//     name: "Monitor",
//     price: 220,
//     image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
// }
// )

function renderImage(arr){
    const cardsContainer = document.querySelector(".cards-container")
    for (item of productList){
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