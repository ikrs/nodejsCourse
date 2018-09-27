/** Fetching Data */
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (error, client) => {

    if (error) {
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');
    const db = client.db('TodoApp');

    // // Find
    // // .toArray returns a Promise so we can add .then call after
    // // find all todos that are not completed - .find({completed:false})....
    // // find by id - .find({_id: new ObjectID('57abb814c1b824944d5f508e')}).....
    // db.collection('Todos').find({
    //     completed:false
    // }).toArray().then((documents) => {
    //
    //     console.log('Todos');
    //     console.log(JSON.stringify(documents, undefined,2));
    //
    // }, (error) => {
    //     console.log('Unable to fetch todos : ', error);
    // });


    // Count - counts all documents
    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count : ${count}`);
    // }, (error) => {
    //     console.log('Unable to fetch todos : ', error);
    // });

    // Challenge get all users with given name
    db.collection('Users').find({
        name: 'Ivan'
    }).toArray().then((users) => {
        console.log('Users');
        console.log(JSON.stringify(users, undefined, 2));
    }, (error) => {
        console.log(`Unable to fetch users : ${error}`);
    });


    client.close();
});

