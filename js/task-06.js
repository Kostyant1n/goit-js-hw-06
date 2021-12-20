const form = document.querySelector("#validation-input");
const artLength = form.getAttribute("data-length");
form.onblur = function () {
  if (artLength.includes(this.value.length)) {
    this.classList.remove("invalid");
    this.classList.add("valid");
    return;
  }
  this.classList.remove("valid");
  this.classList.add("invalid");
};
