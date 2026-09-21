console.log('Lesson 03 demo.js has loaded');
console.log('=============================');
console.log();

console.log('Primitive values');
console.log('----------------');

let workshopTitle = 'Intro to Digitial Photography'; // string
let seatsAvailable = 16; // number
let registrationOpen = true; // boolean - true | false

console.log(`The value "${workshopTitle}" is a ${typeof workshopTitle}`);
console.log(`The value ${seatsAvailable} is a ${typeof seatsAvailable}`);
console.log(`The value ${registrationOpen} is a ${typeof registrationOpen}`);
console.log(); // blank line

console.log('Object literals');
console.log('---------------');

let workshop = { // starts with a curly brace
    title: 'Intro to Digital Photography',
//  \___/  \______ value _______________/
    room: 'Media Lab',
    capacity: 16,
    registered: 11,
    isOnline: false    
}; // ends with a curly brace

console.log(workshop);
console.log(`The workshop variable is a ${typeof workshop}`);
console.log(`${workshop.title} meets in ${workshop.room}.`);
console.log(`${workshop.capacity - workshop.registered} seats are still available.`);

console.log('Objects can keep related values together');
console.log('----------------------------------------');

let facilitator = {
    firstName: 'Avery',
    lastName: 'Chen',
    email: 'avery.chen@example.test',
    yearsExperience: 4,
    active: true
};

console.log(`${facilitator.firstName} ${facilitator.lastName} is facilitating.`);
console.log(`\tContact: ${facilitator.email}`);
console.log(`\tActive facilitator: ${facilitator.active}`);
console.log();

console.log('Objects are dynamic');
console.log('-------------------');

workshop.facilitator = `${facilitator.firstName} ${facilitator.lastName}`;
workshop.waitlist = 3;
workshop.registered = workshop.registered + 2;

console.log(`Facilitator added to workshop: ${workshop.facilitator}`);
console.log(`Updated registrations: ${workshop.registered}`);
console.log(`Waitlist count: ${workshop.waitlist}`);
console.log(workshop);
console.log();

console.log('Date objects');
console.log('------------');

// We're using a class/constructor function to create our object
let today = new Date(); // The Date object includes date and time info
let workshopDate = new Date('October 22, 2026 18:30:00');

console.log(`Today is ${today.toDateString()}.`);
console.log(`The workshop starts on ${workshopDate.toDateString()}.`);
console.log(`The workshop year is ${workshopDate.getFullYear()}.`);
//                                  \_ object _/ \_ method __/
console.log(`The workshop month index is ${workshopDate.getMonth()}.`);
// In JavaScript, you will see "index"-like values starting from 0
console.log(`The workshop day of the month is ${workshopDate.getDate()}.`);
console.log();

// TODO: Resume with "Built-in Objects", step 3
console.log("Changing object state with methods");
console.log("----------------------------------");

let reminderDate = new Date(workshopDate);
reminderDate.setDate(reminderDate.getDate() - 7);
//                   \____ back one week _____/

// Because objects are "dynamic" in JavaScript,
// we can "add" new properties just by assigning
// a value to the property
workshop.startsOn = workshopDate;
workshop.reminderOn = reminderDate;

console.log(`Reminder date: ${workshop.reminderOn.toDateString()}`);
console.log(`Workshop date: ${workshop.startsOn.toDateString()}`);
console.log();

console.log('Another built-in object');
console.log('-----------------------');

let signUpUrl = new URL('https://library.example.test/workshops/photo-basics?level=beginner');

console.log(`Signup link: ${signUpUrl.toString()}`); // Every object has a .toString()
console.log(`Protocol: ${signUpUrl.protocol}`);
console.log(`Host: ${signUpUrl.host}`);
console.log(`Path: ${signUpUrl.pathname}`); 
console.log(`Level Parameter: ${signUpUrl.searchParams.get('level')}`);
console.log();

console.log('Final workshop object');
console.log('---------------------');
console.log(workshop);

export { workshop, facilitator, signUpUrl }
