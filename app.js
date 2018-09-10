console.log('Starting app.js');

// getting FileSystem - builtin
const fs = require('fs');
// getting OS - builtin
const os = require('os');
// getting our own files by relative path
const notes = require('./1-NodeFundamentals/notes.js');

let user = os.userInfo();
let res = notes.addNote();
console.log(res);

//console.log(user);

// Open/Create greetings.txt and append "Hello World"
//fs.appendFileSync('1-NodeFundamentals/greetings.txt', 'Hello World');

//fs.appendFileSync('1-NodeFundamentals/greetings.txt', 'Hello ' + user.username + '!');
// Or we can use ES6 feature called template strings
//fs.appendFileSync('1-NodeFundamentals/greetings.txt', `Hello ${user.username}!`);

// We can use notes.age because we used module.exports in notes.js
fs.appendFileSync('1-NodeFundamentals/greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);


// Challenge
let math = notes.add(8,-1);
console.log(math);