/** Fetching Data */
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (error, client) => {

    if (error) {
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');
    const db = client.db('TodoApp');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result)
    // });

    // deleteOne - find first with given argument and delete it
    // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete - finds first with given argument and delete it
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });


    // Challenge
    // db.collection('Users').deleteMany({
    //     name:'Ivan'
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5bab90cc2b90d0548dca155f')
    }).then((result) => {
        console.log(result);
    });

    client.close();
});

