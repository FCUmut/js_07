const itemInput = document.getElementById("item-input");
const priorityInput = document.getElementById("priority-input");
const checkbox = document.getElementById("checkbox");
const heading = document.querySelector("h1");

function onInput(e) {
  console.log(e.target.value);
}

itemInput.addEventListener("input", onInput); // to listen input in accumulative way we use 'input' instead of 'keypress' etc.

priorityInput.addEventListener("input", onInput);
// priorityInput.addEventListener("change", onInput); // alternative

function onChecked(e) {
  const isChecked = e.target.checked;
  heading.textContent = isChecked ? "Checked" : "Not Checked";
}

checkbox.addEventListener("input", onChecked);

function onFocus() {
  console.log("Input is focused");
  /*   itemInput.style.outlineStyle = "solid";
  itemInput.style.outlineWidth = "1px";
  itemInput.style.outlineColor = "green"; */
  itemInput.style.outline = "solid 1px green";
}

function onBlur() {
  console.log("Input is not focused");
  itemInput.style.outline = "none";
}

itemInput.addEventListener("focus", onFocus);
itemInput.addEventListener("blur", onBlur);
