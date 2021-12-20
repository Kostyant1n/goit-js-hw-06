const form = document.querySelector("#validation-input");
const artLength = form.getAttribute("data-length");
const parseLength = parseInt(artLength);

const classAll = function (classAdd, classRemove) {
  form.classList.add(classAdd);
  form.classList.remove(classRemove);
};

form.addEventListener("blur", () => {
  if (form.value.length === parseLength) {
    classAll("valid", "invalid");
    return;
  }
  classAll("invalid", "valid");
});
