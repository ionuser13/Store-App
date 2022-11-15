export const all = document.querySelector(".all");
export const clothes = document.querySelector(".clothes");
export const electronics = document.querySelector(".electronics");
export const furnitures = document.querySelector(".furnitures");
export const toys = document.querySelector(".toys");
export const others = document.querySelector(".others");

import {loadProducts} from "./main.js";
import { api } from "./main.js"
import { cardsContainer } from "./main-selectors.js";

all.addEventListener("click", () => {
    cardsContainer.innerHTML = "";
    loadProducts(`${api}products?offset=0&limit=10`)})

clothes.addEventListener("click", () => {
    cardsContainer.innerHTML = "";
    loadProducts(`${api}categories/1/products`)
});

electronics.addEventListener("click", () => {
    cardsContainer.innerHTML = "";
    loadProducts(`${api}categories/2/products`)
})

furnitures.addEventListener("click", () => {
    cardsContainer.innerHTML = "";
    loadProducts(`${api}categories/3/products`)
})

toys.addEventListener("click", () => {
    cardsContainer.innerHTML = "";
    loadProducts(`${api}categories/4/products`)
})
others.addEventListener("click", () => {
    cardsContainer.innerHTML = "";
    loadProducts(`${api}categories/5/products`)
})