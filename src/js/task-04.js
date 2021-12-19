const counterValue = {
  value: 0,
  increment() {
    console.log("increment => this", this);
    this.value += 1;
  },
  decrement() {
    console.log("increment => this", this);
    this.value -= 1;
  },
};

const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);
const counter = document.querySelector("#value");

decrementButton.addEventListener("click", function () {
  console.log("Клик -");
  counterValue.decrement();
  counter.textContent = counterValue.value;
});

incrementButton.addEventListener("click", function () {
  console.log("Клик -");
  counterValue.increment();
  counter.textContent = counterValue.value;
});
