// node --watch demo.js
console.log('Lesson 12 demo.js has loaded');
console.log('===============================');
console.log();

console.log('Saving toward a purchase');
console.log('------------------------');

let laptopCost = 950;
let savingsBalance = 320;
let monthlyDeposit = 135;
let month = 0;

while (savingsBalance < laptopCost) {
    month = month + 1;
    savingsBalance = savingsBalance + monthlyDeposit;
    console.log(`Month ${month}: $${savingsBalance}`);
}

console.log(`Goal reached after ${month} months.`);
console.log();

console.log('Study session totals');
console.log('--------------------');

let studyMinutes = [45, 30, 0, 75, 50, 90, 20];
let totalMinutes = 0;
let completedSessions = 0;

// A for loop is similar to the while loop in that the
// conditional expression is evaluated before the loop
for (let index = 0; index < studyMinutes.length; index++) {
    let minutes = studyMinutes[index];
    if (minutes > 0) {
        completedSessions++; // count this as a completed study session
        totalMinutes += minutes; // accumulate the time spent
        console.log(`Session ${index + 1}: ${minutes} minutes`);
    } else {
        console.log(`Session ${index + 1}: missed`);
    }

    if (minutes > 75) {
        console.log('   Long study session...');
    }
}

let averageMinutes = totalMinutes / completedSessions;

console.log(`Completed sessions: ${completedSessions}`);
console.log(`Total minutes: ${totalMinutes}`);
console.log(`Average minutes: ${averageMinutes.toFixed(1)}`);
console.log();

// NOTE: Skipped another simple loop....

console.log('Weekly habit tracker');
console.log('--------------------');

let habits = ['Read', 'Code', 'Review'];
let days = ['Mon', 'Tue', 'Wed', 'Thu'];

for (let habitIndex = 0; habitIndex < habits.length; habitIndex++) {
    let line = `${habits[habitIndex]}`;

    for (let dayIndex = 0; dayIndex < days.length; dayIndex++) {
        line = `${line} ${days[dayIndex]}=[ ]`;
    }

    console.log(line);
}
console.log();

console.log('Study Threshold Check');
console.log('---------------------');

let rewardThreshold = 180;
let checkedDays = 0;
let runningTotal = 0;

for (let minutes of studyMinutes) {
    checkedDays = checkedDays + 1;
    runningTotal = runningTotal + minutes;

    if (runningTotal >= rewardThreshold) {
        break; // Early exit of the loop
    }
}

console.log(`Checked ${checkedDays} days.`);
console.log(`Running total: ${runningTotal} minutes.`);
console.log();
