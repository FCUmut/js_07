const itemInput = document.getElementById("item-input");

const onKeyPress = (e) => {
  console.log("keypress");
};

const onKeyUp = (e) => {
  console.log("keyup");
};

const onKeyDown = (e) => {
  //   console.log("keydown");
  // |-------- key --------|
  //   console.log(e.key);
  //   document.querySelector("h1").innerText = e.key;

  /*  if (e.key === "Enter") {
    alert("You pressed Enter");
    // alert is blocking event, it will perform before submit
  } */

  // |-------- keyCode --------|
  // https://www.toptal.com/developers/keycode/table

  if (e.keyCode === 13) {
    alert("You pressed Enter");
  }

  // |-------- code --------|
  if (e.code === "Digit1") {
    alert("You pressed 1");
  }

  if (e.repeat) {
    console.log("You are holding down " + e.key);
  }

  // you can also listen if 'shift', 'alt', 'ctrl' etc. combinations are pressed
  console.log("Shift: " + e.shiftKey);
  console.log("Alt: " + e.altKey);
  console.log("Control: " + e.ctrlKey);

  // if e.shiftKey is true (if 'shift' pressed) and if e.key gives the 'K' letter then console log, important note: it will NOT return true if already CAPS LOCK is on and K is capital, so make sure 'k' is lowercase
  if (e.shiftKey && e.key === "K") {
    console.log("You hit the 'shift + K'.");
  }
};

// itemInput.addEventListener("keypress", onKeyPress);
// itemInput.addEventListener("keyup", onKeyUp); // fires of the event after releasing the key
itemInput.addEventListener("keydown", onKeyDown); // keeps of listening while pressing
