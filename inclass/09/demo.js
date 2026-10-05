// Note: Because there is no "module resolver",
//       we have to specify the file extension.
//       We only need to do so in this lesson;
//       later node projects will not require
//       the .js extension.
import { displayHeading } from './display.js';
import { add, about } from './utils.js';
// 📍 Importing from another module - step 1
import { Shape, supportedShapes } from './shapes.js';

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
displayHeading('Shape module');
console.log(`Supported shapes: ${supportedShapes.join(', ')}`);
console.log();

let circle = new Shape('circle');
//           \_/ 
//           new keyword is required when using a constructor function to create an object
// The new keyword basically does two things: It sets aside enough memory for the object and it returns the memory address of the object after the Constructor Function runs.
circle.assignDimensions({ radius: 5}); // Notice that I'm passing an object into this function
console.log(`Circle area: ${circle.area().toFixed(2)}`);

let square = new Shape('square');
square.assignDimensions({ length: 8});
console.log(`Square area: ${square.area().toFixed(2)}`);

let triangle = new Shape('triangle');
triangle.assignDimensions({ base: 10, height: 6});
console.log(`Triangle area: ${triangle.area().toFixed(2)}`);
console.log();
