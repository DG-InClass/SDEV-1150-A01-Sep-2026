console.log('Lesson 13 demo.js has loaded');
console.log('===============================');
console.log();

console.log('Manual loop over study minutes');
console.log('--------------------');

let studyMinutes = [45, 30, 0, 75, 50, 90, 20];
let totalMinutes = 0;
let completedSessions = 0;

// Find the longest study session
let longestSession = studyMinutes[0]; // pick the first one
for(let index = 0; index < studyMinutes.length; index++) {
    let minutes = studyMinutes[index];
    totalMinutes += minutes;

    if (minutes > longestSession) {
        longestSession = minutes;
    }

    console.log(`Day ${index + 1}: ${minutes} minutes`);
}

console.log(`Total minutes: ${totalMinutes}`);
console.log(`Longest session: ${longestSession} minutes`);
console.log();

/* Built-in Array Functions
    Every array in JavaScript has a whole suite of built-in functions
    that do looping work with the array's contents. These functions
    make looping easy because it's all handled inside of the function.

    We'll explore some of the most common and useful of the Array functions.
    What's important to remember is that the argument(s) we send into these
    functions are, themselves, functions!
*/

console.log('ForEach for repeated output');
console.log('---------------------------');

studyMinutes.forEach((minutes, index) => {
    console.log(`Study log ${index + 1}: ${minutes} minutes`);
});
console.log();

// TODO: Review the concept of a Callback Function and explain the .forEach()
