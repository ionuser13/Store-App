export const all = document.querySelectorAll(".all");
export const clothes = document.querySelectorAll(".clothes");
export const electronics = document.querySelectorAll(".electronics");
export const furnitures = document.querySelectorAll(".furnitures");
export const toys = document.querySelectorAll(".toys");
export const others = document.querySelectorAll(".others");

import {loadProducts} from "./main.js";
import { api } from "./main.js"
import { cardsContainer } from "./main-selectors.js";
import {mobileMenu} from "./main-selectors.js"
import {offset} from "./main.js"

all.forEach(btn => {
    btn.addEventListener("click", () => {
        mobileMenu.classList.add("slide-right");
        cardsContainer.innerText = "";
        loadProducts(`${api}products?offset=${offset}&limit=10`)}
)})

clothes.forEach(btn => {
    btn.addEventListener("click", () => {
        cardsContainer.innerText = "";
        mobileMenu.classList.add("slide-right")
        loadProducts(`${api}categories/1/products`);
    });
})

electronics.forEach(btn => {
    btn.addEventListener("click", () => {
        mobileMenu.classList.add("slide-right")
        cardsContainer.innerText = "";
        loadProducts(`${api}categories/2/products`)
    })
})

furnitures.forEach(btn => {
    btn.addEventListener("click", () => {
        mobileMenu.classList.add("slide-right")
        cardsContainer.innerText = "";
        loadProducts(`${api}categories/3/products`)
    })
})

toys.forEach(btn => {
    btn.addEventListener("click", () => {
        mobileMenu.classList.add("slide-right")
        cardsContainer.innerText = "";
        loadProducts(`${api}categories/4/products`)
    })
})
others.forEach(btn => {
    btn.addEventListener("click", () => {
        mobileMenu.classList.add("slide-right")
        cardsContainer.innerText = "";
        loadProducts(`${api}categories/5/products`)
    })
})