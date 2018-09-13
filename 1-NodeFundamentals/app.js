/** Move app.js to root to test it, or remove all instances of 1-NodeFundamentals/ */

//console.log('Starting app.js');

// getting FileSystem - builtin
const fs = require('fs');
// getting OS - builtin
const os = require('os');
// getting lodash
const _ = require('lodash');
// getting Yargs
const yargs = require('yargs');


// getting our own files by relative path
const notes = require('./1-NodeFundamentals/notes.js');

// let user = os.userInfo();
// let res = notes.addNote();
// console.log(res);

//console.log(user);

// Open/Create greetings.txt and append "Hello World"
//fs.appendFileSync('1-NodeFundamentals/greetings.txt', 'Hello World');

//fs.appendFileSync('1-NodeFundamentals/greetings.txt', 'Hello ' + user.username + '!');
// Or we can use ES6 feature called template strings
//fs.appendFileSync('1-NodeFundamentals/greetings.txt', `Hello ${user.username}!`);

// We can use notes.age because we used module.exports in notes.js
//fs.appendFileSync('1-NodeFundamentals/greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);


/** Challenge - 10. Requiring Your Own Files */
// let math = notes.add(8,-1);
// console.log(math);

/** Using 3rd party modules */
// console.log(_.isString(true)); //false
// console.log(_.isString('Ivan')); //true

// uniq will remove all duplicates from array
//let filteredArray = _.uniq(['Ivan',1 , 'Ivan', 1, 2, 3, 4]);
// Testing Nodemon
//let filteredArray = _.uniq(['Ivan']);

//console.log(filteredArray); // [ 'Ivan', 1, 2, 3, 4 ]


/** Getting User Input */
/** Simplified Input with Yargs */
/** Working with JSON */

/** Before - Requiring Args and Advanced Yargs*/
//const argv = yargs.argv;

/** Requiring Arguments and Advanced Yargs*/
const titleOptions = {
    describe: 'Title of note',
    demand: true, // required
    alias: 't' // can use -t instead of --title
};
const bodyOptions = {
    describe: 'Content of the note',
    demand: true,
    alias: 'b'
};

const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .help() // we can now run -- help on app.js or specific command
    .argv;

//console.log(process.argv);
//let command = process.argv[2];
let command = argv._[0];
// console.log('Command' , command);
// console.log('Process', process.argv);
// console.log('Yargs', argv);

if ( command === 'add') {
    let note = notes.addNote(argv.title, argv.body);

    /** Refactor for Reusability */
    if ( note ) {
        console.log('Note created.');
        // console.log('---');
        // console.log(`Title : ${note.title}`);
        // console.log(`Body : ${note.body}`);
        notes.logNote(note);
    } else {
        console.log('Note title already in use!');
    }
} else if ( command === 'list') {
    let allNotes = notes.getAll();

    /** Listing Notes */
    console.log(`Printing ${allNotes.length} notes(s).`);
    allNotes.forEach((note) => notes.logNote(note));
} else if ( command === 'read') {
    let note = notes.getNote(argv.title);

    if (note) {
        console.log('Note to read.');
        // console.log('---');
        // console.log(`Title : ${note.title}`);
        // console.log(`Body : ${note.body}`);
        notes.logNote(note);
    } else {
        console.log('Note not found!')
    }

} else if ( command === 'remove') {
    let noteRemoved = notes.removeNote(argv.title);
    // Ternary operator
    let message = noteRemoved ? 'Note was removed!' : 'Note not found!';
    console.log(message);
} else {
    console.log('Command not recognized!');
}

