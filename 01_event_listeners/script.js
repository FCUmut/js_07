// First Way---------------

// HTML sided function

// function onClear() {
//   alert("clear items");
// }

// Solution-1
function onClear() {
  [...document.getElementById("item-list").children].forEach((e) => e.remove()); // document.getElementById("item-list").children is a HTML collection, not an array so we use spread operator and turn it into an array
}

// Solution-2
// function onClear() {
//   // First Way
//   const itemList = document.querySelector("ul");
//   //itemList.innerHTML = "";

//   // Second Way
//   const items = document.querySelectorAll("li");
//   //items.forEach((item) => item.remove());

//   // Third Way
//   while (itemList.firstChild) {
//     itemList.removeChild(itemList.firstChild);
//   }
// }

// Second Way--------------

// JS Event Listener

const clrBtn = document.querySelector("#clear");
// clrBtn.onclick = function () {
//   alert("clear items II");
// };

// clrBtn.onclick = function () {
//   console.log("clear items on log II");
// };
// with second method alert function will be disappear but in third version you can add many event listeners on same element

// Third Way--------------

// addEventListener()
//clrBtn.addEventListener("click", () => alert("clear items III"));
//clrBtn.addEventListener("click", () => console.log("clear items on log III"));

//clrBtn.addEventListener("click", onClear()); // if you put parentheses it will execute immediately so you should call function without parentheses
clrBtn.addEventListener("click", onClear);

//setTimeout(() => clrBtn.removeEventListener("click", onClear), 5000); // it will stop executing the function after 5 seconds

//setTimeout(() => clrBtn.click(), 5000); // we can fire off an event
