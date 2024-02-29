const listItems = document.querySelectorAll("li");
const list = document.querySelector("ul");

// listItems.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     e.target.remove();
//   });
// });

list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    // +be careful that tagName should be equal to "LI", not "li".
    e.target.remove();
  }
});

list.addEventListener("mouseover", (e) => {
  if (e.target.tagName === "LI") {
    e.target.style.color = "red";
  }
});
