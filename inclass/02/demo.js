/* Dan Gilleland - Sep 10, 2026
   1) Make sure I have the terminal window open in THIS folder
   2) node --watch demo.js
*/
// Single-line comments begin with a double-slash
console.log('Lesson 02 demo.js has loaded');
console.log('=============================');
console.log(); // Prints a blank line

// create a variable and give it a value
let report = 'Community Event Planning Demo';
report += '\n-----------------------------';

let eventName = 'Neighbourhood Game Night';
let roomName = 'Learning Commons';
let guestCount = 18;

report += `\nEvent: ${eventName}`;
report += `\nRoom: ${roomName}`;
report += `\nExpected guests: ${guestCount}`;

let tablesNeeded;
let seatsPerTable = 6;

tablesNeeded = guestCount / seatsPerTable;

report += '\n';
report += `\nTables needed: ${tablesNeeded}`;

// TODO: Continue with Step 6....

let snackCost = 3.75;
let drinkCost = 1.5;
let suppliesFee = 12;
let snackBudget = guestCount * snackCost;
let drinkBudget = guestCount * drinkCost;
let totalBudget = snackBudget + drinkBudget + suppliesFee;

report += '\n';
report += `\nSnack budget: $${snackBudget.toFixed(2)}`;
report += `\nDrink budget: $${drinkBudget.toFixed(2)}`;
report += `\nSupplies fee: $${suppliesFee.toFixed(2)}`;
report += `\nTotal budget: $${totalBudget.toFixed(2)}`;

let signUpText = '18';
let extraGuestText = '4';
let signUpCount = parseInt(signUpText);
let extraGuestCount = parseInt(extraGuestText);
let finalGuestCount = signUpCount + extraGuestCount;

report += '\n';
report += `\nThe value ${signUpText} is a ${typeof signUpText}.`;
report += `\nAfter parseInt(), ${signUpCount} is a ${typeof signUpCount}.`;
report += `\nFinal guest count: ${finalGuestCount}`;


console.log(report);