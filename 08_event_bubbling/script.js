const button = document.querySelector("form button");
const div = document.querySelector("form div:nth-child(2)");

button.addEventListener("click", (e) => {
  alert("Button was clicked");
  e.stopPropagation(); // just like ".preventDefault", "stopPropagation" prevents forthcoming event listeners due to "event bubbling"

  e.stopImmediatePropagation(); // 'stopPropagation' will prevent any parent handlers from being executed 'stopImmediatePropagation' will prevent any parent handlers and also any other handlers from executing
});

div.addEventListener("click", () => {
  alert("Div was clicked");
});

document.body.addEventListener("click", () => {
  alert("Body was clicked");
});
