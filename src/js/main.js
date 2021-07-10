import "./modules/slider";


// OUTGOING MENU

const menu = document.querySelector(".outgoing"),
      menuItem = document.querySelectorAll(".outgoing-menu__link, .outgoing-menu__last-link"),
      cross = document.querySelector(".outgoing-cross"),
      hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("outgoing--active");
});

cross.addEventListener("click", () => {
    menu.classList.remove("outgoing--active");
});

 menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    menu.classList.remove("outgoing--active");
  });
}); 