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


// #region Copy/Paste:
console.log('Map each value into display text');
console.log('--------------------------------');

let dailyLabels = studyMinutes.map((minutes, index) => {
  return `Day ${index + 1}: ${minutes} minutes`;
});

console.log(dailyLabels);
console.log();


console.log('Course task data');
console.log('----------------');

let courseTasks = [
  {
    title: 'Read loop examples',
    priority: 2,
    minutes: 25,
    complete: true,
  },
  {
    title: 'Finish array practice',
    priority: 1,
    minutes: 45,
    complete: false,
  },
  {
    title: 'Review callback syntax',
    priority: 3,
    minutes: 20,
    complete: false,
  },
  {
    title: 'Submit reflection',
    priority: 2,
    minutes: 15,
    complete: true,
  },
];

let taskNames = courseTasks.map((task) => {
  return task.title;
});

console.log(taskNames);
console.log();

console.log('Find one matching item');
console.log('----------------------');

let firstIncompleteTask = courseTasks.find((task) => {
  return task.complete === false;
});

let firstHighPriorityIndex = courseTasks.findIndex((task) => {
  return task.priority === 1;
});

console.log(firstIncompleteTask);
console.log(`First high-priority task index: ${firstHighPriorityIndex}`);
console.log();

console.log('Filter matching items');
console.log('---------------------');

let incompleteTasks = courseTasks.filter((task) => {
  return task.complete === false;
});

let quickTasks = courseTasks.filter((task) => {
  return task.minutes <= 25;
});

console.log('Incomplete tasks:');
console.log(incompleteTasks);
console.log('Quick tasks:');
console.log(quickTasks);
console.log();


console.log('Slice vs splice');
console.log('---------------');

let firstTwoTasks = courseTasks.slice(0, 2);
console.log('First two tasks from slice():');
console.log(firstTwoTasks);
console.log('Original courseTasks length after slice():');
console.log(courseTasks.length);


let editableTasks = [...courseTasks];
let removedTasks = editableTasks.splice(1, 1, {
  title: 'Practice slice and splice',
  priority: 1,
  minutes: 30,
  complete: false,
});

console.log('Removed task from splice():');
console.log(removedTasks);
console.log('Editable tasks after splice():');
console.log(editableTasks);
console.log('Original courseTasks length after editing the copy:');
console.log(courseTasks.length);
console.log();

console.log('Sort copied arrays');
console.log('------------------');

let tasksByMinutes = [...courseTasks].sort((firstTask, secondTask) => {
  return firstTask.minutes - secondTask.minutes;
});

let tasksByTitle = [...courseTasks].sort((firstTask, secondTask) => {
  return firstTask.title.localeCompare(secondTask.title);
});

console.log('By minutes:');
console.log(tasksByMinutes);
console.log('By title:');
console.log(tasksByTitle);

// #endregion
