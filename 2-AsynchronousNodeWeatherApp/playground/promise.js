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

/** Advanced Promises*/
let asyncAdd = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a==='number'
                && typeof b==='number') {
                resolve(a+b);
            } else {
                reject('Arguments must be numbers!');
            }
        }, 1500);
    });
};

// We chain Promises by calling return asyncAdd(result,33)
// Then the second .then on line 43 is responsible for second asyncAdd call
// .catch is error handler method
asyncAdd(5,'7').then((result) => {
    console.log(`Result : ${result}`);
    return asyncAdd(result, 33);
}).then((result) => {
    console.log(`Should be 45 : `, result);
}).catch((errorMessage) => {
    console.log(errorMessage);
});