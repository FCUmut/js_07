const form = document.getElementById("item-form");

// First Approach
function onSubmit(e) {
  // if form doesn't have 'action' to submit then it will submit form to same page, to be able to see console log constantly we use 'preventDefault()' function, so it can stop trying to submit form to somewhere
  e.preventDefault();
  // console.log("submit");

  const item = document.getElementById("item-input").value;
  const priority = document.getElementById("priority-input");

  if (item === "" || priority.value === "0") {
    console.log("Please fill in all fields");
    return;
  }

  console.log(item, priority.value);
}

// Second Approach
function onSubmitTwo(e) {
  e.preventDefault();

  // First Way
  // 'form' is global variable that declared above
  const formData = new FormData(form);

  // const item = formData.get("item");
  // const priority = formData.get("priority");

  // console.log(item, priority);

  // Second Way
  const entries = formData.entries();

  for (let entry of entries) {
    // this log will return arrays, and 0th index will be name of the variable and 1st index will be values of that variables (e.g.,['item', 'banana'], ['priority', '1'])..
    // console.log(entry);

    // ..so we console log the index[1] to get same result as first way
    console.log(entry[1]);
  }
}

form.addEventListener("submit", onSubmit);

form.addEventListener("submit", onSubmitTwo);
