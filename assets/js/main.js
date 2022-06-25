// *** Write your code here***

let displayResult = document.querySelector('input[type="text"]');
let result = '';

addGlobalEventListener("click", 'input[type="button"]', (e) => {
  if (e.target.hasAttribute("data-number")) {
    appendNumber(e.target.value);
  } else if (e.target.hasAttribute("data-operation")) {
    chooseOperation(e.target.value);
  } else if (e.target.hasAttribute("data-dot")) {
    appendNumber(e.target.value);
  } else if (e.target.hasAttribute("data-clear")) {
    clear();
  } else if (e.target.hasAttribute("data-delete")) {
    deleteVal();
  } else {
    compute();
  }
});

function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) callback(e);
  });
}

// `clear()` function, which will clear all the different variables
const clear = () => {
  result = '';
  updateDisplay();
}
// `delete()` for clearing a single number
const deleteVal = () => {
  result = displayResult.value.slice(0, -1)
  updateDisplay();
}
// determines what will occur every time a user clicks on a number to add to the display
const appendNumber = (number) => {
  result = displayResult.textContent = displayResult.textContent += number;
  updateDisplay();
}
// `chooseOperation(operation)` function that controls what will happen anytime a user clicks on any operation button
const chooseOperation = (operation) => {
  result = displayResult.textContent = displayResult.textContent += operation;
  updateDisplay();
}
// takes the values inside your calculator and displays the result
const compute = () => {
  result = eval(displayResult.value);
  updateDisplay();
}
const updateDisplay = () => {
  displayResult.value = result;
};
