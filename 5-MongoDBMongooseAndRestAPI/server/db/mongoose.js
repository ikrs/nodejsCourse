let mongoose = require('mongoose');

// We tell mongoose we want to use built in Promise library instead of some 3rd party one
mongoose.Promise = global.Promise;
// Connect to database
mongoose.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true });

module.exports= {
    mongoose
};