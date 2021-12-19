const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const items = ingredients.map((el) => {
  const item = document.createElement("li");
  item.textContent = el;
  item.classList.add("item");
  return item;
});
const item = document.querySelector("#ingredients");
item.append(...items);
console.log(...items);
