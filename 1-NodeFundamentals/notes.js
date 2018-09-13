// console.log('Starting notes.js');

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
/** Refactor for Reusability */

const fs = require('fs');

let fetchNotes = () => {
    // In case file doesn't exist
    try {
        let notesString = fs.readFileSync('1-NodeFundamentals/notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

let saveNotes = (notes) => {
    fs.writeFileSync('1-NodeFundamentals/notes-data.json', JSON.stringify(notes));
};


let addNote = (title, body) => {
    //console.log('Adding note', title, body);
    //let notes = [];
    let notes = fetchNotes();
    let note = {
        title,
        body
    };

    // Refactored, moved in to fetchNotes
    // In case file doesn't exist
    // try {
    //     let notesString = fs.readFileSync('1-NodeFundamentals/notes-data.json');
    //     notes = JSON.parse(notesString);
    // } catch (e) {
    //
    // }

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
        // Refactored, moved to saveNotes
        //fs.writeFileSync('1-NodeFundamentals/notes-data.json', JSON.stringify(notes));
        saveNotes(notes);

        return note;
    }
};

let getAll = () => {
    //console.log('Getting all notes');
    return fetchNotes();
};
/** Reading note and reusability */
let getNote = (title) => {
    //console.log('Getting note with title ' ,title);
    let notes = fetchNotes();
    let readNote = notes.filter((note) => note.title === title);
    // filter always returns an array
    return readNote[0];
};
/** Removing note*/
let removeNote = (title) => {
    //console.log('Removing note with title ', title);
    let notes = fetchNotes();
    // If the title matches given title then we wont add it to filteredNotes array
    let filteredNotes = notes.filter((note) => note.title !== title );
    //Saving new notes
    saveNotes(filteredNotes);

    // it will return true if they are not equal
    return notes.length !== filteredNotes.length;
};

let logNote = (note) => {
    /** Debugging Note Application*/
    debugger;
    console.log('---');
    console.log(`Title : ${note.title}`);
    console.log(`Body : ${note.body}`);
};


// We set object to exports
module.exports = {
    // addNote: addNote
    // ES6 shortcut - if object attribute and value have same name we can use this shorter code
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};
