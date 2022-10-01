//menu desktop
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu")
//mobile menu vars
const burgerBtn = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu")
//shopping cart aside vars
const menuCartIcon = document.querySelector(".navbar-shopping-cart")
const aside = document.querySelector(".product-detail")
const html = document.querySelector("html")
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

//for the product containers
const productList = [];// simulates the array that JS would return after consulting the API REST
productList.push({
    name: "bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
}
)
productList.push({
    name: "shoes",
    price: 40,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
}
)
productList.push({
    name: "Monitor",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
}
)
productList.push({
    name: "Monitor",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
}
)
productList.push({
    name: "Monitor",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
}
)
productList.push({
    name: "Monitor",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
}
)
productList.push({
    name: "Monitor",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
}
)
productList.push({
    name: "Monitor",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
}
)
productList.push({
    name: "Monitor",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
}
)
productList.push({
    name: "Monitor",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
}
)   
function renderImage(arr){
    const cardsContainer = document.querySelector(".cards-container")
for (item of productList){
    const productCard = document.createElement("div");
    productCard.classList.add("product-card")

    const img = document.createElement("img");
    img.setAttribute("src", item.image);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info")
    
    const info = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + item.price;

    const productName = document.createElement("p");
    productName.innerText = item.name;

    const productInfoFigure = document.createElement("figure");
    
    const productImgCart = document.createElement("img")
    productImgCart.setAttribute("src", "./Assets/Platzi Yard Sale/Icons/bt_add_to_cart.svg");
    productImgCart.classList.add("cart-image")
//we've created created all the elements

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
renderImage(productList)
