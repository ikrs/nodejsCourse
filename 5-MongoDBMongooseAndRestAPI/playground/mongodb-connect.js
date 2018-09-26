/** Connecting to MongoDB */
//const MongoClient = require('mongodb').MongoClient;

//Object descructuring - lets us pull out the properties from an object
// creating variables, in this case we grab name from user object
// let user = {name:'Ivan',age:32};
// let {name} = user;
// console.log(name);

const {MongoClient, ObjectID} = require('mongodb');

// Creating new ObjectId
// let obj = new ObjectID();
// console.log(obj);

// Connecting to mongodb
// TodoApp will automatically be created
MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (error, client) => {

    if (error) {
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');
    const db = client.db('TodoApp');

    // .collection - Argument is string name of a collection we want to insert in to
    // .insertOne - object to save in MongoDB, callback function
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert Todo : ', error);
    //     }
    //     // result.ops contains all the documents that were inserted
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // Inser new doc into Users (name, age, location)
    // db.collection('Users').insertOne({
    //     name: 'Ivan',
    //     age: 32,
    //     location: 'Zagreb'
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user :', error);
    //     }
    //     //console.log(JSON.stringify(result.ops, undefined, 2));
    //     // ObjectId, show Id info
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    // Close the connection to MongoDB Server
    client.close();
});

