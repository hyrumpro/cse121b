/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
  return number1 + number2;
}

function addNumbers() {
  var number1 = parseFloat(document.getElementById("add1").value);
  var number2 = parseFloat(document.getElementById("add2").value);
  document.getElementById("sum").value = add(number1, number2);
}

document.getElementById("addNumbers").addEventListener("click", addNumbers);


/* Function Expression - Subtract Numbers */
const subtract = function(subtract1, subtract2) {
  return subtract1 - subtract2;
};

function subtractNumbers() {
  var subtract1 = parseFloat(document.getElementById("subtract1").value);
  var subtract2 = parseFloat(document.getElementById("subtract2").value);
  document.getElementById("difference").value = subtract(subtract1, subtract2);
}

document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);


/* Arrow Function - Multiply Numbers */
const multiply = (factor1, factor2) => factor1 * factor2;

function multiplyNumbers() {
  var factor1 = parseFloat(document.getElementById("factor1").value);
  var factor2 = parseFloat(document.getElementById("factor2").value);
  document.getElementById("product").value = multiply(factor1, factor2);
}

document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */


function divide(dividend, divisor, divisionCallback) {
  if (divisor === 0) {
    return handleDivisionZero();
  }
  return dividend / divisor;
}

function handleDivisionZero() {
  alert("Division by zero is not allowed.");
}

function divideNumbers() {
  var dividend = parseFloat(document.getElementById("dividend").value);
  var divisor = parseFloat(document.getElementById("divisor").value);
  document.getElementById("quotient").value = divide(dividend, divisor);
}
document.getElementById("divideNumbers").addEventListener("click", divideNumbers);


/* Decision Structure */

let today = new Date();
let currentYear;
currentYear = today.getFullYear();
document.getElementById("year").value = currentYear;




/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
 
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.getElementById("array").textContent = arr;


/* Output Odds Only Array */
let oddNumbers = arr.filter(function (number) {
  return number % 2 !== 0;
});

let oddNumbersString = oddNumbers.join(", ");

document.getElementById("odds").textContent = oddNumbersString;


/* Output Evens Only Array */
let evenNumbers = arr.filter(function (number) {
  return number % 2 === 0;
});
let evenNumbersString = evenNumbers.join(", ");

document.getElementById("evens").textContent = evenNumbersString;

/* Output Sum of Org. Array */
let sumarr = arr.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

document.getElementById("sumOfArray").textContent = sumarr;

/* Output Multiplied by 2 Array */
let multipliedArray = arr.map(function (element) {
  return element * 2;
});

let multipliedArrayString = multipliedArray.join(", ");


document.getElementById("multiplied").textContent = multipliedArrayString;

/* Output Sum of Multiplied by 2 Array */


let sumOfMultiplied = multipliedArray.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);


document.getElementById("sumOfMultiplied").textContent = sumOfMultiplied;