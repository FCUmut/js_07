/* 
- `target` - The element that triggered the event
- `currentTarget` - The element that the event listener is attached to 
- `type` - The type of event that was triggered
- `timeStamp` - The time that the event was triggered
- `clientX` - The x-position of the mouse click relative to the window
- `clientY` - The y-position of the mouse click relative to the window
- `offsetX` - The x-position of the mouse click relative to the element
- `offsetY` - The y-position of the mouse click relative to the element
- `pageX` - The x-position of the mouse click relative to page
- `pageY` - The y-position of the mouse click relative to page 
- `screenX` - The x-position of the mouse click relative to screen
- `screenY` - The y-position of the mouse click relative to screen
*/

const logo = document.querySelector("img");

function onClick(e) {
  // while 'target' will listen each components of that element has but 'currentTarget' only will listen the element's only itself
  //   console.log(e.target);
  //   console.log(e.currentTarget);
}

logo.addEventListener("click", onClick);

// you can use ".preventDefault()" to prevent the behaviour of an element and with that way we can call just the listener of that element instead of calling element together
// document.querySelector("a").addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log("Link was clicked");
// });

// to drag element and see its momentary position which related to window
function onDrag(e) {
  document.querySelector("h1").textContent = `X ${e.clientX}
    Y ${e.clientY}`;
}
logo.addEventListener("drag", onDrag);
