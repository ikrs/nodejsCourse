console.log('Starting notes.js');

// Module is availabel in all of our files
// Exports is object on Module property any everything on this object gets exported
//console.log(module);
//module.exports.age = 25;

//Exporting function learning
// module.exports.addNote = () => {
//     console.log('addNote');
//     return 'New note';
// };

//Challenge
// module.exports.add = (a,b) => {
//     return a + b;
// };

/** Adding and saving Notes - switched console.log for actual logic*/

const fs = require('fs');


let addNote = (title, body) => {
    //console.log('Adding note', title, body);
    let notes = [];
    let note = {
        title,
        body
    };

    // In case file doesn't exist
    try {
        let notesString = fs.readFileSync('1-NodeFundamentals/notes-data.json');
        notes = JSON.parse(notesString);
    } catch (e) {

    }

    // filter is an array method that takes callback
    // it gets called once for every item in array (foreach)
    // let duplicatedNotes = notes.filter((note) =>{
    //     // return true if titles match
    //     return note.title === title;
    // });

    // If we have one expression we can simplify our code from above
    let duplicatedNotes = notes.filter((note) => note.title === title);

    if (duplicatedNotes.length === 0) {
        // Push item to the end of the array
        notes.push(note);
        fs.writeFileSync('1-NodeFundamentals/notes-data.json', JSON.stringify(notes));
    }
};

let getAll = () => {
    console.log('Getting all notes');
};

let getNote = (title) => {
    console.log('Getting note with title ' ,title);
};

let removeNote = (title) => {
    console.log('Removing note with title ', title);
};

// We set object to exports
module.exports = {
    // addNote: addNote
    // ES6 shortcut - if object attribute and value have same name we can use this shorter code
    addNote,
    getAll,
    getNote,
    removeNote
};
