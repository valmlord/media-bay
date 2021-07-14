import "./modules/slider";

// OUTGOING MENU

const menu = document.querySelector(".outgoing"),
  menuItem = document.querySelectorAll(
    ".outgoing-menu__link, .outgoing-menu__last-link"
  ),
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

// LOAD MORE

let work = document.querySelector("#gridLoad");
let items = Array.from(work.querySelectorAll(".grid-section"));
let loadMore = document.getElementById("loadMore");

let maxItems = 2;
let loadItems = 2;
let hiddenClass = "hiddenStyle";
let hiddenItems = Array.from(document.querySelectorAll(".hiddenStyle"));

function quantityItems(x) {
  if (x.matches) {
    // If media query matches
    maxItems = 3;
    loadItems = 3;
  } else {
    maxItems = 2;
    loadItems = 2;
  }
}

let x = window.matchMedia("(min-width: 1023.98px)");
quantityItems(x); // Call listener function at run time
x.addListener(quantityItems); // Attach listener function on state changes

items.forEach(function (item, index) {
  console.log(item.innerText, index);
  if (index > maxItems - 1) {
    item.classList.add(hiddenClass);
  }
});

loadMore.addEventListener("click", function () {
  [].forEach.call(
    document.querySelectorAll("." + hiddenClass),
    function (item, index) {
      if (index < loadItems) {
        item.classList.remove(hiddenClass);
      }

      if (document.querySelectorAll("." + hiddenClass).length === 0) {
        loadMore.style.display = "none";
      }
    }
  );
});
