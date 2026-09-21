// Dan Gilleland - Sep 21, 2026
// node --watch demo.js
console.log('Lesson 04 demo.js has loaded');
console.log('=============================');
console.log();

console.log('Creating arrays');
console.log('---------------');

let pickupItems = ['bread', 'milk', 'apples', 'coffee']; // declare an array
let itemPrices = [3.49, 4.25, 5.99, 12.5];
let itemIsFrozen = [false, false, false, false];
// All of the above are "parallel arrays" because their items match "positionally"
// e.g.:  pickupItems[1] matches with itemPrices[1] and itemIsFrozen[1]

console.log(pickupItems);
console.log(`pickupItems is a ${typeof pickupItems}.`);
console.log(`pickupItems has ${pickupItems.length} entries.`);
console.log(`Is pickupItems an array? ${Array.isArray(pickupItems)}`);
console.log();

console.log('Accessing entries by index');
console.log('--------------------------');

console.log(`First item: ${pickupItems[0]}`);
console.log(`Second item: ${pickupItems[1]}`);
console.log(`Last item: ${pickupItems[pickupItems.length - 1]}`);
console.log(`Item at index 10: ${pickupItems[10]}`);
console.log(`Item at index -1: ${pickupItems[-1]}`);
console.log();

console.log('Updating array entries');
console.log('----------------------');

// changing existing items in the arrays
pickupItems[1] = 'oat milk';
itemPrices[1] = 5.15;
// Adding a new item to the arrays
pickupItems[pickupItems.length] = 'frozen peas';
itemPrices[itemPrices.length] = 3.75;
itemIsFrozen[itemIsFrozen.length] = true;

console.table(pickupItems);
console.table(itemPrices);
console.table(itemIsFrozen);
console.log();

console.log('Related arrays need matching indexes');
console.log('------------------------------------');

let firstItem = pickupItems[0];
let firstPrice = itemPrices[0];
let firstFrozenStatus = itemIsFrozen[0];

console.log(`${firstItem} costs $ ${firstPrice.toFixed(2)}.`);
console.log(`Frozen item? ${firstFrozenStatus}`);

let lastIndex = pickupItems.length - 1; // The last filled position of the array
let lastItem = pickupItems[lastIndex];
let lastPrice = itemPrices[lastIndex];
let lastFrozenStatus = itemIsFrozen[lastIndex];

console.log(`${lastItem} costs $ ${lastPrice.toFixed(2)}`);
console.log(`Frozen item? ${lastFrozenStatus}`);
console.log();

console.clear(); // clears the screen
// comment out the line above if you want to keep seeing everything
// that's been output in this demo.
console.log('Arrays compared with objects');
console.log('----------------------------');

let store = {
    name: 'Corner Market',
    aisleCount: 9,
    pickupAvailable: true
};

console.log(`Is store an array? ${Array.isArray(store)}`);
console.log(`Is itemPrices an array? ${Array.isArray(itemPrices)}`);
console.log(`Store name with dot notation: ${store.name}`);
console.log(`Store name with bracket notation: ${store['name']}`);
console.log(`Array entry with bracket notation: ${pickupItems[2]}`);
console.log();

console.log('Property names tha need bracket notation');
console.log('----------------------------------------');

// The quotes around the property names are needed because,
// by themselves, they are not "valid" variable names (due
// to the space in the name).
let pickupDetails = {
    'order number': 'GM-2048',
    'customer name': 'Riley Morgan',
    status: 'ready'
}

console.log(`Order number: ${pickupDetails['order number']}`);
console.log(`Customer: ${pickupDetails['customer name']}`);
console.log(`Status: ${pickupDetails.status}`);
console.log();

