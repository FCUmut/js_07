const logo = document.querySelector("img");

const onClick = () => console.log("clicked");
//const onDoubleClick = () => console.log("double clicked");
const onDoubleClick = () => {
  if (document.body.style.backgroundColor !== "purple") {
    document.body.style.backgroundColor = "purple";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
};

const onRightClick = () => console.log("right clicked");

const onMouseDown = () => console.log("mouse down event");

const onMouseUp = () => console.log("mouse up event");

const onMouseWheel = () => console.log("mouse wheel event");

const onMouseOver = () => console.log("mouse over event");

const onMouseOut = () => console.log("mouse out event");

const onDragStart = () => console.log("drag start event");

const onDrag = () => console.log("drag event");

const onDragEnd = () => console.log("drag end event");

// Event Listeners

logo.addEventListener("click", onClick);

logo.addEventListener("dblclick", onDoubleClick); // there is listener for double click

logo.addEventListener("contextmenu", onRightClick); // there is listener for right clicks

logo.addEventListener("mousedown", onMouseDown); // when you push mouse left click
logo.addEventListener("mouseup", onMouseUp); // when you release mouse left click

logo.addEventListener("wheel", onMouseWheel); // when you turn mouse wheel up or down

logo.addEventListener("mouseover", onMouseOver); // everytime when mouse enters the inside of boundary of chosen element

logo.addEventListener("mouseout", onMouseOut); // everytime when mouse exits out of the boundary of chosen element

logo.addEventListener("dragstart", onDragStart); // when mouse start to drag an element

logo.addEventListener("drag", onDrag); // it will keep firing off while you are draggin an element

logo.addEventListener("dragend", onDragEnd); // when mouse release the dragged element
