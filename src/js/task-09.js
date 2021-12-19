function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnElement = document.querySelector(".change-color");
const hexElement = document.querySelector(".color");

btnElement.addEventListener("click", onClickBtn, getRandomHexColor);
function onClickBtn() {
  const changerColor = (document.body.style.backgroundColor =
    getRandomHexColor());
  hexElement.textContent = changerColor;
}
