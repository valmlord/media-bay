const loadMore = () => {
  function loadMoreUpload(loadMoreBtn,loadMoreGrid, loadMoreSection, itemsCount, uploadCount,  hiddenClass = true) {
    const grid = document.getElementById(loadMoreGrid),
          items = Array.from(grid.querySelectorAll(loadMoreSection)),
          trigger = document.getElementById(loadMoreBtn),
          maxItems = itemsCount,
          loadItems = uploadCount,
          hidden = hiddenClass,
          hiddenItems = Array.from(document.querySelectorAll(hiddenClass));


    items.forEach(function (item, index) {
      console.log(item.innerText, index);
      if (index > maxItems - 1) {
        item.classList.add(hidden);
      }
    });

    trigger.addEventListener("click", function () {
      [].forEach.call(
        document.querySelectorAll("." + hidden),
        function (item, index) {
          if (index < loadItems) {
            item.classList.remove(hidden);
          }
    
          if (document.querySelectorAll(hidden).length === 0) {
            trigger.style.display = "none";
          }
        }
      );
    });

  }

  loadMore('loadMore', 'gridLoad', '.grid-section', 2, 2, '.hiddenStyle');

};

export default loadMore;

/* 

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


*/