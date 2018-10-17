/** Setting Up Mongoose */

let{mongoose} = require('./db/mongoose');

let Todo = mongoose.model('Todo', {
    text: {
        type: String,
        // VALIDATORS BELOW
        required: true, // Validator
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

let newTodo = new Todo({
    text: 'Edit this video    '
});

// Responsible for saving
// .save returns a promise
// newTodo.save().then((doc) => {
//     console.log('Saved Todo ', JSON.stringify(doc,undefined,2));
// }, (e) => {
//     console.log('Unable to save Todo');
// });

/**
 -------------------------- CHALLENGE - Setting Up Mongoose --------------------
 */

// let otherTodo = new Todo({
//     text: 'Challange text',
//     completed: true,
//     completedAt: 201810171401
// });
//
// otherTodo.save().then((doc) => {
//     console.log('Saved Todo ', doc);
// }, (e) => {
//     console.log('Unable to save Todo ', e);
// });
/**
 --------------------------------------------------------
 */
/**
 * -------------------------- CHALLENGE - Validation,Types and Defaults-----------
 */

let User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

let newUser = new User({
    email: 'myemail@gmail.com   '
});

newUser.save().then((doc) => {
    console.log('Saved User ', JSON.stringify(doc,undefined,2));
}, (e) => {
    console.log('ERROR : ',e);
});


/**
 * -------------------------------------------------------------------------------
 */