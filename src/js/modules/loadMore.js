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
        document.querySelectorAll(hidden),
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

  loadMore('"loadMore"', '"gridLoad"', '.grid-section', 2, 2, '.hiddenStyle');

};

export default loadMore;
