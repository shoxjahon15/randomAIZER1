const n1 = document.querySelector(".min"),
  n2 = document.querySelector(".max"),
  btn = document.querySelector("button"),
  display = document.querySelector(".output");

btn.addEventListener("click", () => {
  display.innerHTML = Math.floor(getRandom(n1.value, n2.value));
});

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}
