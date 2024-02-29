// document.querySelector("h1").textContent = "Hello";
// Uncaught TypeError: Cannot set properties of null (setting 'textContent')
// this error occurs because we set 'script.js' in heading that's why script doesn't know what is 'document.querySelector("h1")' yet.

// common practice for fixing that error
// Solution-1
// window.onload = function () {
//   document.querySelector("h1").textContent = "Hello World";
// };

// Solution-2
// window.addEventListener(
//   "load",
//   () => (document.querySelector("h1").textContent = "Hello World")
// );

// window.addEventListener(
//   // 'load' waits for the entire page to load, including all resources such as images etc.
//   // but while 'DOMContentLoaded' runs as soon as the DOM is parsed and loaded
//   "DOMContentLoaded",
//   () => (document.querySelector("h1").textContent = "Hello World")
// );

window.addEventListener("load", () => console.log("Page Loaded"));
window.addEventListener("DOMContentLoaded", () => console.log("DOM Loaded"));
// even if the 'DOMContentLoaded' called after the 'load', it gets loaded before 'load'

console.log("Console log runs");
// even if 'console.log' is the last one, it gets run before either of those because it is not in any events where we're waiting for the page to load

// 'defer' attribute
// <script src="./script.js" defer></script>

// 'defer' will prevent the error that caused from using the 'script.js' in heading
document.querySelector("h1").innerText = "Hello World";

window.addEventListener("resize", () => {
  document.querySelector(
    "h1"
  ).innerText = `Resized to ${window.innerWidth} x ${window.innerHeight}`;
});
