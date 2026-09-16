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

let snackCost = 3.75;
let drinkCost = 1.5;
let suppliesFee = 12;
let snackBudget = guestCount * snackCost;
let drinkBudget = guestCount * drinkCost;
let totalBudget = snackBudget + drinkBudget + suppliesFee;

report += '\n';
report += `\nSnack budget: $${snackBudget}`;
report += `\nDrink budget: $${drinkBudget}`;
report += `\nSupplies fee: $${suppliesFee}`;
report += `\nTotal budget: $${totalBudget}`;

let signUpText = '18';
let extraGuestText = '4';
let signUpCount = parseInt(signUpText);
let extraGuestCount = parseInt(extraGuestText);
let finalGuestCount = signUpCount + extraGuestCount;

report += '\n';
report += `\nThe value ${signUpText} is a ${typeof signUpText}.`;
report += `\nAfter parseInt(), ${signUpCount} is a ${typeof signUpCount}.`;
report += `\nFinal guest count: ${finalGuestCount}`;

// TODO: Continue with Step 9
let donationText = '25.50';
let donationAmount = parseFloat(donationText);

report += '\n';
report += `\nA donation entered as '${donationText}' becomes ${donationAmount}.`;
report += `\nDonation type after parseFloat(): ${typeof donationAmount}`;

let numberExample = 7;
let stringExample = '7';

report += '\n';
report += `\n7 + '7' produces ${numberExample + stringExample}.`;
report += `\n7 * '7' produces ${numberExample * stringExample}.`;
report += `\n7 + parseInt('7') produces ${numberExample + parseInt(stringExample)}.`;

const gstRate = 0.05; // const means that the variable's value cannot be changed
// gstRate = 0.1; // This would produce an error
let tax = totalBudget * gstRate;
let totalWithTax = totalBudget + tax;

report += '\n';
report += `\nGST rate: ${gstRate}`;
report += `\nTax: $ ${tax.toFixed(2)}`;
report += `\nTotal with tax: $ ${totalWithTax.toFixed(2)}`;

console.log(report);

export { tax, totalWithTax, gstRate, totalBudget, donationText, donationAmount }
