const controlSize = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");
controlSize.addEventListener("input", function () {
  spanText.style.fontSize = `${this.value}px`;
});
