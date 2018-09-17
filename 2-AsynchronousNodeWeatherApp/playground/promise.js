/** Intro to ES6 Promises */

// Promise takes function as a argument
let somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hey it worked');
    }, 2500);

    reject('Unable to fulfill promise');
});

// In order to actually do something when Promise gets resolved or rejected we need to call Promise method called then
// First function will ONLY get called if Promise gets resolved
// Second function will ONLY get called if Promise gets rejected
somePromise.then((message) => {
    console.log(`Success : ${message}`);
}, (errorMessage) => {
    console.log(`Error : ${errorMessage}`);
});