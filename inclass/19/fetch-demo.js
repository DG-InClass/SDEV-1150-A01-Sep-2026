// inclass/19/fetch-demo.js
// node --watch fetch-demo.js
// 📍 Make sure that you have the API backend server running
//    on port 3000 - http://localhost:3000
console.log('Ad-hoc Fetch Demo');
console.log('-----------------');

// We use the fetch() function to make requests of other web servers
// from our client-side code.
// The fetch() function is an asynchronous function. What that means
// is that it will return a Promise of a response from the web server
// we are trying to get the data from.
// Here's an example with the web server that is supplying the
// planetary bodies.
fetch('http://localhost:3000/bodies') // Request data from this URL
    .then((response) => {
        // the response is an object with info from the server
        console.log(response.status);
        // Since I know that this response contains JSON data
        // I need to convert that JSON to a JavaScript object
        return response.json();
    })
    .then((data) => {
        console.log(data);
    });