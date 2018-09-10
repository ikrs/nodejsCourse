console.log('Starting notes.js');

// Module is availabel in all of our files
// Exports is object on Module property any everything on this object gets exported
//console.log(module);
module.exports.age = 25;

//Exporting function
module.exports.addNote = () => {
    console.log('addNote');
    return 'New note';
};

//Challenge
module.exports.add = (a,b) => {
    return a + b;
};