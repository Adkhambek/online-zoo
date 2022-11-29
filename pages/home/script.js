const burger = document.querySelector(".menu-btn");
const nav = document.querySelector(".header__nav");
const navList = nav.querySelector(".nav__list");
const navItems = nav.querySelectorAll(".nav__item");
const copyright = document.querySelector(".copyright");
const overlay = document.querySelector(".overlay");
let isMenuOpen = false;

burger.addEventListener("click", (e) => {
    return !isMenuOpen ? openMenu() : closeMenu();
});

overlay.addEventListener("click", closeMenu);

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
