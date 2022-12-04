const burger = document.querySelector(".menu-btn");
const nav = document.querySelector(".header__nav");
const navList = nav.querySelector(".nav__list");
const navItems = nav.querySelectorAll(".nav__item");
const overlay = document.querySelector(".overlay");
const priceBtns = document.querySelectorAll(".feed__plan-btn");
const priceItem = document.querySelectorAll(".feed__plan-item");
const inputAmount = document.querySelector("input[type='number']");
const activePrice = "feed__plan-item_active";

let isMenuOpen = false;

burger.addEventListener("click", () => {
    return !isMenuOpen ? openMenu() : close();
});

overlay.addEventListener("click", close);

priceBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        activeClassFromPrice();
        e.target.closest("li").classList.add(activePrice);
        let price = e.target.textContent;
        price = price.trim().slice(1);
        inputAmount.value = price;
    });
});

inputAmount.addEventListener("input", () => {
    if (inputAmount.value.length > 4) {
        inputAmount.value = inputAmount.value.slice(0, 4);
    }
});

inputAmount.addEventListener("input", () => {
    activeClassFromPrice();
    priceBtns.forEach((btn) => {
        let price = btn.textContent;
        price = price.trim().slice(1);
        if (price === inputAmount.value) {
            btn.closest("li").classList.add(activePrice);
        } else return;
    });
});

function activeClassFromPrice() {
    priceItem.forEach((item) => item.classList.remove(activePrice));
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

function close() {
    burger.querySelector("i").classList.replace("fa-times", "fa-bars");
    document.body.style.overflowY = "scroll";
    overlay.classList.add("hidden");
    nav.removeAttribute("style");
    isMenuOpen = false;
}
