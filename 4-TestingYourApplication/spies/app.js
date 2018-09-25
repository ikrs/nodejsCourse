const db = require('./db.js');

module.exports.handleSignup = (email, password) => {
    // Check if email already exists


    // Save user to the database
    db.saveUser({
        email,
        password
    });

    // Send the welcome email
};