// *** Write your code here***

let display = document.querySelector('input[type="text"]');

let dot = null;
// let operator = null;
let operands = [];
// let equals = null;

addGlobalEventListener("click", 'input[type="button"]', (e) => {
  if (e.target.hasAttribute("data-number")) {
    appendNumber(e.target.value);
    // console.log(`Clicked Number: ${e.target.value}`);
  } else if (e.target.hasAttribute("data-operation")) {
    chooseOperation(e.target.value);
    // console.log(`Clicked Operator: ${typeof e.target.value}`);
  } else if (e.target.hasAttribute("data-dot")) {
    console.log(`Clicked Dot: ${e.target.value}`);
  } else if (e.target.hasAttribute("data-clear")) {
    clear();
  } else if (e.target.hasAttribute("data-delete")) {
    deleteVal();
  } else {
    // console.log(`Clicked Equals: ${e.target.value}`);
    compute();
  }
});

function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) callback(e);
  });
}

// `clear()` function, which will clear all the different variables
const clear = () => display.value = '';

const deleteVal = () => {
  // `delete()` for clearing a single number
  display.value = display.value.slice(0, -1);
};

// determines what will occur every time a user clicks on a number to add to the display
const appendNumber = (number) => {
  display.textContent = display.textContent += number;
  display.value = display.textContent;

  operands.push(parseInt(number));
};

// `chooseOperation(operation)` function that controls what will happen anytime a user clicks on any operation button
const chooseOperation = (operation) => {
  display.textContent = display.textContent += operation;
  display.value = display.textContent;
};

// takes the values inside your calculator and displays the result
const compute = () => {
  display.value=eval(display.value)
};

const updateDisplay = () => {
  // lets us update the values inside of the output
};
