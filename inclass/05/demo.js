displayHeading('Lesson 05 demo.js has loaded', '=');
console.log();

// Here we are declaring our function:
// Stating what goes into the function (parameter list)
// and what the function will do.
function displayHeading(text, marker = '-') {
    console.log(text);
    console.log(marker.repeat(text.length));
}

function calculateBusCount(studentCount, seatsPerBus) {
    return Math.ceil(studentCount / seatsPerBus);
}

function calculateMealCost(studentCount, mealPrice) {
    return studentCount * mealPrice;
}

function formatMoney(amount) {
    return `$ ${amount.toFixed(2)}`;
}

displayHeading('Field Trip demo');

// BTW, we can declare a series of variables in the same statement
// by separating each variable name/initialization with commas.
let studentCount = 75, seatsPerBus = 18, mealPrice = 9.75, admissionPrice = 14.5, depositPaid = 50;

let busCount = calculateBusCount(studentCount, seatsPerBus);
let mealCost = calculateMealCost(studentCount, mealPrice);

console.log(`${studentCount} students need ${busCount} buses.`);
console.log(`Meals will cost ${formatMoney(mealCost)}.`);
console.log();

// The following uses function expression syntax to declare the function.
const calculateAdmissionCost = function(studentCount, admissionPrice) {
    let total = studentCount * admissionPrice;
    return total;
}

displayHeading('Function expressions');

let admissionCost = calculateAdmissionCost(studentCount, admissionPrice);

console.log(`Admission will cost ${formatMoney(admissionCost)}`);
console.log(`calculateAdmissionCost is a ${typeof calculateAdmissionCost}`);

// Functions can be passed into other functions. Here's a set of examples.
const calculateAmount = function(firstAmount, secondAmount, operation) {
    // The operation variable is meant to be a reference to a function
    let result = operation(firstAmount, secondAmount);
    return result;
}

const addAmounts = function(first, second) {
    return first + second;
}

const subtractAmounts = function(firstValue, secondValue) {
    return firstValue - secondValue;
}

displayHeading('Passing functions into functions');

let tripSubtotal = calculateAmount(mealCost, admissionCost, addAmounts);
let remainingAfterDeposit = calculateAmount(tripSubtotal, depositPaid, subtractAmounts);

console.log(`Meal + admission subtotal: ${formatMoney(tripSubtotal)}`);
console.log(`Remaining after deposit: ${formatMoney(remainingAfterDeposit)}`);
console.log();

// TODO: Resume at Returning a Function from a Function
// #region 
// #region Step 1
displayHeading('Returning a function from a function');

const buildNumberedLogger = function() {
  let currentStep = 1;  

  return function(text) {
    console.log(`${currentStep}) ${text}`);  
    currentStep++;
  };  
};  
// #endregion

// #region Step 2
let logStep = buildNumberedLogger();

logStep(`Confirm ${studentCount} students.`);
logStep(`Reserve ${busCount} buses.`);
logStep(`Collect ${formatMoney(remainingAfterDeposit)} after the deposit.`);
console.log();
// #endregion

// #region Step 4, 5, 6
console.log('(each numbered logger has it own internal state....)\n');
let morningChecklist = buildNumberedLogger();
let afternoonChecklist = buildNumberedLogger();

displayHeading('Morning Checklist', '~');
morningChecklist('Take attendance.');
morningChecklist('Load lunches.');
morningChecklist("Meet at school entrance");
morningChecklist("Board buses for trip");
morningChecklist("Offload at Edmonton Science Centre");

displayHeading('Afternoon Checklist', '~');
afternoonChecklist('Meet outside for lunch');
afternoonChecklist('Assemble at observatory');
afternoonChecklist('Meet at the buses');
afternoonChecklist('Take attendance');
afternoonChecklist('Board buses for return.');
afternoonChecklist('Return to school.');
// #endregion

export {
  buildNumberedLogger,
  calculateAmount,
  calculateMealCost,
  calculateBusCount,
  calculateAdmissionCost,
  formatMoney
}
// #endregion
