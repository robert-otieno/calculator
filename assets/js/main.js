// *** Write your code here***

let display = document.querySelector('input[type="text"]');

let dot = null;
let operator = null;
let number = null;
let equals = null;

addGlobalEventListener("click", 'input[type="button"]', (e) => {
  if (e.target.hasAttribute('data-number')) {
    console.log(`Clicked Number: ${e.target.value}`);
  }
  else if (e.target.hasAttribute('data-operation')) {
    console.log(`Clicked Operator: ${e.target.value}`);
  }
  else if (e.target.hasAttribute('data-dot')) {
    console.log(`Clicked Dot: ${e.target.value}`);
  }
  else {
    console.log(`Clicked Equals: ${e.target.value}`);
  }
});

function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) callback(e);
  });
}

const clear = () => {
  // `clear()` function, which will clear all the different variables
  displayResult = false;
  display.value = null;
  currentValue = null;
  oldValue = null;
};

const deleteNum = () => {
  // `delete()` for clearing a single number
};

const appendNumber = (number) => {
  // determines what will occur every time a user clicks on a number to add to the display
  if (displayResult) {
    // if a result is displayed clear the display
    clear();
  } else {
    // if no result is displayed, add the number to the display list
  }

  display.textContent = display.textContent += number;
  display.value = display.textContent;
  displayResult = true; // display the result
};

const chooseOperation = (operation) => {
  // `chooseOperation(operation)` function that controls what will happen anytime a user clicks on any operation button
  // display.textContent = display.textContent += operation;
  // display.value = display.textContent;
};

const compute = () => {
  // takes the values inside your calculator and displays the result
};

const updateDisplay = () => {
  // lets us update the values inside of the output
};