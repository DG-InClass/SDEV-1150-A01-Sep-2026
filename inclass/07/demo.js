displayHeading('Lesson 07 demo.js has loaded', "=");
console.log();

/**
 * Display a heading in the console with a leading blank line.
 * @param {string} text The heading text
 * @param {string?} marker The underline character (defaults to `-`)
 */
function displayHeading(text, marker = "-") {
  console.log(); // Blank line before the heading
  console.log(text);
  console.log(marker.repeat(text.length));
}

// Begin Lesson 07
/* NOTE: Most of the code will be given as copy/paste
         Your job will be to
         1) Follow along and fill in the key areas noted with a 📍
         2) Review after class and add comments to "explain" the code to yourself
*/
// #region If Statement
displayHeading('Basic if statement');

let batteryPercent = 64;
let lowBatteryWarning = 20;


function checkBattery() {
    if (batteryPercent > lowBatteryWarning) { // 📍 Step 3 of "If Statement"
        console.log('Battery level is acceptable');
        console.log('The device can keep running'); // 📍 Step 5 of "If Statement"
    }
    console.log(`Battery percent: ${batteryPercent}%`);
    console.log();
}

checkBattery();

batteryPercent = 12;
checkBattery();
// #endregion

// #region If-Else Statement
displayHeading("Basic if-else statement");

function bookSeats(seats) {
    let fee = 0;
    if(theatreSeats >= reservedSeats + seats) {
        console.log('Booking confirmed.');
        reservedSeats += seats;
        fee = seats * 12.50;
        console.log(`${seats} seats booked for $ ${fee.toFixed(2)}`);
    } else { // 📍 Step 2 of "If-Else Statement"
        console.log("Booking declined.");
        console.log(`Unable to book ${seats} seats; not enough seats available.`);
    }
    console.log();
    return fee;
}

let theatreSeats = 25, reservedSeats = 5, groupAFee, groupBFee;
groupAFee = bookSeats(7); // TODO: What does this return? 7 seats booked for $ 87.50

groupBFee = bookSeats(20); // TODO: What does this return? Unable to book 20 seats

if(groupBFee == 0) {
    groupBFee = bookSeats(10);
}
console.log(`${theatreSeats - reservedSeats} seats are still available.`);
console.log();
// #endregion

// #region Booleans Variables and "Truthy"/"Falsey" Conditions
displayHeading('Booleans and "Truthy"/"Falsey" Conditions');

// Setting the isEmpty variable to an explititly true or false value
let isEmpty = reservedSeats == 0; // true; // 📍 TODO: Step 3 of "Boolean Variables..."
//            \__ expression __/
//               true | false

if(isEmpty) {
    console.log('Play cancelled - no reservations');
} else {
    console.log('The play is on!');
}

function announcePlayStatus(){
    if (reservedSeats) // <--- Here we are using a truthy/falsy evaluation
        console.log(`The play is on! ${reservedSeats} in the audience.`);
    else
        console.log('Play cancelled - no reservations');
}

announcePlayStatus();

/*
TODO: Identify 5 values that are regarded as "falsy" in JavaScript:
- 
- 
- 
- 
- 
*/


reservedSeats = 0; // everybody cancelled
announcePlayStatus();

console.log();
// #endregion

// #region Nested If-Else Statements
displayHeading('Nested If-Else');


function reportTriangle(base, height, diagonal) {
    let triangleType;
    // It only has to be close for our purposes.
    let hypotenuse = Math.round(Math.hypot(base, height) * 1000) / 1000; // 📍 Step  2 of "Nested If/Else..."
    if(diagonal == hypotenuse) {
        triangleType = 'right-angle';
    } else {
        if(diagonal > hypotenuse) { 
            triangleType = 'acute';
        } else {
            triangleType = 'obtuse';
        }
    }
    // Challenge: How would you check other characteristics of the triangle?
    // - Equilateral triangles have three equal sides
    // - Isoceles triangles have two equal sides
    // - Scalene triangles have no equal sides
    // - Can scalene triangles also be right triangles?

    // 📍 Step 5 of "Nested If/Else..."
    console.log(`The triangle has side lengths of ${base}, ${height} and ${diagonal}`);
    console.log(`Classification: ${triangleType} triangle`);
    console.log();
}

reportTriangle(12, 35, 37);
reportTriangle(7, 5, 17);
reportTriangle(5, 7, 8);
// #endregion

// # 📍 Demo Verification Exports
export { checkBattery, bookSeats, announcePlayStatus, reportTriangle }
