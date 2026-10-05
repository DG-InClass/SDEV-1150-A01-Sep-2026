// Note: Because there is no "module resolver",
//       we have to specify the file extension.
//       We only need to do so in this lesson;
//       later node projects will not require
//       the .js extension.
import { displayHeading } from './display.js';
import { add, about } from './utils.js';
// 📍 Importing from another module - step 1

displayHeading('Lesson 10 demo.js has loaded', '=');
console.log('\t🎵 Code is spread across multiple files');
console.log();

console.log(`Module name: ${about.name}`);
console.log(`2 + 3 = ${add(2, 3)}`);
console.log();
// You cannot import items that are not exported
// 📍 Try un-commenting the following lines and
//    observe what is displayed in the terminal.
// import { info } from './utils.js';
// console.log(info);

// 📍 Importing from another module - step 2
