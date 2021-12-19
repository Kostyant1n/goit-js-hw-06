const menuItemsByTagName = document.querySelectorAll(".item");
console.log(`Number of categories: ${menuItemsByTagName.length}`);

const titles = document.querySelectorAll(".item");
titles.forEach((title) => {
  console.log(`Category: ${title.firstElementChild.textContent}`);
  console.log(`Elements:  ${title.lastElementChild.children.length}`);
});
