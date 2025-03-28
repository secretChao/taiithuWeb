document.addEventListener("DOMContentLoaded", function () {
  // 找到所有的 dropdown 組合
  document.querySelectorAll(".dropdown").forEach(dropdown => {
    const searchInput = dropdown.querySelector("input");
    const dropdownMenu = dropdown.querySelector(".dropdown-menu");
    const items = dropdownMenu.querySelectorAll(".dropdown-item");
    
    // 監聽輸入框變化，篩選選項
    searchInput.addEventListener("input", function () {
      let filter = searchInput.value.toLowerCase();

      items.forEach(item => {
        let text = item.textContent.toLowerCase();
        item.style.display = text.includes(filter) ? "" : "none";
      });
    });

    // 監聽選項點擊，自動填入輸入框
    items.forEach(item => {
      item.addEventListener("click", function (event) {
        event.preventDefault();
        searchInput.value = this.textContent;
      });
    });
  });
});
