import "./modules/slider";


// OUTGOING MENU

const menu = document.querySelector(".outgoing"),
      //menuItem = document.querySelectorAll(".header-menu__list-link"),
      cross = document.querySelector(".outgoing-cross"),
      hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("outgoing--active");
});

cross.addEventListener("click", () => {
    menu.classList.remove("outgoing--active");
});

/* menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("header-menu__hamburger--active");
    menu.classList.toggle("header-menu__nav--active");
  });
}); */