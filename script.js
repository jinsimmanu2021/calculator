// Add number/operator to the display
function displayNumber(num) {
  document.getElementById("display").value += num;
}

// Clear the display
function clearBox() {
  document.getElementById("display").value = "";
}

// Evaluate the expression
function evaluateExp() {
  try {
    document.getElementById("display").value = eval(document.getElementById("display").value);
  } catch {
    document.getElementById("display").value = "Error";
  }
}

// Remove last item from text box
function removeLastItem() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}
