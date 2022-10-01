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
{/* <div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" class="product">
<div class="product-info">
    <div>
        <p>120.00</p>
        <p>Bike</p>
    </div>
    <figure>
        <img src="./Assets/Platzi Yard Sale/Icons/bt_add_to_cart.svg">
    </figure>
</div>
</div> */}
for (item of productList){
    const productCard = document.createElement("div");
    productCard.classList.add("product-card")

    const img = document.createElement("img");
    img.setAttribute("src", product.image);

    const productInfo = document.createElement("div");
    info.classList.add("product-info")
    
    const info = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + item.price;

    const productName = document.createElement("p");
    productName.innerText = "$" + item.name;

    const productInfoFigure = document.createElement("figure");
    
    const productImgCart = document.createElement("img")
    productImgCart.setAttribute("src", "./Assets/Platzi Yard Sale/Icons/bt_add_to_cart.svg");
//we've created created all the elements

    
}
