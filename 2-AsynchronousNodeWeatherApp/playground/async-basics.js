/** Async Basics */
/** Call Stack & Event Loop */

console.log('Starting app');

// This prints after Finishing app message
setTimeout(() => {
    console.log('Inside of callback');
},2000); //time in milliseconds

// Also prints after Finishing app message even tho we put 0 ms
setTimeout(() =>{
    console.log('Second setTimeout');
},0);

console.log('Finishing app');