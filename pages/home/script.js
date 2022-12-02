const burger = document.querySelector(".menu-btn");
const nav = document.querySelector(".header__nav");
const navList = nav.querySelector(".nav__list");
const navItems = nav.querySelectorAll(".nav__item");
const copyright = document.querySelector(".copyright");
const overlay = document.querySelector(".overlay");
const pets = document.querySelectorAll(".pet");
const petsList = document.querySelector(".pets__list");
const slideBtnPrev = document.querySelector(".slide-btn_prev");
const slideBtnNext = document.querySelector(".slide-btn_next");
const tabMedia = window.matchMedia("(max-width: 688px)");
let isMenuOpen = false;
let slideIndex = 1;

burger.addEventListener("click", (e) => {
    return !isMenuOpen ? openMenu() : closeMenu();
});

overlay.addEventListener("click", closeMenu);

slideBtnNext.addEventListener("click", () => {
    if (tabMedia.matches) displayPets(1, 4, "fade-in-right");
    else displayPets(1, 6, "fade-in-right");
});

slideBtnPrev.addEventListener("click", () => {
    if (tabMedia.matches) displayPets(-1, 4, "fade-in-left");
    else displayPets(-1, 6, "fade-in-left");
});

function randomOrders(start, end, limit) {
    const orders = [];
    while (orders.length < limit + 1) {
        const order = Math.floor(Math.random() * (end - start + 1)) + start;
        if (orders.indexOf(order) === -1) orders.push(order);
    }
    return orders;
}

function displayPets(n, limit, animation) {
    slideIndex += n;
    const slides = Math.ceil(pets.length / limit);
    if (slideIndex > slides) slideIndex = 1;
    if (slideIndex < 1) slideIndex = slides;

    let startIndex = (slideIndex - 1) * limit;
    let endIndex = slideIndex * limit;

    const orders = randomOrders(startIndex, endIndex, limit);

    hideElements(pets);
    if (endIndex > pets.length) endIndex = pets.length;
    for (let i = startIndex, j = 0; i < endIndex; i++) {
        pets[i].className = "pet";
        pets[i].style.display = "grid";
        pets[i].style.order = orders[j];
        pets[i].classList.add(animation);
        j++;
    }
}

function hideElements(elements) {
    elements.forEach((element) => {
        element.removeAttribute("style");
        element.style.display = "none";
    });
}

function openMenu() {
    burger.querySelector("i").classList.replace("fa-bars", "fa-times");
    nav.style.display = "block";
    overlay.classList.remove("hidden");
    document.body.style.overflowY = "hidden";
    navList.classList.add("menu-list");
    navList.classList.add("container");
    navItems.forEach((item) => item.classList.add("menu-item"));
    isMenuOpen = true;
}

function closeMenu() {
    burger.querySelector("i").classList.replace("fa-times", "fa-bars");
    document.body.style.overflowY = "scroll";
    overlay.classList.add("hidden");
    nav.removeAttribute("style");
    isMenuOpen = false;
}
