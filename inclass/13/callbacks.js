// Learn how callback functions work
// node --watch callbacks.js
Array.prototype.doThis = loopOver;

// #region Demo
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const abbreviate = (item, index, array) => console.log(`${index + 1}: ${item.substring(0,3)}`);

days.doThis(abbreviate);
months.doThis(abbreviate);
// #endregion

function loopOver(callback) {
    console.log('Looping over this:\n', this);
    console.log('by calling this on each element\n', callback?.toString());
    console.log('......');
    for(let index = 0; index < this.length; index++) {
        let item = this[index];
        callback(item, index, this);
    }
}
